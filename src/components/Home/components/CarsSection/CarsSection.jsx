import React from 'react'
import style from "./CarsSection.module.css"
import AllCars from '../../../AllCars/AllCars'
import { useNavigate } from 'react-router-dom'

export default function CarsSection() {
const naviate=useNavigate()

    return (
        <>
            <AllCars />
            <div className='container'>
                <div className='d-flex align-items-center mb-5 flex-column'>
                    <button className={`my-5 rounded-2 btn btn-outline-secondary ${style?.allVehiclesBtn}`}
                    onClick={()=>naviate("/all-vehicles")}>
                        Show all vehicles
                        <i className="fa-solid fa-right-long ps-3"></i></button>
                    <div className={`rounded-2 text-uppercase blueDiv`}>how it work</div>

                    <div className='w-100 text-center '>
                        <h2 className='sectionTitle'>Rent with following 3 working steps</h2>
                    </div>
                </div>


            </div>
        </>
    )
}
