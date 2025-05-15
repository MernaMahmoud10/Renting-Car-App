import React from 'react'
import images from '../../../../helpers/images'
import style from './WhyChoose.module.css'

export default function AdvantageInWhyChooseUs() {
    
    return (
        <div className={style?.advantages}>
            <div class="d-flex flex-row justify-content-start align-items-center mt-md-5 px-md-4 px-2 mx-md-4 my-2">
                <img className='me-md-3 ms-2 mt-2' src={images?.carDetails?.userIcon} />
                <div class=" mx-4">
                    <h6 class="fs-md-6 fs-4 my-0">Best price guaranteed</h6>
                    <small class="my-0 text-muted text-center">Find a lower price? We’ll refund you 100% of the difference.</small>
                </div>
            </div>
            <div class="d-flex flex-row justify-content-start align-items-center mt-md-5 px-md-4 px-2 mx-md-4 my-2">
                <img className='me-md-3 ms-2 mt-2' src={images?.carDetails?.userIcon} />
                <div class=" mx-4">
                    <h6 class="fs-md-6 fs-4 my-0">24 hour car delivery</h6>
                    <small class="my-0 text-muted text-center">Book your car anytime and we will deliver it directly to you.</small>
                </div>
            </div>
            <div class="d-flex flex-row justify-content-start align-items-center mt-md-5 px-md-4 px-2 mx-md-4 my-2">
                <img className='me-md-3 ms-2 mt-2' src={images?.carDetails?.message} />
                <div class=" mx-4">
                    <h6 class="fs-md-6 fs-4 my-0">Best price guaranteed</h6>
                    <small class="my-0 text-muted text-center">Find a lower price? We’ll refund you 100% of the difference.</small>
                </div>
            </div><div class="d-flex flex-row justify-content-start align-items-center mt-md-5 px-md-4 px-2 mx-md-4 my-2">
                <img className='me-md-3 ms-2 mt-2' src={images?.carDetails?.chat} />
                <div class=" mx-4">
                    <h6 class="fs-md-6 fs-4 my-0">24/7 technical support</h6>
                    <small class="my-0 text-muted text-center">Have a question? Contact Rentcars support any time when you have problem.</small>
                </div>
            </div>
        </div>
    )
}
