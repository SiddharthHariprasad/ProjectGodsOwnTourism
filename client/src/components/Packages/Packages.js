import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPacks } from '../../actions/packs';

import { useSelector } from 'react-redux';

import Pack from './Package/Pack';

function Packages() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPacks());
    }, [dispatch]);

    const packs = useSelector((state) => state.packs);
    
    return(
        !packs.length ?  
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
                    <h1 className="center">Packages</h1>
                    <div className="row">
                        {packs.map((pack) => (
                            <div key={pack._id} className="col s12 m6">
                                <Pack pack={pack} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    );
}

export default Packages;