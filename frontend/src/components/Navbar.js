import React from "react";
import { Link } from "react-router-dom";

const Nabvar = () =>{

    const onClick = () => {
        localStorage.removeItem("user");
        window.location.href="/"; 
    }
    return(
        <div className="d-flex flex-column h-100"> 
            <header>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <div className="container-fluid">
                        <Link  to={"/Home"} className="navbar-brand" >CRUD Dulces</Link>
                        <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="navbar-collapse collapse" id="navbarCollapse" style={{}}>
                            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                                <li className="nav-item">
                                    <Link to={"/list"} className="nav-link active" aria-current="page" >Listar</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"/new"} className="nav-link active" aria-current="page" >Crear</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"/catalogo"} className="nav-link active" aria-current="page" >Catalogo</Link>
                                </li>
                            </ul>
                            <form className="d-flex" role="search">
                                <button  onClick={onClick} className="btn btn-outline-success mx-2" type="button">Salir</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    ); 
}

export default Nabvar; 