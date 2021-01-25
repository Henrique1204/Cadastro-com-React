import React from "react";
// Importando estilos do componente.
import estilos from "./Header.module.css";

const Header = ({ icon, titulo, subtitulo}) => {
    return (
        <header className={`header d-none d-sm-flex flex-column ${estilos.Header}`}>
            <h1 className="mt-3" >
                <i className={`fa fa-${icon}`} ></i>{titulo}
            </h1>

            <p className="lead text-muted">{subtitulo}</p>
        </header>
    );
};

export default Header;
