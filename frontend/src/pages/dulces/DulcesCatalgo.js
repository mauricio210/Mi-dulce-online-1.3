import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import APIInvoke from "../../utils/APIInvoke";
import swal from "sweetalert";
const DulcesCatalogo = () => {
    const compraExitosa= ()=>{
        swal({
            title: "Compra",
            text: "Se realizo la compra de forma exitosa", 
            icon: "success",
            buttons: {
                confirm:{
                    text: "Aceptar",
                    value: true, 
                    visible: true,
                    className: "btn btn-secondary",
                    closeModal: true
                }
            }
        })}
    const [dulces, setdulces] = useState([]); 

    const cargardulces = async () =>{
        const response = await APIInvoke.invokeGET("/dulces/list"); 
        console.log(response); 
        setdulces(response); 
    }

    useEffect(()=>{
        cargardulces(); 
    },[])
    return (
        <div>
            <Navbar />
            <main>
                <section class="py-5 text-center container">
                    <div class="row py-lg-5">
                        <div class="col-lg-6 col-md-8 mx-auto">
                            <h1 class="fw-light">Catalogo de dulces disponibles</h1>
                        </div>
                    </div>
                </section>

                <div class="album py-5 bg-light">
                    <div class="container">

                        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                            
                           { dulces.map(
                                item =>
                        <div class="col">
                                <div class="card shadow-sm">
<div>

  <img src={item.imagen} className="bd-placeholder-img card-img-top" width="100%" height={225} role="img" aria-label="Placeholder: Thumbnail" preserveaspectratio="xMidYMid slice" focusable="false" />
  </div>


                                    <div class="card-body">
                                        <p class="card-text">{item.nombre}</p>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="btn-group">
                                                <button
                                                 class="btn btn-sm btn-outline-secondary"
                                                 onClick={(e)=>compraExitosa()}
                                                >Comprar</button>
                                            </div>
                                            <small class="text-muted">Precio ${item.precio}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>

    );
}
export default DulcesCatalogo;