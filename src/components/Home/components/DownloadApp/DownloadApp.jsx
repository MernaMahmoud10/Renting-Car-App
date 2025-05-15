import React from 'react'
import style from "./DownloadApp.module.css"
import images from '../../../../helpers/images'

export default function DownloadApp() {
    return (
        <div className='container'>
            <div className="row align-items-center justify-content-round">
                <div className={`col-md-6 my-md-5 mt-3 pt-md-5 ${style?.downloadApp}`}
                    style={{ backgroundImage: `url(${images?.carDetails?.bg})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundOrigin: "border-box", backgroundPosition: "left left" }}>
                    <h3>Download Rentcars App for  <span className='text-primary'>FREE</span></h3>
                    <small>For faster, easier booking and exclusive deals.</small>
                    <div className='d-flex my-4'>
                        <img className="me-2" src={images?.sec7?.ios} alt='ios' />
                        <img src={images?.sec7?.android} alt='ios' />
                    </div>
                    <form className='w-75'>
                        <input className='form-control rounded-5 mb-3' placeholder='Name' />
                        <input className='form-control rounded-5 mb-3' placeholder='Phone Number' />
                        <input className='form-control rounded-5 mb-3' placeholder='Email' />
                        <div className='d-flex justify-content-center'>
                            <button className='btn btn-primary'>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
                <div className='col'></div>
                <div className='col-md-5 mt-5'>
                    <div className='d-flex justify-content-center align-items-end d-md-block d-none mb-0 mt-5'>
                        <img src={images?.sec7?.iphone14} width="80%" className=''/>
                    </div>
                </div>
            </div>
        </div>
    )
}
