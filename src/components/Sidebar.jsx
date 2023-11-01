import React from 'react'
import { FcStatistics, FcPaid, FcMultipleInputs } from "react-icons/fc";
import { Link } from 'react-router-dom';
import Switch from 'react-switch';
import { FaSun, FaMoon } from "react-icons/fa";
import ProfileCard from "../components/ProfileCard";



import logo from "../assets/img/logo.png";

const Sidebar = ({ page}) => {

    return (
      <header>
      {/* header inner */}
      <div className="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
              <div className="full">
                <div className="center-desk">
                  <div className="logo">
                      <img src="/assets/images/OP.png" alt="#" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
              <nav className="navigation navbar navbar-expand-md navbar-dark ">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarsExample04"
                  aria-controls="navbarsExample04"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarsExample04">
                  <ul className="navbar-nav mr-auto">
                  <a className="nav-link"> <li className="nav-item"><Link to="/dashboard" className={page==='dashboard'? 'itemContainerA' : 'itemContainer'} title="Inicio">
                        <p>Dashboard</p>
                      </Link></li></a>
                              <a className="nav-link"> <li className="nav-item"><Link to="/products" className={page==='products'? 'itemContainerA' : 'itemContainer'} title="Productos">
                        <p>Productos</p>
                      </Link></li></a>
                              <a className="nav-link"><li className="nav-item"><Link to="/moves" className={page==='moves'? 'itemContainerA' : 'itemContainer'} title="Movimientos">
                        <p>Movimientos</p>
                      </Link>   </li></a>
                      <a className="nav-link"><li className="nav-item"><Link to="/clients" className={page==='clients'? 'itemContainerA' : 'itemContainer'} title="Clientes">
                        <p>Clientes</p>
                      </Link>   </li></a>
                      
              
                     </ul>
                     <ul>
                     <a className="nav-link"><li className="nav-item"><ProfileCard /></li></a>
                     
                     </ul>
                  </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
  </header>
    )
}

export default Sidebar
