import React, { useState, useEffect } from 'react';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { getGuides, putGuide, updateGuide } from '../../actions/guides'

const FormGuide = ({ currentId, setCurrentId }) => {

    const [guideData, setGuideData] = useState({
        guideID: '', guideName: '', guideLanguages: '', guideExperience: '',guideAge: '', guidePhoto: '', guideAvailability: '', guideCost: '',
    });

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGuides());
    }, [dispatch]);

    const guide = useSelector((state) => currentId ? state.guides.find((g) => g.guideID === currentId) : null);

    const guides = useSelector((state) => state.guides);

    useEffect(() => {
        if (guide) setGuideData(guide);
    }, [guide])

    const handleSubmit = (e) => {
        e.preventDefault();

        function formater() {
            guideData.guideID = guideData.guideID.toUpperCase();
            guideData.guideName = capitalize(guideData.guideName);
            guideData.guideLanguages = capitalize(guideData.guideLanguages);
            guideData.guideAvailability = capitalize(guideData.guideAvailability);

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
            const fields = [guideData.guideID, guideData.guideName, guideData.guideLanguages, guideData.guideExperience, guideData.guideAge, guideData.guidePhoto, guideData.guideAvailability, guideData.guideCost]
            var index = 0;
            if(guideData.guideID && guideData.guideName && guideData.guideLanguages && guideData.guideExperience && guideData.guideAge && guideData.guidePhoto && guideData.guideAvailability && guideData.guideCost) {
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
            dispatch(updateGuide(currentId, guideData));
            setCurrentId(null);
            updateSuccess.removeAttribute('hidden');
            setTimeout(() => updateSuccess.setAttribute('hidden',""), 3000);
            clear();
        } else if(validated) {
            formater();
            const guideExistCheck = guides.find((c) => c.guideID === guideData.guideID)? true : false;
            if (guideExistCheck) {
                alert('Guide with the same Guide ID already exists, if you want to update please go to /EditForm, if you want to delete please go to /DeleteForm');
            } else {
                dispatch(putGuide(guideData));
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
        guide !== null && guideData.guideID ==='' ?  
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
                    <div id="updateSuccess" className="success" hidden>Guide Updated Sucessfully!</div>
                    <div id="createSuccess" className="success" hidden>Guide Created Sucessfully!</div>
                    <h1 className="center">Input Form</h1>
                    <form autoComplete="off" noValidate className="" onSubmit={handleSubmit}>
                        <div className="input-field">
                            <label htmlFor="guideID">Guide ID</label>
                            <input placeholder="Enter Guide ID" className="validate" id="guideID" type="text" value={guideData.guideID} onChange={(e) => setGuideData({ ...guideData, guideID: e.target.value })} /><br/>
                            <span id="warning0" hidden>This field is required!</span>
                        </div>
                        <div className="input-field">
                            <label htmlFor="guideName">Guide Name</label>
                            <input placeholder="Enter Guide Name" className="validate" id="guideName" type="text" value={guideData.guideName} onChange={(e) => setGuideData({ ...guideData, guideName: e.target.value })} /><br/>
                            <span id="warning1" hidden>This field is required!</span>
                        </div>
                        <div className="input-field">
                            <label htmlFor="guideLanguages">Languages Known</label>
                            <input placeholder="Enter languages known separated by commas" className="validate" id="guideLanguages" type="text" value={guideData.guideLanguages} onChange={(e) => setGuideData({ ...guideData, guideLanguages: e.target.value })} /><br/>
                            <span id="warning2" hidden>This field is required!</span>
                        </div>
                        <div className="input-field">
                            <label htmlFor="guideExperience">Experience</label>
                            <input placeholder="Enter Experience" className="validate" id="guideExperience" type="number" value={guideData.guideExperience} onChange={(e) => setGuideData({ ...guideData, guideExperience: e.target.value })} /><br/>
                            <span id="warning3" hidden>This field is required!</span>
                        </div>
                        <div className="input-field">
                            <label htmlFor="guideAge">Age</label>
                            <input placeholder="Enter Age" className="validate" id="guideAge" type="number" value={guideData.guideAge} onChange={(e) => setGuideData({ ...guideData, guideAge: e.target.value })} /><br/>
                            <span id="warning4" hidden>This field is required!</span>
                        </div>
                        <div className="input-field" >
                            <label htmlFor="guideAvailability">Availability</label>
                            <input placeholder="Enter available days separated by commas" id="guideAvailability" className="validate" type="text" value={guideData.guideAvailability} onChange={(e) => setGuideData({ ...guideData, guideAvailability: e.target.value })} /><br/>
                            <span id="warning5" hidden>This field is required!</span>
                        </div>
                        <div className="input-field">
                            <label htmlFor="guideCost">Cost</label>
                            <input placeholder="Enter Cost per day" className="validate" id="guideCost" type="number" value={guideData.guideCost} onChange={(e) => setGuideData({ ...guideData, guideCost : e.target.value })} /><br/>
                            <span id="warning6" hidden>This field is required!</span>
                        </div>
                            <FileBase type="file" multiple={false} onDone={({base64}) => setGuideData({ ...guideData, guidePhoto: base64 })} />
                            <span id="warning7" hidden>This field is required!</span>
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

export default FormGuide;