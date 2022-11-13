import React from "react";
import { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Login from "./pages/auth/Login";
import CrearCuenta from "./pages/auth/CrearCuenta";
import Home from "./pages/Home";
import ListaDulces from "./pages/dulces/ListaDulces";
import CrearDulce from "./pages/dulces/CrearDulce";
import ActualizarDulce from "./pages/dulces/ActualizarDulce"; 
import DulcesCatalogo from "./pages/dulces/DulcesCatalgo";

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" exact element={<Login/>} />
          <Route path="/CrearCuenta" exact element={<CrearCuenta/>}/>
          <Route path="/Home" exact element={<Home/>}/>
          <Route path="/list" exact element={<ListaDulces/>}/>
          <Route path="/new" exact element={<CrearDulce/>} />
          <Route path="/edit/:id" exact element={<ActualizarDulce/>} />
          <Route path="/catalogo/" exact element={<DulcesCatalogo/>}/>
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
