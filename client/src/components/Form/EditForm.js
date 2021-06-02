import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const EditForm = ( {currentId, setCurrentId, currentRoomId, setCurrentRoomId} ) => {

    const [editData, setEditData] = useState({
        editID: '', editCategory: '', roomEditID: ''
    });

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (editData.editID) {
            switch(editData.editCategory) {
                case "package":
                    history.push('/FormPack');
                    break;
                case "ticket":
                    history.push('/FormTicket');
                    break;
                case "hotel":
                    document.getElementById('roomIDForm').removeAttribute('hidden');
                    // history.push('/FormHotel');
                    break;
                case "cab":
                    history.push('/FormCab');
                    break;
                case "guide":
                    history.push('/FormGuide');
                    break;
                default: break;
            }
        } else {
            const warning = document.getElementById('warning');
            warning.style.setProperty('color', 'red');
            warning.removeAttribute('hidden');
        }
    };

    const roomIDFromSubmit = (e) => {
        e.preventDefault();
        if (editData.roomEditID) {
            const warningID = 'warning1';
            const warning = document.getElementById(warningID);
            warning.setAttribute('hidden','');
            history.push('/FormHotel');   
        } else {
            const warningID = 'warning1';
            const warning = document.getElementById(warningID);
            warning.style.setProperty('color', 'red');
            warning.removeAttribute('hidden');
        }
    }

    return (
        <div id="main-content">
            <div className="container editFormPage">
                <h1 className="center">Edit Form</h1>
                <form autoComplete="off" noValidate className="" onSubmit={handleSubmit}>
                    <div className="input-field">
                        <label htmlFor="editID">Enter ID</label>
                        <input placeholder="Enter ID of Object to Edit" className="validate" id="editID" type="text" value={editData.editID} onChange={(e) => setEditData({ ...editData, editID: e.target.value.toUpperCase() })} /><br/>
                        <span id="warning" hidden>This field is requires!</span>
                    </div>
                    <div className="input-field">
                        <label htmlFor="btn">Choose the category:</label><br />
                        <button className="btn waves-effect waves-light" onClick={(e) => {setEditData({ ...editData, editCategory: "package"}); setCurrentId(editData.editID);}} name="category">Packages
                            <i className="material-icons right"></i>
                        </button>&nbsp;
                        <button className="btn waves-effect waves-light" onClick={(e) => {setEditData({ ...editData, editCategory: "ticket"}); setCurrentId(editData.editID);}} name="category">Tickets
                            <i className="material-icons right"></i>
                        </button>&nbsp;
                        <button className="btn waves-effect waves-light" onClick={(e) => {setEditData({ ...editData, editCategory: "hotel"}); setCurrentId(editData.editID);}} name="category">Hotels
                            <i className="material-icons right"></i>
                        </button>&nbsp;
                        <button className="btn waves-effect waves-light" onClick={(e) => {setEditData({ ...editData, editCategory: "cab"}); setCurrentId(editData.editID);}} name="category">Cabs
                            <i className="material-icons right"></i>
                        </button>&nbsp;
                        <button className="btn waves-effect waves-light" onClick={(e) => {setEditData({ ...editData, editCategory: "guide"}); setCurrentId(editData.editID);}} name="category">Guides
                            <i className="material-icons right"></i>
                        </button>&nbsp;
                    </div>
                </form>
                <form hidden id="roomIDForm" autoComplete="off" noValidate className="" onSubmit={roomIDFromSubmit}>
                <div className="input-field">
                        <label htmlFor="roomEditID">Enter Room ID</label>
                        <input placeholder="Enter ID of Room to Edit" className="validate" id="roomEditID" type="text" value={editData.roomEditID} onChange={(e) => setEditData({ ...editData, roomEditID: e.target.value.toUpperCase() })} /><br/>
                        <span id="warning1" hidden>This field is required!</span>
                    </div>
                    <div className="input-field">
                        <button className="btn waves-effect waves-light" onClick={(e) => setCurrentRoomId(editData.roomEditID)} name="submit" type="submit">Submit
                            <i className="material-icons right">send</i>
                        </button>&nbsp;
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditForm;