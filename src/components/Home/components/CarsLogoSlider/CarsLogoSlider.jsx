import React from 'react'

import Slider from 'react-slick';
import images from '../../../../helpers/images';

export default function CarsLogoSlider() {
    const settings = {
        autoplay: true,
        cssEase: 'ease-out',
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        useCSS: true,
        initialSlide: 0,
        rtl:false
        // useTransform:true
    };
    return (
        <div className='row'>
            <div className='col-md-8 mx-auto my-5'>

                <Slider {...settings}>
                    <div className='col text-center'>
                        <img src={images?.cars?.ac} />
                    </div>
                    <div className='col text-center'>
                        <img src={images?.cars?.audi} />

                    </div>
                    <div className='col text-center'>
                        <img src={images?.cars?.jaguar} />

                    </div>
                    <div className='col text-center'>
                        <img src={images?.cars?.nissan} />

                    </div>
                    <div className='col text-center'>
                        <img src={images?.cars?.volvo} />

                    </div>
                </Slider>
            </div>
        </div>
    )
}
