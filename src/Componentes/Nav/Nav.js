import React from "react";
// Importando estilos do componente.
import estilos from "./Nav.module.css";
// Importando componentes para rotas.
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <aside className={`nav ${estilos.Nav}`}>
            <nav className={estilos.menu}>
                <ul>
                    <li>
                        <NavLink to="/">
                            <i className="fa fa-home"></i> Inicio
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/users">
                            <i className="fa fa-users"></i> Usuários
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Nav;
