import React from "react";
import '../styles/Login.scss';

const CreateNewPasword = () => {
    return (
        <div className="login">
            <div className="form-container">
                <img src="../imagenes/hapon-logo.png" alt="logo" className="logo" />

                <h1 className="title">Crear una nueva contraseña</h1>
                <p className="subtitle">Ingresa una nueva contraseña para tu cuenta</p>

                <form action="/" className="form">
                    <label for="password" className="label">Contraseña</label>
                    <input type="password" id="password" placeholder="*********" className="input input-password" />

                    <label for="new-password" className="label">Confirmar Contraseña</label>
                    <input type="password" id="new-password" placeholder="*********" className="input input-password" />

                    <input type="submit" value="Enviar" className="primary-button login-button" />
                </form>
            </div>
        </div>
    );
}

export default CreateNewPasword;