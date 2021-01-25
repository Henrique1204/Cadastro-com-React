import React from "react";
// Importando estilos do componente.
import estilos from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={`footer ${estilos.Footer}`}>
            Rodapé
        </footer>
    );
};

export default Footer;
