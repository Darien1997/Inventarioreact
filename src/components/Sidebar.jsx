import React from 'react'
import {Link} from 'react-router-dom';
import ProfileCard from "../components/ProfileCard";

const Sidebar = ({page}) => {

    return (<header>
        {/* header inner */}
        <div className="header shadow-sm">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-xl-8 col-lg-8 col-md-12 col-sm-8 col-12 logo_section">
                        <div className="full">
                            <div className="center-desk">
                                <div className="logo">
                                    <img className="logo-image" src="/assets/images/OP.png" alt="#"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-4 col-12">
                        <nav className="navbar navbar-expand-sm">
                            <div className="container-fluid">
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
                                    <ul className="navbar-nav">
                                        <li className="nav-item mx-3">
                                            <Link to="/dashboard"
                                                  className={page === 'dashboard' ? 'itemContainerA' : 'itemContainer'}
                                                  title="Inicio">
                                                Dashboard
                                            </Link>
                                        </li>
                                        <li className="nav-item mx-3">
                                            <Link to="/products"
                                                  className={page === 'products' ? 'itemContainerA' : 'itemContainer'}
                                                  title="Productos">
                                                Productos
                                            </Link>
                                        </li>
                                        <li className="nav-item mx-3">
                                            <Link to="/moves"
                                                  className={page === 'moves' ? 'itemContainerA' : 'itemContainer'}
                                                  title="Movimientos">
                                                Movimientos
                                            </Link>
                                        </li>
                                        <li className="nav-item mx-3">
                                            <Link to="/clients"
                                                  className={page === 'clients' ? 'itemContainerA' : 'itemContainer'}
                                                  title="Clientes">
                                                Clientes
                                            </Link>
                                        </li>
                                        <li className="nav-item mx-3 dropdown">
                                            <ProfileCard/>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </header>)
}

export default Sidebar
