import React from "react";
// Importando estilo geral do App.
import "./App.css";
// Importando componentes da interface.
import Logo from "./Componentes/Logo/Logo.js";
import Nav from "./Componentes/Nav/Nav.js";
import Home from "./Componentes/Home.js";
import Footer from "./Componentes/Footer/Footer.js";
import CadastroUsuario from "./Componentes/CadastroUsuario/CadastroUsuario.js";
// Importando componentes para rotas.
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = ()  => {
  return (
    <BrowserRouter>
      <div className="App">
        <Logo />
        <Nav />

        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/users"  element={<CadastroUsuario />} />
          <Route path="*"  element={<Home />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
