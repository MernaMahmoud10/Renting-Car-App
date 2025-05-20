import React from 'react'
import Navbar from '../Navbar/Navbar'
import style from "./Header.module.css"
import images from '../../../../helpers/images'

export default function Header() {
    return (
        <div className={style?.header}>
            <Navbar />
            <div className='row gx-0 mt-md-5 mt-1 mb-5' >
                <div className='mt-md-4 mt-md-1 pt-md-5 col-md-4 order-md-1 order-2'>
                    <div className={`text-center ${style?.animatedText}`}>
                        <h1 className={`fw-md-bolder fw-bolder ${style?.animationHeading}`}>
                            Find, book and rent a car
                            <span > Easily </span>
                        </h1>
                        <p className={`text-muted text-center fw-md-bold fs-md-4 fs-6 pe-md-5 ${style?.animation_p}`}> Get a car wherever and whenever you need it with your IOS and Android device.

                        </p>
                    </div>
                </div>
                <div className='col-md-8 text-end order-md-2 order-1'>
                    <img className={style?.carHeader} src={images?.header?.carHeader} />
                </div>
            </div>
        </div>
    )
}
