const { Router } = require("express"); 
const routerDulces = Router(); 
const controlDulce = require("../controllers/controllerDulces"); 

routerDulces.get("/", (req, res) => {
    res.send("Funcionalidad de Dulces corriendo"); 
}); 

routerDulces.post("/new", controlDulce.dulceSave); 

routerDulces.get("/list", controlDulce.dulcesList); 

routerDulces.get("/find/:id", controlDulce.dulceXid); 

routerDulces.put("/edit/:id", controlDulce.dulceEdit); 

routerDulces.delete("/delete/:id", controlDulce.dulceDelete);


module.exports = routerDulces; 