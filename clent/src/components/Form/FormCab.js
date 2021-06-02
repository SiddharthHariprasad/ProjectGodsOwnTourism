import React, { useState, useEffect } from 'react';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { getCabs, putCab, updateCab } from '../../actions/cabs';

const FormCab = ({ currentId, setCurrentId }) => {

    const [cabData, setCabData] = useState({
        cabID: '', driverName: '', carModel: '', driverLanguages: '', driverExperience: '',driverAge: '', driverPhoto: '', driverAvailability: '', driverCost: '',
    });

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCabs());
    }, [dispatch]);

    const cab = useSelector((state) => currentId ? state.cabs.find((c) => c.cabID === currentId) : null);

    const cabs = useSelector((state) => state.cabs);


    useEffect(() => {
        if (cab) setCabData(cab);
    }, [cab])

    const handleSubmit = (e) => {
        e.preventDefault();

        function formater() {
            cabData.cabID = cabData.cabID.toUpperCase();
            cabData.driverName = capitalize(cabData.driverName);
            cabData.carModel = capitalize(cabData.carModel);
            cabData.driverLanguages = capitalize(cabData.driverLanguages);
            cabData.driverAvailability = capitalize(cabData.driverAvailability);

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
            const fields = [cabData.cabID, cabData.driverName, cabData.carModel, cabData.driverLanguages, cabData.driverExperience, cabData.driverAge, cabData.driverPhoto, cabData.driverAvailability, cabData.driverCost]
            var index = 0;
            if(cabData.cabID && cabData.driverName && cabData.carModel && cabData.driverLanguages && cabData.driverExperience && cabData.driverAge && cabData.driverPhoto && cabData.driverAvailability && cabData.driverCost) {
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
            dispatch(updateCab(currentId, cabData));
            setCurrentId(null);
            updateSuccess.removeAttribute('hidden');
            setTimeout(() => updateSuccess.setAttribute('hidden',""), 3000);
            clear();
        } else if(validated) {
            formater();
            const cabExistCheck = cabs.find((c) => c.cabID === cabData.cabID)? true : false;
            if (cabExistCheck) {
                alert('Cab with the same Cab ID already exists, if you want to update please go to /EditForm, if you want to delete please go to /DeleteForm');
            } else {
                dispatch(putCab(cabData));
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
        cab !== null && cabData.cabID ==='' ?  
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
                    <div id="updateSuccess" className="success" hidden>Cab Updated Sucessfully!</div>
                    <div id="createSuccess" className="success" hidden>Cab Created Sucessfully!</div>
                    <h1 className="center">Input Form</h1>
                    <form autoComplete="off" noValidate className="" onSubmit={handleSubmit} onReset={clear}>
                        <div className="input-field">
                            <label htmlFor="cabID">Cab ID</label>
                            <input placeholder="Enter Cab ID" className="validate" id="cabID" type="text" value={cabData.cabID} onChange={(e) => setCabData({ ...cabData, cabID: e.target.value })} /><br/>
                            <span id="warning0" hidden>This field is required!</span>
                        </div>
                        <div className="input-field">
                            <label htmlFor="driverName">Driver Name</label>
                            <input placeholder="Enter Driver Name" className="validate" id="driverName" type="text" value={cabData.driverName} onChange={(e) => setCabData({ ...cabData, driverName: e.target.value })} /><br/>
                            <span id="warning1" hidden>This field is required!</span>
                        </div>
                        <div className="input-field">
                            <label htmlFor="carModel">Car Model</label>
                            <input placeholder="Enter Car Model" className="validate" id="carModel" type="text" value={cabData.carModel} onChange={(e) => setCabData({ ...cabData, carModel: e.target.value })} /><br/>
                            <span id="warning2" hidden>This field is required!</span>
                        </div>
                        <div className="input-field">
                            <label htmlFor="driverLanguages">Languages Known</label>
                            <input placeholder="Enter languages known separated by commas" className="validate" id="driverLanguages" type="text" value={cabData.driverLanguages} onChange={(e) => setCabData({ ...cabData, driverLanguages: e.target.value })} /><br/>
                            <span id="warning3" hidden>This field is required!</span>
                        </div>
                        <div className="input-field">
                            <label htmlFor="driverExperience">Experience</label>
                            <input placeholder="Enter Experience" className="validate" id="driverExperience" type="number" value={cabData.driverExperience} onChange={(e) => setCabData({ ...cabData, driverExperience: e.target.value })} /><br/>
                            <span id="warning4" hidden>This field is required!</span>
                        </div>
                        <div className="input-field">
                            <label htmlFor="driverAge">Age</label>
                            <input placeholder="Enter Age" className="validate" id="driverAge" type="number" value={cabData.driverAge} onChange={(e) => setCabData({ ...cabData, driverAge: e.target.value })} /><br/>
                            <span id="warning5" hidden>This field is required!</span>
                        </div>
                        <div className="input-field" >
                            <label htmlFor="driverAvailability">Availability</label>
                            <input placeholder="Enter available days separated by commas" id="driverAvailability" className="validate" type="text" value={cabData.driverAvailability} onChange={(e) => setCabData({ ...cabData, driverAvailability: e.target.value })} /><br/>
                            <span id="warning6" hidden>This field is required!</span>
                        </div>
                        <div className="input-field">
                            <label htmlFor="driverCost">Cost</label>
                            <input placeholder="Enter Cost per day" className="validate" id="driverCost" type="number" value={cabData.driverCost} onChange={(e) => setCabData({ ...cabData, driverCost : e.target.value })} /><br/>
                            <span id="warning7" hidden>This field is required!</span>
                        </div>
                            <FileBase type="file" multiple={false} onDone={({base64}) => setCabData({ ...cabData, driverPhoto: base64 })} />
                            <span id="warning8" hidden>This field is required!</span>
                        <div className="input-field">
                            <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                                <i className="material-icons right">send</i>
                            </button>&nbsp;
                            <button className="btn waves-effect waves-light" type="reset">Clear
                                <i className="material-icons right">refresh</i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    );
}

export default FormCab;