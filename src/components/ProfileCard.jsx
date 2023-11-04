import React, {useState} from 'react'
import {FaUser} from "react-icons/fa";
import {useHistory} from "react-router-dom";
import firebase from "firebase";
import "firebase/auth";

import useUser from "../customHooks/useUser";
import Password from './Password';


const ProfileCard = () => {

    const {user} = useUser();
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
        <>
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
               aria-expanded="false">
                {user?.photoURL ? <img src={user?.photoURL} alt="Usuario de My Inventory" className="imgProfile"/> :
                    <FaUser size={20} className="imgProfile"/>} {user?.displayName}
            </a>
            <ul className="dropdown-menu dropdown-menu-start">
                <li>
                    <a className="dropdown-item" href="#">
                        {user?.email}
                    </a>
                </li>
                <li onClick={() => history.push("/profile")}>
                    <a className="dropdown-item" href="#">
                        Mi Perfil
                    </a>
                </li>
                {
                    user?.providerData[0].providerId === 'password' ? (
                        <li onClick={() => setShowPassword(true)}>
                            <a className="dropdown-item" href="#">
                                Cambiar contraseña
                            </a>
                        </li>
                    ) : null
                }
                <li onClick={signOut}>
                    <a className="dropdown-item" href="#">
                        Cerrar Sesión
                    </a>
                </li>

            </ul>

            <Password showPassword={showPassword} setShowPassword={setShowPassword}/>
        </>
    )
}

export default ProfileCard
