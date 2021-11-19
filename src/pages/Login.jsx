import React, { useRef } from "react";
import '../styles/Login.scss';
import logo from "@images/hapon-logo.png";

const Login = () => {
	const form = useRef(null);

	const handleSubmit = (event) => {
		event.preventDefault();
		const formData = new FormData(form.current);
		const data = {
			username: formData.get('email'),
			password: formData.get('password')
		}
		console.log(data)
	}
    return (
        <div className="Login">
			<div className="Login-container">
				<img src={logo} alt="logo" className="logo" />
				<form action="/" className="form" ref={form}>
					<label htmlFor="email" className="label">Correo Electrónico</label>
					<input type="text" name="email" placeholder="ejemplo@hapon.com" className="input input-email" />
					<label htmlFor="password" className="label">Contraseña</label>
					<input type="password" name="password" placeholder="*********" className="input input-password" />
					<button onClick={handleSubmit} className="primary-button login-button" >Iniciar Sesión</button>
					<a href="/">¡Olvidé mi contraseña!</a>
				</form>
				<button className="secondary-button signup-button">Suscribirse</button>
			</div>
		</div>
    );
}

export default Login;