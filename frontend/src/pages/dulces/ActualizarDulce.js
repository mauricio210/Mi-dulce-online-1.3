import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import APIInvoke from "../../utils/APIInvoke"; 
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";



const Actualizardulce = () => {

    const alerta= (mensaje, tipo, titulo)=>{
        swal({
            title: titulo,
            text: mensaje, 
            icon: tipo,
            buttons: {
                confirm:{
                    text: "Aceptar",
                    value: true, 
                    visible: true,
                    className: "btn btn-secondary",
                    closeModal: true
                }
            }
        });
    }

    const navegador = useNavigate(); 
    const { id } = useParams(); 

    const [dulce, setdulce] = useState({
        referencia: "",
        nombre: "",
        cantidad: "",
        precio: "",
        Descripcion:"",
        imagen:""
    }); 
    
    const { referencia, nombre, cantidad ,precio,Descripcion,imagen} = dulce; 
    
    const cargarDatos = async ()=>{
        const response = await APIInvoke.invokeGET("/dulces/find/"+id);
        setdulce(response);  

    }

    useEffect(()=>{
        document.getElementById("referencia").focus(); 
        cargarDatos();
    },[]); 

    const onChange = (e)=>{
        setdulce({
            ...dulce,
            [e.target.name]: e.target.value
        }); 
    }

    const editardulce = async ()=>{
        const data = {
            referencia: dulce.referencia, 
            nombre: dulce.nombre, 
            cantidad: dulce.cantidad,
            precio: dulce.precio,
            Descripcion: dulce.Descripcion,
            imagen: dulce.imagen
        }

        const response = await APIInvoke.invokePUT("/dulces/edit/"+id, data);
        let msj, tipo, titulo; 

        if(response.mensaje === "Se edito el dulce correctamente"){
            msj = "dulce editado correctamente"; 
            tipo = "success";
            titulo = "Proceso exitoso"; 
            alerta(msj, tipo, titulo);

            navegador("/list"); 
        }
        else {
            msj = "No se pudo editar el dulce"; 
            tipo = "error";
            titulo = "Error en el proceso"; 
            alerta(msj, tipo, titulo);

            navegador("/list");
        }
    }

    const onSubmit = (e)=>{
        e.preventDefault(); 
        editardulce(); 
    }

    return (
        <div>
            <Navbar />
            <main>
                <div className="container">
                    <br></br>
                    <br></br>
                    <div className="row mt-5" >
                        <div className="col">

                        </div>
                        <div className="col-8">
                            <div className="card text-center">
                                <div className="card-header">
                                    <h2>Actualizar dulce</h2>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={onSubmit} >
                                        <div>
                                            <div className="form-floating mb-3">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="referencia"
                                                    placeholder="referencia"
                                                    name="referencia"
                                                    value={referencia}
                                                    onChange={onChange}
                                                    required
                                                    readOnly
                                                />
                                                <label htmlFor="floatingInput">referencia</label>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="nombre"
                                                    placeholder="nombre"
                                                    name="nombre"
                                                    value={nombre}
                                                    onChange={onChange}
                                                    required
                                                />
                                                <label htmlFor="floatingInput">nombre</label>
                                            </div>
                                            <div className="form-floating">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="cantidad"
                                                    placeholder="cantidad"
                                                    name="cantidad"
                                                    value={cantidad}
                                                    onChange={onChange}
                                                    required
                                                />
                                                <label htmlFor="floatingPassword">cantidad</label>
                                            </div>
                                        </div>
                                        <br></br>
                            <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="precio"
                                        placeholder="precio"
                                        name="precio"
                                        value={precio}
                                        onChange={onChange}
                                        required
                                    />
                                    <label htmlFor="floatingInput">Precio</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="Descripcion"
                                        placeholder="Descripcion"
                                        name="Descripcion"
                                        value={Descripcion}
                                        onChange={onChange}
                                        required
                                    />
                                    <label htmlFor="floatingInput">Descripcion</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="imagen"
                                        placeholder="imagen"
                                        name="imagen"
                                        value={imagen}
                                        onChange={onChange}
                                        required
                                    />
                                    <label htmlFor="floatingInput">imagen</label>
                                </div>
                                        <div className="container mt-4">
                                            <button type="submit" className="btn btn-secondary my-2">Editar dulce</button>
                                        </div>
                                    </form>
                                </div>
                                <div className="card-footer text-muted">
                                    Todos los campos son obligatorios
                                </div>
                            </div>
                        </div>
                        <div className="col">
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Actualizardulce; 