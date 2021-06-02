import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteCab } from '../../actions/cabs';
import { deleteGuide } from '../../actions/guides';
import { deleteHotel } from '../../actions/hotels';
import { deletePack } from '../../actions/packs';
import { deleteTicket } from '../../actions/tickets';

const DeleteForm = ( {currentId, setCurrentId, currentRoomId, setCurrentRoomId} ) => {

    const dispatch = useDispatch();

    const [deleteData, setDeleteData] = useState({
        deleteID: '', deleteCategory: '', roomDeleteID: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (deleteData.deleteID) {
            var confirmed = window.confirm(`Are you sure you want to delete ${deleteData.deleteCategory} with ID ${deleteData.deleteID}? If deleted it can't be reverse.`);
            if (confirmed) {
                switch(deleteData.deleteCategory) {
                    case "package":
                        dispatch(deletePack(deleteData.deleteID));
                        break;
                    case "ticket":
                        dispatch(deleteTicket(deleteData.deleteID));
                        break;
                    case "hotel":
                        document.getElementById('roomIDForm').removeAttribute('hidden');
                        break;
                    case "cab":
                        dispatch(deleteCab(deleteData.deleteID));
                        break;
                    case "guide":
                        dispatch(deleteGuide(deleteData.deleteID));
                        break;
                    default: break;
                }
            }
        } else {
            const warning = document.getElementById('warning');
            warning.style.setProperty('color', 'red');
            warning.removeAttribute('hidden');
        }
    };

    const roomIDFormSubmit = (e) => {
        e.preventDefault();
        if (deleteData.roomDeleteID) {
            const warningID = 'warning1';
            const warning = document.getElementById(warningID);
            warning.setAttribute('hidden','');
            dispatch(deleteHotel(deleteData.deleteID, deleteData.roomDeleteID));   
        } else {
            const warningID = 'warning1';
            const warning = document.getElementById(warningID);
            warning.style.setProperty('color', 'red');
            warning.removeAttribute('hidden');
        }
    }

    return (
        <div id="main-content">
            <div className="container deleteFormPage">
                <h1 className="center">Delete Form</h1>
                <form autoComplete="off" noValidate className="" onSubmit={handleSubmit}>
                    <div className="input-field">
                        <label htmlFor="deleteID">Enter ID</label>
                        <input placeholder="Enter ID of Object to Delete" className="validate" id="deleteID" type="text" value={deleteData.deleteID} onChange={(e) => setDeleteData({ ...deleteData, deleteID: e.target.value.toUpperCase() })} /><br/>
                        <span id="warning" hidden>This field is requires!</span>
                    </div>
                    <div className="input-field">
                        <label htmlFor="btn">Choose the category:</label><br />
                        <button className="btn waves-effect waves-light" onClick={(e) => {setDeleteData({ ...deleteData, deleteCategory: "package"}); setCurrentId(deleteData.deleteID);}} name="category">Packages
                            <i className="material-icons right"></i>
                        </button>&nbsp;
                        <button className="btn waves-effect waves-light" onClick={(e) => {setDeleteData({ ...deleteData, deleteCategory: "ticket"}); setCurrentId(deleteData.deleteID);}} name="category">Tickets
                            <i className="material-icons right"></i>
                        </button>&nbsp;
                        <button className="btn waves-effect waves-light" onClick={(e) => {setDeleteData({ ...deleteData, deleteCategory: "hotel"}); setCurrentId(deleteData.deleteID);}} name="category">Hotels
                            <i className="material-icons right"></i>
                        </button>&nbsp;
                        <button className="btn waves-effect waves-light" onClick={(e) => {setDeleteData({ ...deleteData, deleteCategory: "cab"}); setCurrentId(deleteData.deleteID);}} name="category">Cabs
                            <i className="material-icons right"></i>
                        </button>&nbsp;
                        <button className="btn waves-effect waves-light" onClick={(e) => {setDeleteData({ ...deleteData, deleteCategory: "guide"}); setCurrentId(deleteData.deleteID);}} name="category">Guides
                            <i className="material-icons right"></i>
                        </button>&nbsp;
                    </div>
                </form>
                <form hidden id="roomIDForm" autoComplete="off" noValidate className="" onSubmit={roomIDFormSubmit}>
                <div className="input-field">
                        <label htmlFor="roomDeleteID">Enter Room ID</label>
                        <input placeholder="Enter ID of Room to Delete" className="validate" id="roomDeleteID" type="text" value={deleteData.roomDeleteID} onChange={(e) => setDeleteData({ ...deleteData, roomDeleteID: e.target.value.toUpperCase() })} /><br/>
                        <span id="warning1" hidden>This field is required!</span>
                    </div>
                    <div className="input-field">
                        <button className="btn waves-effect waves-light" onClick={(e) => setCurrentRoomId(deleteData.roomDeleteID)} name="submit" type="submit">Submit
                            <i className="material-icons right">send</i>
                        </button>&nbsp;
                    </div>
                </form>
            </div>
        </div>
    );
}

export default DeleteForm;