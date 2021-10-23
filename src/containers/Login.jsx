import React from "react";
import '../styles/Login.scss';

const Login = () => {
    return (
        <div className="login">
            <div className="form-container">
                <img src="../imagenes/hapon-logo.png" alt="logo" className="logo" />

                <h1 className="title">¡Bienvenido a Hapon!</h1>
                <p className="subtitle">Ingresa usuario y contraseña</p>

                <form action="/" className="form">
                    <label for="password" className="label">Usuario</label>
                    <input type="password" id="password" placeholder="NaYpE^" className="input input-password" />

                    <label for="new-password" className="label">Contraseña</label>
                    <input type="password" id="new-password" placeholder="*********" className="input input-password" />

                    <input type="submit" value="Enviar" className="primary-button login-button" />
                </form>
            </div>
        </div>
    );
}

export default Login;