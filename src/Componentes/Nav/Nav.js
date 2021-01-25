import React from "react";
// Importando estilos do componente.
import estilos from "./Nav.module.css";

const Nav = () => {
    return (
        <aside className={`nav ${estilos.Nav}`}>
            <nav className={estilos.menu}>
                <ul>
                    <li>
                        <a href="/">
                            <i className="fa fa-home"></i> Inicio
                        </a>
                    </li>

                    <li>
                        <a href="/users">
                            <i className="fa fa-users"></i> Usuários
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Nav;
