import React from 'react'
import images from '../../../../helpers/images'
import style from "./Nav.module.css"

export default function Navbar() {
    return (
        <>


            <nav className="navbar navbar-expand-lg navbar-light bg-transparent m-0 ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={images?.nav?.logo} className={`${style?.logo}`}  />
                    </a>
                    <button className="navbar-toggler collapsed mx-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className={`nav-link ${style?.navItem}`} aria-current="page" href="#">Become a rintal</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${style?.navItem}`} aria-current="page" href="#">Rinatal deals</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${style?.navItem}`} aria-current="page" href="#">How it work</a>

                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${style?.navItem}`} aria-current="page" href="#">Why choose us</a>
                            </li>
                        </ul>
                        <form className={`d-flex justify-contnt-start ${style?.butnsDiv}`}>
                            <button className="btn btn-btn-outline-light" >Sign in</button>
                            <button className="btn btn-primary" >Sign up</button>
                        </form>
                    </div>
                </div>
            </nav>







        </>
    )
}
