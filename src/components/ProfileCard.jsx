import React, { useState } from 'react'
import { FcLock } from "react-icons/fc";
import { FaUser, FaSync } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import firebase from "firebase";
import "firebase/auth";

import useUser from "../customHooks/useUser";
import Password from './Password';


const ProfileCard = () => {

    const { user } = useUser();
    const history = useHistory();
    const [modalConfig, setModalConfig] = useState({show: false, text: '', type: '', showButton: true})
    const [showPassword, setShowPassword] = useState(false);

    const signOut = () => {
        firebase.auth().signOut().then(() => {
            setModalConfig({
                show: true,
                text: 'Cerrando sesión...',
                type: 'success',
                showButton: false
            });
            setTimeout(() => {
                history.push("/");
                history.go();
            }, 1500);
        })
    }

    return (
        <div>
            <div className="profileContainer">
                { user?.photoURL ? <img src={user?.photoURL} alt="Usuario de My Inventory" className="imgProfile"/> : <FaUser size={60} className="imgProfile"/> }
                <div className="data">
                    <h4>{ user?.displayName }</h4>
                    <h5>{ user?.email }</h5>
                </div>
                <div className="menu">
                    <ul>
                        <li onClick={() => history.push("/profile")}>
                            
                            <h4>Mi Perfil</h4>
                        </li>
                        {
                            user?.providerData[0].providerId === 'password' ? (
                                <li onClick={() => setShowPassword(true)}>
                                    
                                    <h4>Cambiar contraseña</h4>
                                </li>
                            ) : null
                        }
                        <li onClick={signOut}>
                            
                            <h4>Cerrar Sesión</h4>
                        </li>

                    </ul>
                </div>
            </div>
            
            <Password showPassword={showPassword} setShowPassword={setShowPassword}/>
        </div>
    )
}

export default ProfileCard
