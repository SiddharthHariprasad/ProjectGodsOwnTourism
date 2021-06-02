import React, { useState, useEffect } from 'react';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { getPacks, putPack, updatePack } from '../../actions/packs'

const FormPack = ({ currentId, setCurrentId }) => {

    const [packData, setPackData] = useState({
        packID: '', packName: '', ticketID: '', hotelID: '', roomID: '', cabID: '', guideID: '', packPhoto: '', packCost: '', packAvailability: ''
    });

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPacks());
    }, [dispatch]);

    const pack = useSelector((state) => currentId ? state.packs.find((p) => p.packID === currentId) : null);

    const packs = useSelector((state) => state.packs);

    useEffect(() => {
        if (pack) setPackData(pack);
    }, [pack])

    const handleSubmit = (e) => {
        e.preventDefault();
        
        function formater() {
            packData.packID = packData.packID.toUpperCase();
            packData.ticketID = packData.ticketID.toUpperCase();
            packData.hotelID = packData.hotelID.toUpperCase();
            packData.roomID = packData.roomID.toUpperCase();
            packData.cabID = packData.cabID.toUpperCase();
            packData.guideID = packData.guideID.toUpperCase();
            packData.packName = capitalize(packData.packName);
            packData.packAvailability = capitalize(packData.packAvailability);

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
            const fields = [packData.packID, packData.ticketID, packData.hotelID, packData.roomID, packData.cabID, packData.guideID, packData.packName, packData.packAvailability, packData.packCost]
            var index = 0;
            if (packData.packID && packData.ticketID && packData.hotelID && packData.roomID && packData.cabID && packData.guideID && packData.packName && packData.packAvailability && packData.packCost) {
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
            dispatch(updatePack(currentId, packData));
            setCurrentId(null);
            updateSuccess.removeAttribute('hidden');
            setTimeout(() => updateSuccess.setAttribute('hidden',""), 3000);
            clear();
        } else if(validated) {
            formater();
            const packExistCheck = packs.find((c) => c.packID === packData.packID)? true : false;
            if (packExistCheck) {
                alert('Pack with the same Pack ID already exists, if you want to update please go to /EditForm, if you want to delete please go to /DeleteForm');
            } else {
                dispatch(putPack(packData));
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
        pack !== null && packData.packID ==='' ?  
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
                    <div id="updateSuccess" className="success" hidden>Package Updated Sucessfully!</div>
                    <div id="createSuccess" className="success" hidden>Package Created Sucessfully!</div>
                    <h1 className="center">Input Form</h1>
                    <form autoComplete="off" noValidate className="" onSubmit={handleSubmit}>
                        <div className="input-field">
                            <label htmlFor="packID">Pack ID</label>
                            <input placeholder="Enter Pack ID" className="validate" id="packID" type="text" value={packData.packID} onChange={(e) => setPackData({ ...packData, packID: e.target.value })} /><br/>
                            <span id="warning0" hidden>This field is required!</span>
                        </div>
                        <div className="input-field">
                            <label htmlFor="packName">Pack Name</label>
                            <input placeholder="Enter Pack Name" className="validate" id="packName" type="text" value={packData.packName} onChange={(e) => setPackData({ ...packData, packName: e.target.value })} /><br/>
                            <span id="warning1" hidden>This field is required!</span>
                        </div>
                        <div className="input-field">
                            <label htmlFor="ticketID">Ticket ID</label>
                            <input placeholder="Enter Ticket ID" className="validate" id="ticketID" type="text" value={packData.ticketID} onChange={(e) => setPackData({ ...packData, ticketID: e.target.value })} /><br/>
                            <span id="warning2" hidden>This field is required!</span>
                        </div>
                        <div className="input-field">
                            <label htmlFor="hotelID">Hotel ID</label>
                            <input placeholder="Enter Hotel ID" className="validate" id="hotelID" type="text" value={packData.hotelID} onChange={(e) => setPackData({ ...packData, hotelID: e.target.value })} /><br/>
                            <span id="warning3" hidden>This field is required!</span>
                        </div>
                        <div className="input-field">
                            <label htmlFor="roomID">Room ID</label>
                            <input placeholder="Enter Room ID" className="validate" id="roomID" type="text" value={packData.roomID} onChange={(e) => setPackData({ ...packData, roomID: e.target.value })} /><br/>
                            <span id="warning4" hidden>This field is required!</span>
                        </div>
                        <div className="input-field">
                            <label htmlFor="cabID">Cab ID</label>
                            <input placeholder="Enter Cab ID" className="validate" id="cabID" type="text" value={packData.cabID} onChange={(e) => setPackData({ ...packData, cabID: e.target.value })} /><br/>
                            <span id="warning5" hidden>This field is required!</span>
                        </div>
                        <div className="input-field">
                            <label htmlFor="guideID">Guide ID</label>
                            <input placeholder="Enter Guide ID" className="validate" id="guideID" type="text" value={packData.guideID} onChange={(e) => setPackData({ ...packData, guideID: e.target.value })} /><br/>
                            <span id="warning6" hidden>This field is required!</span>
                        </div>
                        <div className="input-field" >
                            <label htmlFor="packAvailability">Availability</label>
                            <input placeholder="Enter available days separated by commas" id="packAvailability" className="validate" type="text" value={packData.packAvailability} onChange={(e) => setPackData({ ...packData, packAvailability: e.target.value })} /><br/>
                            <span id="warning7" hidden>This field is required!</span>
                        </div>
                        <div className="input-field">
                            <label htmlFor="packCost">Cost</label>
                            <input placeholder="Enter Cost per day" className="validate" id="packCost" type="number" value={packData.packCost} onChange={(e) => setPackData({ ...packData, packCost : e.target.value })} /><br/>
                            <span id="warning8" hidden>This field is required!</span>
                        </div>
                            <FileBase type="file" multiple={false} onDone={({base64}) => setPackData({ ...packData, packPhoto: base64 })} />
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

export default FormPack;