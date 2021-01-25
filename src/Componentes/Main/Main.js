import React from "react";
// Importando estilos do componente.
import estilos from "./Main.module.css";
// Importando componentes da interface.
import Header from "../Header/Header.js";

const Main = () => {
    return (
        <>
            <Header />

            <main className={estilos.Main}>
                Conteúdo
            </main>
        </>
    );
};

export default Main;
