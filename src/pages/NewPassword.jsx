import React from 'react';
import '../styles/NewPassword.scss';

const NewPassword = () => {
	return (
		<div className="NewPassword">
			<div className="NewPassword-container">
				<img src="*" alt="logo" className="logo" />
				<h1 className="title">Crea una contraseña nueva</h1>
				<p className="subtitle">Ingresa una nueva contraseña para tu cuenta</p>
				<form action="/" className="form">
					<label for="password" className="label">Contraseña</label>
					<input type="password" id="password" placeholder="*********" className="input input-password" />
					<label for="new-password" className="label">Confirmar Contraseña</label>
					<input type="password" id="new-password" placeholder="*********" className="input input-password" />
					<input type="submit" value="Guardar" className="primary-button login-button" />
				</form>
			</div>
		</div>
	);
}

export default NewPassword;