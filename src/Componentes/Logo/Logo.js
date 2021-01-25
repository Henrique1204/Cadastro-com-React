import React from "react";
// Importando estilo do componente.
import estilos from "./Logo.module.css";

const Logo = () => {
    return (
        <aside className={`logo ${estilos.Logo}`}>
            Logo
        </aside>
    );
};

export default Logo;
