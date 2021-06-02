import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCabs } from '../../actions/cabs';

import { useSelector } from 'react-redux';

import Cab from './Cab/Cab';

function Cabs() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCabs());
    }, [dispatch]);

    const cabs = useSelector((state) => state.cabs);

    return(
        !cabs.length ?  
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
                    <h1 className="center">Cabs</h1>
                    <div className="row">
                        {cabs.map((cab) => (
                            <div key={cab._id} className="col s12 m6">
                                <Cab cab={cab} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    );
}

export default Cabs;