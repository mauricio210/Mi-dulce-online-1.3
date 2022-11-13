import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import APIInvoke from "../../utils/APIInvoke";
import swal from "sweetalert";


const Creardulce = () => {
    const alerta = (mensaje, tipo, titulo) => {
        swal({
            title: titulo,
            text: mensaje,
            icon: tipo,
            buttons: {
                confirm: {
                    text: "Aceptar",
                    value: true,
                    visible: true,
                    className: "btn btn-secondary",
                    closeModal: true
                }
            }
        });
    }

    const [dulce, setdulce] = useState({
        referencia: "",
        nombre: "",
        cantidad: "",
        precio: "",
        Descripcion: "",
    });

    const { referencia, nombre, cantidad, precio, Descripcion} = dulce;


    const onChange = (e) => {
        setdulce({
            ...dulce,
            [e.target.name]: e.target.value
        });
    }

    useEffect(() => {
        document.getElementById("referencia").focus();
    }, []);

    const creardulce = async () => {
        //RECUPERAR LOS DATOS DEL HOOK
        const data = {
            referencia: dulce.referencia,
            nombre: dulce.nombre,
            cantidad: dulce.cantidad,
            precio: dulce.precio,
            Descripcion: dulce.Descripcion,
        }

        //INVOCAR LA PETICION 
        const response = await APIInvoke.invokePOST("/dulces/new", data);
        const mensaje = response.mensaje;
        let msj, tipo, titulo;

        //VALIDAR 
        if (mensaje === "El dulce fue creado") {
            msj = "dulce guardado correctamente";
            tipo = "success";
            titulo = "Proceso exitoso";
            alerta(msj, tipo, titulo);

            //LIMPIAR CAJAS 
            setdulce({
                referencia: "",
                nombre: "",
                cantidad: "",
                precio: "",
                Descripcion: "",
            });
        }
        else if (mensaje === "El dulce ya existe") {
            msj = "Existe un dulce con la misma referencia";
            tipo = "error";
            titulo = "No se pudo guardar";
            alerta(msj, tipo, titulo);
        }


    }


    const onSubmit = (e) => {
        e.preventDefault();
        creardulce();
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
                                    <h2>Crear dulce</h2>
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
                                        <div className="container mt-4">
                                            <button type="submit" className="btn btn-secondary my-2">Crear dulce</button>
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

export default Creardulce; 