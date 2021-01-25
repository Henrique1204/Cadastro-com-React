import React from "react";
// Importando estilo do componente.
import estilos from "./Logo.module.css";
// Importando Assets.
import logoImg from "../../Assets/img/logo.png";

const Logo = () => {
    return (
        <aside className={`logo ${estilos.Logo}`}>
            <a href="/">
                <img src={logoImg} alt="Logo"/>
            </a>
        </aside>
    );
};

export default Logo;
