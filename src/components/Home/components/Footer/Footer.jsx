import React from 'react'
import images from '../../../../helpers/images'
import style from './Footer.module.css'


export default function Footer() {
    return (
        <div className={style?.footer}>
            <div className="row">
                <div className="col-md-5 my-5">
                    <div className="d-flex justify-content-between">
                        <div>
                            <img src={images?.footer?.footerLogo} className={style?.footerImg} />
                            <div className="d-flex justify-content-start align-items-center my-3">
                                <img src={images?.footer?.location} />
                                <div class="d-flex flex-column mx-2 text-white">
                                    <small>25566 Hc 1,Glenallen,
                                        <br />Alaska, 99588, USA
                                    </small>
                                </div>
                            </div>
                            <div className="d-flex justify-content-start align-items-center my-3">
                                <img src={images?.footer?.call} />
                                <div class="d-flex flex-column mx-2 text-white">
                                    +603 4784 273 12
                                </div>
                            </div>
                            <div className="d-flex justify-content-start align-items-center my-3">
                                <img src={images?.footer?.sms} />
                                <div class="d-flex flex-column mx-2 text-white">
                                    rentcars@gmail.com
                                </div>
                            </div>

                        </div>
                        <div className=" text-white mt-3">
                            <div className="h6 text-capitalize mb-4 ">our products</div>
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link text-white" aria-current="page" href="#">Carrers</a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link text-white" href="#">cars</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#">Packages</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#">Features</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#">Priceline</a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
                <div className='col-md-7 my-md-5 mb-5'>
                    <div className='d-flex justify-content-around'>
                        <div className=" text-white mt-3">
                            <div className="h6 text-capitalize mb-4 ">about rent cars</div>
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link text-white" aria-current="page" href="#">why choose us</a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link text-white" href="#">our story</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#">investor relations</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#">press center</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#">advertise</a>
                                </li>
                            </ul>
                        </div>
                        <div className=" text-white mt-3">
                            <div className="h6 text-capitalize mb-4 ">our products</div>
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link text-white" aria-current="page" href="#">Carrers</a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link text-white" href="#">cars</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#">Packages</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#">Features</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#">Priceline</a>
                                </li>
                            </ul>
                        </div>
                        <div className=" text-white mt-3">
                            <div className="h6 text-capitalize mb-4 ">our products</div>
                            <ul className="nav">
                                <li className="nav-item">
                                    <img src={images?.footer?.facebook} className='me-2' />
                                </li>
                                <li className="nav-item ">
                                    <img src={images?.footer?.instagram} className='me-2' />
                                </li>
                                <li className="nav-item">
                                    <img src={images?.footer?.youtube} className='' />
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row text-white">
                <hr style={{ padding: "0px 5rem", display: "block", margin: "auto" }} />
                <p class="mt-md-5 mt-3 mb-4">Copyright 2023 ・ Rentcars, All Rights Reserved</p>
            </div>
        </div>

    )
}
