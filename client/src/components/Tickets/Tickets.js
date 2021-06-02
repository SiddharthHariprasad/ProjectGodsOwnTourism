import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getTickets } from '../../actions/tickets';

import { useSelector } from 'react-redux';

import Ticket from './Ticket/Ticket'

function Tickets() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTickets());
    }, [dispatch]);

    const tickets = useSelector((state) => state.tickets);

    return(
        !tickets.length ?
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
        :(
            <div id="main-content">
                <div className="container">
                    <h1 className="center">Tickets</h1>
                    <div className="row">
                        {tickets.map((ticket) => (
                            <div key={ticket._id} className="col s12 m6">
                                <Ticket ticket={ticket} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    );
}

export default Tickets;