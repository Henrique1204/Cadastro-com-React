import React from "react";
// Importando estilos do componente.
import estilos from "./Main.module.css";
// Importando componentes da interface.
import Header from "../Header/Header.js";

const Main = ({ children, ...props }) => {
    return (
        <>
            <Header {...props} />

            <main className={`main container-fluid ${estilos.Main}`}>
                <div className="p-3 mt-3">
                    {children}
                </div>
            </main>
        </>
    );
};

export default Main;
