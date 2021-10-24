import React from "react";
import '../styles/PasswordRecovery.scss';

const PasswordRecovery = () => {
    return (
        <div className="PasswordRecovery">
			<div className="PasswordRecovery-container">
				<img src="*" alt="logo" className="logo" />
				<h1 className="title">Recuperar Contraseña</h1>
				<p className="subtitle">Ingresa tu correo electrónico.</p>
				<form action="/" className="form">
					<label htmlFor="email" className="label">Correo:</label>
					<input type="text" id="email" className="input input-email" />
					<input type="submit" value="Enviar" className="primary-button login-button" />
				</form>
			</div>
		</div>
    );
}

export default PasswordRecovery;