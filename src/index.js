const express = require("express");
const mascotasRoutes = require("./routes/mascotas.routes");

const app = express();
const PORT = 3000;

//Middleware para procesar json en el cuerpo de la peticion
app.use(express.json());

//Usar las rutas definidas
app.use("/api",mascotasRoutes);

app.listen(PORT, () => {
    console.log('Servidor escuchando en http://localhost:${PORT}');
});