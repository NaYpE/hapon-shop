import React from 'react';
import '../styles/SendEmail.scss';

const SendEmail = () => {
	return (
		<div className="SendEmail">
			<div className="form-container">
				<img src="*" alt="logo" className="logo" />
				<h1 className="title">¡El correo ha sido enviado!</h1>
				<p className="subtitle">Consulte su bandeja de entrada para obtener instrucciones sobre cómo restablecer la contraseña</p>
				<div className="email-image">
					<img src="*" alt="email" />
				</div>
				<button className="primary-button login-button">Iniciar Sesión</button>
				<p className="resend">
					<span>¿No recibiste el correo electrónico?</span>
					<a href="/"> Reenviar</a>
				</p>
			</div>
		</div>
	);
}

export default SendEmail;