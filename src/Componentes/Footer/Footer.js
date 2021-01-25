import React from "react";
// Importando estilos do componente.
import estilos from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={`footer ${estilos.Footer}`}>
            <p>
                <span>Desenvolvido com <i className="fa fa-heart text-danger"></i></span> por
                <a href="https://github.com/Henrique1204" target="blank"> Henrique1204</a>
            </p>
        </footer>
    );
};

export default Footer;
