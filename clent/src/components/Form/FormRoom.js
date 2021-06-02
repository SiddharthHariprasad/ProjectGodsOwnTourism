import React, { useState } from 'react';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { putRoom } from '../../actions/rooms'

const Form = () => {

    const [roomData, setRoomData] = useState({
        roomID: '', hotelID: '', roomType: '', facilities: '', photo: '', availability: '', cost: '',
    });

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(putRoom(roomData));
    };

    const clear = () => {

    };

    return (
        <div id="main-content">
            <div className="container">
                <h1 className="center">Input Form</h1>
                <form autoComplete="off" noValidate className="" onSubmit={handleSubmit}>
                    <div className="input-field">
                        <label htmlFor="roomID">Room ID</label>
                        <input placeholder="Enter Room ID" className="validate" id="roomID" type="text" value={roomData.roomID} onChange={(e) => setRoomData({ ...roomData, roomID: e.target.value })} /><br/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="hotelID">Hotel ID</label>
                        <input placeholder="Enter Room Name" className="validate" id="hotelID" type="text" value={roomData.hotelID} onChange={(e) => setRoomData({ ...roomData, hotelID: e.target.value })} /><br/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="roomType">Room Type</label>
                        <input placeholder="Enter Room Type" className="validate" id="roomType" type="text" value={roomData.roomType} onChange={(e) => setRoomData({ ...roomData, roomType: e.target.value })} /><br/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="facilities">Facilities</label>
                        <input placeholder="Enter facilities known separated by commas" className="validate" id="facilities" type="text" value={roomData.facilities} onChange={(e) => setRoomData({ ...roomData, facilities: e.target.value })} /><br/>
                    </div>
                    <div className="input-field" >
                        <label htmlFor="availability">Availability</label>
                        <input placeholder="Enter available days separated by commas" id="availability" className="validate" type="text" value={roomData.availability} onChange={(e) => setRoomData({ ...roomData, availability: e.target.value })} /><br/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="cost">Cost</label>
                        <input placeholder="Enter Cost per day" className="validate" id="cost" type="number" value={roomData.cost} onChange={(e) => setRoomData({ ...roomData, cost : e.target.value })} /><br/>
                    </div>
                        <FileBase type="file" multiple={false} onDone={({base64}) => setRoomData({ ...roomData, photo: base64 })} />
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
    );
}

export default Form;