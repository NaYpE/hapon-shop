import React from "react";
import '../styles/RecoveryPassword.scss';

const RecoveryPassword = () => {
    return (
        <div className="login">
            <div className="form-container">
                <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
                <h1 className="title">¡El correo fue enviado!</h1>
                <p className="subtitle">Por favor revisa tu correo electronico y sigue las instrucciones para reestablecer la contraseña.</p>
                <div className="email-image">
                    <img src="./icons/email.svg" alt="email" />
                </div>
                <button className="primary-button login-button">Login</button>
                <p className="resend">
                    <span>¿No recibiste ningún correo? </span>
                    <a href="/">Reenviar</a>
                </p>
            </div>
        </div>
    );
}

export default RecoveryPassword;