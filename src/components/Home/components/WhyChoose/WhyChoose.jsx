import React from 'react'
import images from '../../../../helpers/images'
import AdvantageInWhyChooseUs from './AdvantageInWhyChooseUs'
import { useLocation } from 'react-router-dom';

export default function WhyChoose() {
    const location = useLocation();
    const { pathname } = location;
    return (
        <div className='row gx-0 carDetails'
            style={{ backgroundImage: `url(${images?.carDetails?.bg})`, backgroundSize: "1000px", backgroundRepeat: "no-repeat", backgroundOrigin: "border-box", backgroundPosition: "left left" }}>
            <div className='col-md-6'>
                <div className='d-flex align-items-center '>
                    <img src={images?.carDetails?.whyChoose} style={{ marginTop: "10rem", width: "80%" }} />
                </div>
            </div>
            <div className='col-md-6'>
                <div className='d-flex flex-column'>
                    <div className='d-flex justify-content-md-start justify-content-center align-items-center'>
                        <div className={` rounded-2 text-uppercase blueDiv`}>why choose us</div>

                    </div>
                    <div className='w-100'>
                        <h2 className='sectionTitle fs-small'>We offer the best experience with our rental deals</h2>
                    </div>
                </div>

                {pathname == "/" ? <AdvantageInWhyChooseUs /> :
                    <div className='carDetails'>

                        <p className='mb-3 card-text text-nowrap d-flex align-items-start'>
                            <img className='me-md-3' src={images?.cards?.user} />
                            <small className='text-muted text-center'>2 passengers</small>
                        </p>

                        <p className='mb-3 card-text text-nowrap d-flex align-items-end '>
                            <img className='me-md-3' src={images?.cards?.air} />
                            <small className='text-muted text-center'> CVT</small>
                        </p>
                        <p>
                            <img className='me-md-3' src={images?.cards?.frame} />
                            <small className='text-muted text-center'>Automatic</small>
                        </p>
                        <p>
                            <img className='me-md-3' src={images?.cards?.doors} />
                            <small className='text-muted text-center'>Doors</small>
                        </p>
                    </div>
                }
            </div>
        </div>
    )
}
