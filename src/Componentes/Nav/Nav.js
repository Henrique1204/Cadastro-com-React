import React from "react";
// Importando estilos do componente.
import estilos from "./Nav.module.css";

const Nav = () => {
    return (
        <aside className={`nav ${estilos.Nav}`}>
            Navegação
        </aside>
    );
};

export default Nav;
