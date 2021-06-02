import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getGuides } from '../../actions/guides';

import { useSelector } from 'react-redux';

import Guide from './Guide/Guide';

function Guides() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGuides());
    }, [dispatch]);

    const guides = useSelector((state) => state.guides);

    return(
        !guides.length ?  
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
                    <h1 className="center">Guides</h1>
                    <div className="row">
                        {guides.map((guide) => (
                            <div key={guide._id} className="col s12 m6">
                                <Guide guide={guide} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    );
}

export default Guides;