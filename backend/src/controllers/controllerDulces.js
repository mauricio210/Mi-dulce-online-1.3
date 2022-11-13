const e = require("express");
const Dulce = require("../models/Dulces"); 
const jwt = require("jsonwebtoken"); 

//Insertar dulce
const dulceSave = async (req, res) =>  {
    try {
        const {referencia, nombre, cantidad,precio,Descripcion} = req.body;

        let dulce = await Dulce.findOne({referencia});

        if(dulce){
            return res.status(400).json({
                mensaje: "El dulce ya existe"
            }); 
        }
        else{
            dulce = new Dulce(req.body);
            await dulce.save(); 
            return res.status(200).json({
                mensaje: "El dulce fue creado"
            })
        }

        const payload = {
            dulce: { id: dulce.id },
        };
      
        jwt.sign(
            payload,
            process.env.SECRETA,
            {
              expiresIn: 3600, //1 hora
            },
            (error, token) => {
              if (error) throw error;
      
              //Mensaje de confirmación
              res.json({ token });
            }
        );

    } catch (error) {
        console.error(error); 
    }
}

//Listar los dulces de la base de datos
const dulcesList = async (req, res) => {
    try {
        const listaDulces = await Dulce.find(); 
        res.status(200).send(listaDulces); 
    } catch (error) {
        console.error(error); 
    }
}

//Consultar dulce por id
const dulceXid = async (req, res) => {
    try {
        const id = req.params.id; 
        const dulce = await Dulce.findById(id);
        if(dulce !=null){
            res.status(200).send(dulce);  
        }
        else{
           return res.status(400).json({mensaje:"No se encontro el dulce"}); 
        }
    } catch (error) {
        console.error(error); 
    }
}

//Actualizar dulce
const dulceEdit = async (req, res) => {
    try {
        const id = req.params.id; 
        const dulce = req.body;
        await Dulce.findByIdAndUpdate(id, dulce); 
        return res.status(200).json({ mensaje: "Se edito el dulce correctamente"}); 

        const payload = {
            dulce: { id: dulce.id },
        };
      
        jwt.sign(
            payload,
            process.env.SECRETA,
            {
              expiresIn: 3600, //1 hora
            },
            (error, token) => {
              if (error) throw error;
      
              //Mensaje de confirmación
              res.json({ token });
            }
        );
    } catch (error) {
        console.log(error); 
    }
}

//Eliminar dulce
const dulceDelete = async (req, res) =>{
    try {
        const id = req.params.id; 
        await Dulce.findByIdAndDelete(id);
        return res.status(200).json({ mensaje: "se elimino el dulce"}); 

        const payload = {
            dulce: { id: dulce.id },
        };
      
        jwt.sign(
            payload,
            process.env.SECRETA,
            {
              expiresIn: 3600, //1 hora
            },
            (error, token) => {
              if (error) throw error;
      
              //Mensaje de confirmación
              res.json({ token });
            }
        );
    } catch (error) {
        console.log(error); 
    }
}


module.exports = {
    dulceSave,
    dulcesList,
    dulceXid,
    dulceEdit,
    dulceDelete
}