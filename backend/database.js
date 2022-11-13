const mongo = require("mongoose"); 

(async () => {
    try {
        const db = await mongo.connect("mongodb+srv://mauricio:3052223356@cluster0.ikpizk8.mongodb.net/midulceonline?retryWrites=true&w=majority"); 
        console.log("Conexión establecida en: " + db.connection.name); 
    } catch (error) {
        console.error(error); 
    }
})(); 
