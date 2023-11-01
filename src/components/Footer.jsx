import React from 'react';

import '../css/footer.css';

const Footer = () => {
    return(
        <footer>
                    <div className="footer">
                    <div className="container">
                        <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <ul className="location_icon">
                            <li>
                                <a href="#">
                                <i className="fa fa-map-marker" aria-hidden="true" />
                                </a>
                                <br /> Locacion
                            </li>
                            <li>
                                <a href="#">
                                <i className="fa fa-phone" aria-hidden="true" />
                                </a>
                                <br /> +502 23659856
                            </li>
                            <li>
                                <a href="#">
                                <i className="fa fa-envelope" aria-hidden="true" />
                                </a>
                                <br /> nada@gmail.com
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="copyright">
                        <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                            <p>
                                © 2023 All Rights Reserved. Design by
                                Darien
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </footer>
    );
}

export default Footer;