import React from "react";
// Importando estilos do componente.
import estilos from "./Header.module.css";

const Header = () => {
    return (
        <header className={`header ${estilos.Header}`}>
            Cabeçalho
        </header>
    );
};

export default Header;
