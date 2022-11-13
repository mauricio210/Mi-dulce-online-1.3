import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
    
    const idUsuario = localStorage.getItem("user");


    if (idUsuario === null) {
        window.location.href = "/";
    }
    return (
        <div className="d-flex flex-column h-100">
            
            <Navbar/>

            <br></br>
            <br></br>
            <main className="flex-shrink-0">
                <div className="container">
                    <h1 className="mt-5">Funcionalidad de CRUD para mi dulce online</h1>
                    <img src="https://img.freepik.com/foto-gratis/dulces-cuencos_23-2147710807.jpg?w=900&t=st=1668296502~exp=1668297102~hmac=8391301af79e1ead9bb49fbc7a55abee2de108ebce9bc367a011cef4d7054121" width="800"></img>
                </div>
            </main>


            <Footer />

        </div>

    );
}

export default Home; 