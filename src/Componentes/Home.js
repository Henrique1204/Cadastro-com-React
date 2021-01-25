import React from "react";
// Importando componentes da interface.
import Main from "./Main/Main.js";

const Home = () => {
    return (
        <Main icon="home" titulo="Inicío" subtitulo="Projeto cadastro de usuários.">
            <div className="display-4">Bem vindo!</div>
            <hr/>
            <p className="mb-0">Sistema para exemplificar a contrução de um cadastro desenvolvido em React.</p>
      </Main>
    );
};

export default Home;
