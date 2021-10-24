import React from "react";
import '../styles/Login.scss';

const Login = () => {
    return (
        <div className="Login">
			<div className="Login-container">
				<img src="*" alt="logo" className="logo" />
				<form action="/" className="form">
					<label htmlFor="email" className="label">Correo Electrónico</label>
					<input type="text" id="email" placeholder="ejemplo@hapon.com" className="input input-email" />
					<label htmlFor="password" className="label">Contraseña</label>
					<input type="password" id="password" placeholder="*********" className="input input-password" />
					<input type="submit" value="Iniciar sesión" className="primary-button login-button" />
					<a href="/">¡Olvidé mi contraseña!</a>
				</form>
				<button className="secondary-button signup-button">Suscribirse</button>
			</div>
		</div>
    );
}

export default Login;