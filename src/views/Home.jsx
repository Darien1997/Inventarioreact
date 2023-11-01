import React from 'react';
import Navbar from '../components/Navbar';

import Footer from '../components/Footer';


import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="main-layout position_head">
            <Navbar page="home"/>

            <section className="head">
            <section className="banner_main">
                    <div id="banner1" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#banner1" data-slide-to={0} className="active" />
                        <li data-target="#banner1" data-slide-to={1} />
                        <li data-target="#banner1" data-slide-to={2} />
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <div className="container">
                            <div className="carousel-caption">
                            <div className="text-bg">
                                <h1>
                                {" "}
                                <span className="blu">
                                    Los mejores estilos <br />
                                </span>

                                </h1>
                                <figure>
                                <img src="/assets/images/banner_img.png" alt="#" />
                                </figure>
                                <a className="read_more" href="#">
                                Shop Now
                                </a>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="carousel-item">
                        <div className="container">
                            <div className="carousel-caption">
                            <div className="text-bg">
                                <h1>
                                {" "}
                                <span className="blu">
                                    Los mejores estilos<br />
                                </span>
                                
                                </h1>
                                <figure>
                                <img src="/assets/images/banner_img.png" alt="#" />
                                </figure>
                                <a className="read_more" href="#">
                                Shop Now
                                </a>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="carousel-item">
                        <div className="container">
                            <div className="carousel-caption">
                            <div className="text-bg">
                                <h1>
                                {" "}
                                <span className="blu">
                                Lo mejor en lentes<br />
                                </span>
                                
                                </h1>
                                <figure>
                                <img src="/assets/images/banner_img.png" alt="#"/>
                                </figure>
                                <a className="read_more" href="#">
                                Shop Now
                                </a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <a
                        className="carousel-control-prev"
                        href="#banner1"
                        role="button"
                        data-slide="prev"
                    >
                        <i className="fa fa-arrow-left" aria-hidden="true" />
                    </a>
                    <a
                        className="carousel-control-next"
                        href="#banner1"
                        role="button"
                        data-slide="next"
                    >
                        <i className="fa fa-arrow-right" aria-hidden="true" />
                    </a>
                    </div>
                </section>
                {/* end banner */}
                {/* about section */}
                <div className="about">
                    <div className="container">
                    <div className="row d_flex">
                        <div className="col-md-5">
                        <div className="about_img">
                            <figure>
                            <img src="/assets/images/about_img.png" alt="#" />
                            </figure>
                        </div>
                        </div>
                        <div className="col-md-7">
                        <div className="titlepage">
                            <h2>Quienes Somos</h2>
                            <p>
                            Somos una empresa dedica a la busqueda de la buen salud de cada persona, de manera preventiva,
                            correctiva o curativa para una mejor calidad de vida, llevando a las empresas o instituciones
                            nuestro cuerpo tecnico y profesional, con la mejor tecnologia y la mejor actitud de servicio
                            puesta a sus ordenes.
                            </p>
                        </div>
                        <a className="read_more" href="#">
                            Leer mas...
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                {/* about section */}
                {/* Our  Glasses section */}
                <div className="glasses">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-10 offset-md-1">
                        <div className="titlepage">
                            <h2>Catalogo</h2>
                            <p>
                            Tenemos todo tipo de estilo para nuestro clientes mas exigentes
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                        <div className="glasses_box">
                            <figure>
                            <img src="/assets/images/slider1.jpg" alt="#" />
                            </figure>
                            <h3>
                            <span className="blu">$</span>50
                            </h3>
                            <p>Lentes</p>
                        </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                        <div className="glasses_box">
                            <figure>
                            <img src="/assets/images/glass2.png" alt="#" />
                            </figure>
                            <h3>
                            <span className="blu">Q</span>50
                            </h3>
                            <p>Lentes</p>
                        </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                        <div className="glasses_box">
                            <figure>
                            <img src="/assets/images/glass3.png" alt="#" />
                            </figure>
                            <h3>
                            <span className="blu">Q</span>50
                            </h3>
                            <p>Lentes</p>
                        </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                        <div className="glasses_box">
                            <figure>
                            <img src="/assets/images/glass4.png" alt="#" />
                            </figure>
                            <h3>
                            <span className="blu">Q</span>50
                            </h3>
                            <p>Lentes</p>
                        </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                        <div className="glasses_box">
                            <figure>
                            <img src="/assets/images/glass5.png" alt="#" />
                            </figure>
                            <h3>
                            <span className="blu">Q</span>50
                            </h3>
                            <p>Lentes</p>
                        </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                        <div className="glasses_box">
                            <figure>
                            <img src="/assets/images/glass6.png" alt="#" />
                            </figure>
                            <h3>
                            <span className="blu">Q</span>50
                            </h3>
                            <p>Lentes</p>
                        </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                        <div className="glasses_box">
                            <figure>
                            <img src="/assets/images/glass7.png" alt="#" />
                            </figure>
                            <h3>
                            <span className="blu">Q</span>50
                            </h3>
                            <p>Lentes</p>
                        </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                        <div className="glasses_box">
                            <figure>
                            <img src="/assets/images/glass8.png" alt="#" />
                            </figure>
                            <h3>
                            <span className="blu">Q</span>50
                            </h3>
                            <p>Lentes</p>
                        </div>
                        </div>
                        <div className="col-md-12">
                        <a className="read_more" href="#">
                            Ver mas...
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                {/* end Our  Glasses section */}
                {/* Our shop section */}
                <div id="about" className="shop">
                    <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-5">
                        <div className="shop_img">
                            <figure>
                            <img src="/assets/images/shop_img.png" alt="#" />
                            </figure>
                        </div>
                        </div>
                        <div className="col-md-7 padding_right0">
                        <div className="max_width">
                            <div className="titlepage">
                            <h2>Los mejores estilos y ofertas</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                in reprehenderit in voluptate velit esse cillum dolore
                            </p>
                            <a className="read_more" href="#">
                                Ver mas...
                            </a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* end Our shop section */}
                {/* clients section */}
                <div className="clients">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                        <div className="titlepage">
                            <h2>Que dicen nuestros clientes</h2>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut la
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                        <div
                            id="myCarousel"
                            className="carousel slide clients_Carousel "
                            data-ride="carousel"
                        >
                            <ol className="carousel-indicators">
                            <li
                                data-target="#myCarousel"
                                data-slide-to={0}
                                className="active"
                            />
                            <li data-target="#myCarousel" data-slide-to={1} />
                            <li data-target="#myCarousel" data-slide-to={2} />
                            </ol>
                            <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="container">
                                <div className="carousel-caption ">
                                    <div className="row">
                                    <div className="col-md-12">
                                        <div className="clients_box">
                                        <figure>
                                            <img src="/assets/images/our.png" alt="#" />
                                        </figure>
                                        <h3>Sandy Mark</h3>
                                        <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.


                                        </p>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="container">
                                <div className="carousel-caption">
                                    <div className="row">
                                    <div className="col-md-12">
                                        <div className="clients_box">
                                        <figure>
                                            <img src="/assets/images/our.png" alt="#" />
                                        </figure>
                                        <h3>Sandy Mark</h3>
                                        <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.


                                        </p>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="container">
                                <div className="carousel-caption">
                                    <div className="row">
                                    <div className="col-md-12">
                                        <div className="clients_box">
                                        <figure>
                                            <img src="/assets/images/our.png" alt="#" />
                                        </figure>
                                        <h3>Sandy Mark</h3>
                                        <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.


                                        </p>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <a
                            className="carousel-control-prev"
                            href="#myCarousel"
                            role="button"
                            data-slide="prev"
                            >
                            <i className="fa fa-angle-left" />
                            </a>
                            <a
                            className="carousel-control-next"
                            href="#myCarousel"
                            role="button"
                            data-slide="next"
                            >
                            <i className="fa fa-angle-right" />
                            </a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* end clients section */}
                {/* contact section */}
                <div id="contact" className="contact">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                        <form id="request" className="main_form">
                            <div className="row">
                            <div className="col-md-12 ">
                                <h3>Contactanos</h3>
                            </div>
                            <div className="col-md-12 ">
                                <input
                                className="contactus"
                                placeholder="Nombre"
                                type="type"
                                name="Name"
                                />
                            </div>
                            <div className="col-md-12">
                                <input
                                className="contactus"
                                placeholder="Numero de Telefono"
                                type="type"
                                name="Phone Number"
                                />
                            </div>
                            <div className="col-md-12">
                                <input
                                className="contactus"
                                placeholder="Correo Electronico"
                                type="type"
                                name="Email"
                                />
                            </div>
                            <div className="col-md-12">
                                <input
                                className="contactusmess"
                                placeholder="Message"
                                type="type"
                                message="Name"
                                />
                            </div>
                            <div className="col-md-12">
                                <button className="send_btn">Enviar</button>
                            </div>
                            </div>
                        </form>
                        </div>
                    </div>
                    </div>
                    <div className="container-fluid">
                    <div className="map_section">
                        <div id="map"></div>
                    </div>
                    </div>
                </div>
                
            </section>
            
            <Footer />
        </div>
    )
}

export default Home;
