import React from 'react';
import {Link} from 'react-router-dom';


const Navbar = ({page}) => {

    return (

        <header>
            {/* header inner */}
            <div className="header shadow-sm">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                            <div className="full">
                                <div className="center-desk">
                                    <div className="logo">
                                        <img src="/assets/images/OP.png" alt="#"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                            <nav className="navbar navbar-expand-lg">
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#navbarsExample04"
                                    aria-controls="navbarsExample04"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="navbar-toggler-icon"/>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarsExample04">
                                    <ul className="navbar-nav mr-auto">
                                        <a className="nav-link">
                                            <li className="nav-item"><Link to="/"
                                                                           className={page === 'home' ? 'active' : 'link'}>Home</Link>
                                            </li>
                                        </a>
                                        <a className="nav-link">
                                            <li className="nav-item"><Link to="/pricing"
                                                                           className={page === 'price' ? 'active' : 'link'}>Precios</Link>
                                            </li>
                                        </a>
                                        <a className="nav-link">
                                            <li className="nav-item"><Link to="/login"
                                                                           className={page === 'login' ? 'active' : 'link'}>Iniciar
                                                Sesión</Link></li>
                                        </a>

                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>


    );
}

export default Navbar;
