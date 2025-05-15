import React from 'react'
import images from '../../../../helpers/images'

export default function RentSection() {
    return (
        <div className='container'>
            <div className="row ">
                <div className='col-md-4 mb-3'>
                    <div class="d-flex flex-column align-items-center mx-0 my-2 ">
                        <div>
                            <img src={images?.rentSection?.chooseLocation} alt="choose location" />
                        </div>
                        <h3 class="my-2 py-2">Choose location</h3>
                        <small class="text-muted text-center">Choose your and find your best car</small>
                    </div>
                </div>
                <div className='col-md-4 mb-3'>
                    <div class="d-flex flex-column align-items-center mx-0 my-2 ">
                        <div>
                            <img src={images?.rentSection?.pickup} alt="choose location" />
                        </div>
                        <h3 class="my-2 py-2">Pick-up date</h3>
                        <small class="text-muted text-center">Select your pick up date and time to book your car</small>
                    </div>
                </div>
                <div className='col-md-4 mb-3'>
                    <div class="d-flex flex-column align-items-center mx-0 my-2 ">
                        <div>
                            <img src={images?.rentSection?.chooseLocation} alt="Book your car" />
                        </div>
                        <h3 class="my-2 py-2">Book your car</h3>
                        <small class="text-muted text-center">Book your car and we will deliver it directly to you</small>
                    </div>
                </div>
            </div>
        </div>
    )
}
