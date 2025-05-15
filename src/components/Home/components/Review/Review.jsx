import React from 'react'
import images from '../../../../helpers/images'
import Slider from 'react-slick'
import style from "./Review.module.css"

export default function Review() {
    const settings = {
        autoplay: true,
        cssEase: 'ease-out',
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,

    };
    return (

        <div className={`row gx-0 mt-5 py-5 `}
            style={{ backgroundImage: `url(${images?.sec6?.bgSec6})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundOrigin: "border-box", backgroundPosition: "left left" }}>
            <div className='d-flex align-item-center flex-column'>
                <div className='d-flex justify-content-center align-items-center'>
                    <div className={` rounded-2 text-uppercase blueDiv`}>testimonials</div>

                </div>
                <div className='d-flex justify-content-center align-items-center'>
                    <h2 className='sectionTitle'>what people say about us?</h2>
                </div>
            </div>
                <div className='row'>
                    <div className={`col-md-12 ${style.sliderContainer}`}>
                        <Slider {...settings}>
                            <div className={`card ${style.myCard} w-90 border-25`}>
                                <div className='row '>
                                    <div className='col-md-6'>
                                        <img className='w-100 rounded-2' src={images?.sec6?.boy} />
                                    </div>
                                    <div className='col-md-6'>
                                        <div class="card-body">
                                            <h1 class="card-title mb-0">5.5
                                                <small class="h5">stars</small>
                                            </h1>
                                            <div class="d-flex">
                                                <img src={images?.cards?.star} />
                                                <img src={images?.cards?.star} />
                                                <img src={images?.cards?.star} />
                                                <img src={images?.cards?.star} />
                                                <img src={images?.cards?.star} />

                                            </div>
                                            <p class="card-text fs-5 my-1"> “I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.” </p>
                                            <div class="card-text">
                                                <p class="bold mb-0">Charlie Johnson</p>
                                                <small class="text-muted">Last updated 3 mins ago</small>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                            <div className={`card ${style.myCard} w-90 border-25`}>
                                <div className='row '>
                                    <div className='col-md-6'>
                                        <img className='w-100 rounded-2 imgCard' src={images?.sec6?.girl} />
                                    </div>
                                    <div className='col-md-6'>
                                        <div class="card-body">
                                            <h1 class="card-title mb-0">5.5
                                                <small class="h5">stars</small>
                                            </h1>
                                            <div class="d-flex">
                                                <img src={images?.cards?.star} />
                                                <img src={images?.cards?.star} />
                                                <img src={images?.cards?.star} />
                                                <img src={images?.cards?.star} />
                                                <img src={images?.cards?.star} />

                                            </div>
                                            <p class="card-text fs-5 my-1"> “I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.” </p>
                                            <div class="card-text">
                                                <p class="bold mb-0">Charlie Johnson</p>
                                                <small class="text-muted">Last updated 3 mins ago</small>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                            <div className={`card ${style.myCard} w-90 border-25`}>
                                <div className='row '>
                                    <div className='col-md-6'>
                                        <img className='w-100 rounded-2' src={images?.sec6?.boy} />
                                    </div>
                                    <div className='col-md-6'>
                                        <div class="card-body">
                                            <h1 class="card-title mb-0">5.5
                                                <small class="h5">stars</small>
                                            </h1>
                                            <div class="d-flex">
                                                <img src={images?.cards?.star} />
                                                <img src={images?.cards?.star} />
                                                <img src={images?.cards?.star} />
                                                <img src={images?.cards?.star} />
                                                <img src={images?.cards?.star} />

                                            </div>
                                            <p class="card-text fs-5 my-1"> “I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.” </p>
                                            <div class="card-text">
                                                <p class="bold mb-0">Charlie Johnson</p>
                                                <small class="text-muted">Last updated 3 mins ago</small>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>

                        </Slider>
                    </div>
                

            </div>
        </div >
    )
}
