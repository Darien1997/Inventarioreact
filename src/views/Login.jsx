import React from 'react';
import Navbar from '../components/Navbar';
import FormLogin from '../components/FormLogin';
import Footer from '../components/Footer';

const Login = () => {

    return (
        <div className="main-layout position_head">
        <div>
             
            <Navbar page="login"/>

            <FormLogin />

            <Footer />
        </div>
        </div>
    )
}

export default Login;