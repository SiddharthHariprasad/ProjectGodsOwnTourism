import React, { useState, useEffect } from 'react';
import { Button, Dropdown, Icon, Navbar, NavItem } from 'react-materialize';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import person from './images/person.png'

const Header = () => {

    // const user = { result: { name: "Siddharth", imageUrl: image } };
    
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    const logout = () => {
        dispatch({ type: 'LOGOUT' });
        history.push('/');
        setUser(null);
    };

    useEffect(() => {
        // const token = user?.token;

        //JWT

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    return(
        <header>
            <div className="black" style={{'padding': '0% 5%'}}>
                {/* Nav to hold the navbar */}
                <Navbar 
                    className="black" 
                    alignLinks="right" 
                    brand={<a href="/" className="brand-logo teal-text">God's Own Tourism</a>}
                    id="mobile-nav"
                    menuIcon={<Icon className="teal-text">menu</Icon>}
                    options={{ 
                        draggable: true, 
                        edge: 'left', 
                        inDuration: 250, 
                        onCloseEnd: null, 
                        onCloseStart: null, 
                        onOpenEnd: null, 
                        onOpenStart: null, 
                        outDuration: 200, 
                        preventScrolling: true 
                    }}
                >
                    <NavItem href="/Packages" className="waves-effect waves-light">Packages</NavItem>
                    <NavItem href="/Tickets" className="waves-effect waves-light">Tickets</NavItem>
                    <NavItem href="/Hotels" className="waves-effect waves-light">Hotels</NavItem>
                    <NavItem href="/Cabs" className="waves-effect waves-light">Cabs</NavItem>
                    <NavItem href="/Guides" className="waves-effect waves-light">Guides</NavItem>
                    <NavItem href="/AboutUs" className="waves-effect waves-light">About Us</NavItem>
                    { user ? (
                        <Dropdown 
                        id="dropDownSettings" 
                            className="white"
                            options={{
                                alignment: 'left',
                                autoTrigger: true,
                                closeOnClick: true,
                                constrainWidth: true,
                                container: null,
                                coverTrigger: false,
                                hover: true,
                                inDuration: 150,
                                outDuration: 250
                            }}
                            trigger={
                                <img 
                                    src={user.result.imageUrl || person} 
                                    alt={user.result.name.charAt(0)} 
                                    className="circle" 
                                    height="50px" 
                                    width="50px" 
                                    style={{ 
                                        borderStyle: 'solid', 
                                        borderColor: 'teal',
                                        verticalAlign: 'middle', 
                                        marginRight: '1em' 
                                    }}
                                />
                            }
                            >
                                
                                <span className="teal-text text-darken-4">{user.result.name}</span>
                                <Button node="button" waves="teal" onClick={logout}>Logout<Icon right>logout</Icon></Button>
                        </Dropdown>
                            ) : (
                                // <NavItem href="/auth" className="waves-effect waves-light">Sign In</NavItem>
                                <Button href="/Auth" node="a" waves="teal">Sign In</Button>
                                )
                            }
                </Navbar>
            </div>
        </header>
    );
}

export default Header;