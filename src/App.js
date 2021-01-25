import React from "react";
// Importando estilo geral do App.
import "./App.css";
// Importando componentes da interface.
import Logo from "./Componentes/Logo/Logo.js";
import Nav from "./Componentes/Nav/Nav.js";
import Main from "./Componentes/Main/Main.js";
import Footer from "./Componentes/Footer/Footer.js";

const App = ()  => {
  return (
    <div className="App">
      <Logo />
      <Nav />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
