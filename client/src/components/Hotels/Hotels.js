import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getHotels } from '../../actions/hotels';

import { useSelector } from 'react-redux';

import Hotel from './Hotel/Hotel';

function Hotels() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getHotels());
    }, [dispatch]);

    const hotels = useSelector((state) => state.hotels);

    return(
        !hotels.length ?
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
                <h1 className="center">Hotels</h1>
                <div className="row">
                    {hotels.map((hotel) => (
                        <div key={hotel._id} className="col s12 m6">
                            <Hotel hotel={hotel} />
                        </div>
                    ))}
                </div>
                </div>
        </div>
    )
    );
}

export default Hotels;