import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { putUser } from '../../actions/users'

const SignUp = () => {

    const [userData, setUserData] = useState({
        email: '', password: '', name: ''
    });

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(putUser(userData));
    };

    const clear = () => {

    };

    return (
        <div id="main-content">
            <div className="container">
                <h1 className="center">SignUp</h1>
                <form autoComplete="off" noValidate className="" onSubmit={handleSubmit}>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input placeholder="Enter Email" className="validate" id="email" type="text" value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} /><br/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="name">Name</label>
                        <input placeholder="Enter Name" className="validate" id="name" type="text" value={userData.name} onChange={(e) => setUserData({ ...userData, name: e.target.value })} /><br/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input placeholder="Enter Password" className="validate" id="password" type="text" value={userData.password} onChange={(e) => setUserData({ ...userData, password: e.target.value })} /><br/>
                    </div>
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

export default SignUp;