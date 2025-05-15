import React from 'react'
import images from '../../../../helpers/images'
import style from "./CarCard.module.css"
import { Link } from 'react-router-dom'

export default function CarCard({ car }) {
    const cars = { 1: "car1", 2: "car2", 3: "car3", 4: "car4" }


    return (
        <div className="col-md-3 mb-3">
            <div className="card w-100">
                <img src={images?.cards?.[cars?.[Math.ceil(Math.random() * (4 - 1) + 1)]]} className="card-img-top w-75 d-block mx-auto my-2" alt="..." />
                <div className="card-body">
                    <h5 className="card-title py-3 mb-1 fs-4">{car?.car_model}</h5>
                    <div>
                        <img className='pe-1' src={images?.cards?.star} />
                        <small className='text-muted'>(1345 reviews)</small>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <div>
                            <p className='mb-3 card-text text-nowrap d-flex align-items-start'>
                                <img className='pe-1' src={images?.cards?.user} />
                                <small className='text-muted'>2 passengers</small>
                            </p>
                            <p>
                                <i className="pe-2 fa-solid fa-calendar-days"></i>
                                <small className='text-muted'>{car?.car_model_year}</small>
                            </p>
                        </div>
                        <div>
                            <p className='mb-3 card-text text-nowrap d-flex align-items-end '>
                                <img className='pe-1' src={images?.cards?.air} />
                                <small className='text-muted'>Air conditioning</small>
                            </p>
                            <p>
                                <img className='pe-1' src={images?.cards?.frame} />
                                <small className='text-muted'>Automatic</small>
                            </p>
                        </div>
                    </div>
                    <hr />
                    <div className='d-flex justify-content-between align-items-center mb-3'>
                        <p className='text-muted m-0'>Price</p>
                        <div className="d-flex align-items-center justify-content-between">
                            <h6 className='m-0'>{car?.price}</h6>
                            <span>/</span>
                            <p className="text-muted m-0">day</p>
                        </div>
                    </div>
                    <div>
                        <button href="#" className="btn btn-primary w-100 fs-6">
                            <Link className={style?.detailsByn} to={`/carDetails/${car?.id}`}>View details</Link>
                            <img className='ps-2' src={images?.cards?.arrowRight} />
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}
