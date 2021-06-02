import React, { useState, useEffect } from 'react';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { getHotels, putHotel, updateHotel } from '../../actions/hotels'


const FormHotel = ({ currentId, setCurrentId, currentRoomId, setCurrentRoomId }) => {

    const [hotelData, setHotelData] = useState({
        hotelID: '', hotelName: '', hotelDetails: '', hotelPhoto: '', roomID: '', roomType: '', facilities: '', roomPhoto: '', roomAvailability: '', roomCost: ''
    });

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getHotels());
    }, [dispatch]);

    const hotel = useSelector((state) => currentId ? state.hotels.find((h) => h.hotelID === currentId && h.roomID === currentRoomId): null);

    const hotels = useSelector((state) => state.hotels);


    useEffect(() => {
        if (hotel) setHotelData(hotel);
    }, [hotel])

    const handleSubmit = (e) => {
        e.preventDefault();
        function formater() {
            hotelData.hotelID = hotelData.hotelID.toUpperCase();
            hotelData.roomID = hotelData.roomID.toUpperCase();
            hotelData.hotelName = capitalize(hotelData.hotelName);
            hotelData.roomType = capitalize(hotelData.roomType);
            hotelData.facilities = capitalize(hotelData.facilities);
            hotelData.roomAvailability = capitalize(hotelData.roomAvailability);
            
            function capitalize(input) {  
                var words = input.split(' ');  
                var CapitalizedWords = [];  
                words.forEach(element => {  
                    CapitalizedWords.push(element[0].toUpperCase() + element.slice(1, element.length).toLowerCase());  
                });  
                return CapitalizedWords.join(' ');  
            }  
        }

        function validate() {
            const fields = [hotelData.hotelID, hotelData.hotelName, hotelData.hotelDetails, hotelData.hotelPhoto, hotelData.roomID, hotelData.roomType, hotelData.facilities, hotelData.roomPhoto, hotelData.roomAvailability, hotelData.roomCost]
            var index = 0;
            if(hotelData.hotelID && hotelData.hotelName && hotelData.hotelDetails && hotelData.hotelPhoto && hotelData.roomID && hotelData.roomType && hotelData.roomPhoto && hotelData.facilities && hotelData.roomAvailability && hotelData.roomCost) {
                index = 0;
                fields.forEach(element => {
                    if (element !== '') {
                        const warningID = 'warning' + index;
                        const warning = document.getElementById(warningID);
                        warning.setAttribute('hidden','')
                    }
                    index = index + 1;
                });
                return true;
            } else {
                index = 0;
                fields.forEach(element => {
                    if (element === '') {
                        const warningID = 'warning' + index;
                        const warning = document.getElementById(warningID);
                        warning.style.setProperty('color', 'red');
                        warning.removeAttribute('hidden');
                    } else if (element !== '') {
                        const warningID = 'warning' + index;
                        const warning = document.getElementById(warningID);
                        warning.setAttribute('hidden','');
                    }
                    index = index + 1;
                });
                return false;
            }
        }

        const validated = validate();
        var updateSuccess = document.getElementById('updateSuccess');
        var createSuccess = document.getElementById('createSuccess');
        if(currentId && validated) {
            dispatch(updateHotel(currentId, hotelData));
            setCurrentId(null);
            updateSuccess.removeAttribute('hidden');
            setTimeout(() => updateSuccess.setAttribute('hidden',""), 3000);
            clear();
        } else if(validated) {
            formater();
            const hotelExistCheck = hotels.find((h) => h.hotelID === hotelData.hotelID)? true : false;
            if (hotelExistCheck) {
                alert('Hotel with the same Hotel ID already exists, if you want to update please go to /EditForm, if you want to delete please go to /DeleteForm');
            } else {
                dispatch(putHotel(hotelData));
                createSuccess.removeAttribute('hidden');
                setTimeout(() => createSuccess.setAttribute('hidden',""), 3000);
                clear();
            }
        }
    };

    const clear = () => {
        window.open("/FormTicket","_self");
    };

    return (
        hotel !== null && hotelData.hotelID ==='' ?  
            <div id="main-content" className="loaderPage">
                <div className="preloader-wrapper big active">
                    <div className="spinner-layer spinner-teal-only">
                        <div className="circle-clipper left">
                            <div className="circle"></div>
                        </div>
                        <div className="gap-patch">
                            <div className="circle"></div>
                        </div>
                        <div className="circle-clipper right">
                            <div className="circle"></div>
                        </div>
                    </div>
                </div> 
            </div>
        : (
            <div id="main-content">
                <div className="container">
                    <div id="updateSuccess" className="success" hidden>Hotel Updated Sucessfully!</div>
                    <div id="createSuccess" className="success" hidden>Hotel Created Sucessfully!</div>
                    <h1 className="center">Input Form</h1>
                    <form autoComplete="off" noValidate className="" onSubmit={handleSubmit}>
                        <div className="input-field">
                            <label htmlFor="hotelID">Hotel ID</label>
                            <input placeholder="Enter Hotel ID" className="validate" id="hotelID" type="text" value={hotelData.hotelID} onChange={(e) => setHotelData({ ...hotelData, hotelID: e.target.value })} /><br/>
                            <span id="warning0" hidden>This field is required!</span>
                        </div>
                        <div className="input-field">
                            <label htmlFor="hotelName">Hotel Name</label>
                            <input placeholder="Enter Hotel Name" className="validate" id="hotelName" type="text" value={hotelData.hotelName} onChange={(e) => setHotelData({ ...hotelData, hotelName: e.target.value })} /><br/>
                            <span id="warning1" hidden>This field is required!</span>
                        </div>
                        <div className="input-field">
                            <label htmlFor="hotelDetails">Hotel Details</label>
                            <input placeholder="Enter Hotel Details" className="validate" id="carModel" type="text" value={hotelData.hotelDetails} onChange={(e) => setHotelData({ ...hotelData, hotelDetails: e.target.value })} /><br/>
                            <span id="warning2" hidden>This field is required!</span>
                        </div>
                            <FileBase type="file" multiple={false} onDone={({base64}) => setHotelData({ ...hotelData, hotelPhoto: base64 })} />
                            <span id="warning3" hidden>This field is required!</span>

                        <div className="input-field">
                            <label htmlFor="roomID">Room ID</label>
                            <input placeholder="Enter Room ID" className="validate" id="roomID" type="text" value={hotelData.roomID} onChange={(e) => setHotelData({ ...hotelData, roomID: e.target.value })} /><br/>
                            <span id="warning4" hidden>This field is required!</span>
                        </div>
                        <div className="input-field">
                            <label htmlFor="roomType">Room Type</label>
                            <input placeholder="Enter Room Type" className="validate" id="roomType" type="text" value={hotelData.roomType} onChange={(e) => setHotelData({ ...hotelData, roomType: e.target.value })} /><br/>
                            <span id="warning5" hidden>This field is required!</span>
                        </div>
                        <div className="input-field">
                            <label htmlFor="facilities">Facilities</label>
                            <input placeholder="Enter facilities known separated by commas" className="validate" id="facilities" type="text" value={hotelData.facilities} onChange={(e) => setHotelData({ ...hotelData, facilities: e.target.value })} /><br/>
                            <span id="warning6" hidden>This field is required!</span>
                        </div>
                        <div className="input-field" >
                            <label htmlFor="roomAvailability">Availability</label>
                            <input placeholder="Enter available days separated by commas" id="roomAvailability" className="validate" type="text" value={hotelData.roomAvailability} onChange={(e) => setHotelData({ ...hotelData, roomAvailability: e.target.value })} /><br/>
                            <span id="warning7" hidden>This field is required!</span>
                        </div>
                        <div className="input-field">
                            <label htmlFor="roomCost">Cost</label>
                            <input placeholder="Enter Cost per day" className="validate" id="roomCost" type="number" value={hotelData.roomCost} onChange={(e) => setHotelData({ ...hotelData, roomCost : e.target.value })} /><br/>
                            <span id="warning8" hidden>This field is required!</span>
                        </div>
                            <FileBase type="file" multiple={false} onDone={({base64}) => setHotelData({ ...hotelData, roomPhoto: base64 })} />
                            <span id="warning9" hidden>This field is required!</span>
                        <div className="input-field">
                            <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                                <i className="material-icons right">send</i>
                            </button>&nbsp;
                            <button className="btn waves-effect waves-light" onClick={clear}>Clear
                                <i className="material-icons right">refresh</i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    );
}

export default FormHotel;