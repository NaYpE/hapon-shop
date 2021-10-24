import React from 'react';
import '../styles/MyAccount.scss';

const MyAccount = () => {
	return (
		<div className="MyAccount">
			<div className="MyAccount-container">
				<h1 className="title">Mi cuenta</h1>
				<form action="/" className="form">
					<div>
						<label for="name" className="label">Nombre:</label>
						<p className="value">Angelindo Gallardo</p>
						<label for="email" className="label">Correo:</label>
						<p className="value">agallardo@hapon.com</p>
						<label for="password" className="label">Contraseña:</label>
						<p className="value">*********</p>
					</div>
					<input type="submit" value="Editar" className="secondary-button login-button" />
				</form>
			</div>
		</div>
	);
}

export default MyAccount;