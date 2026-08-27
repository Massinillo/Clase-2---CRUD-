const { Router } = require("express");
//const { obtenerLibros, obtenerLibrosPorId, crearLibro, actualizarLibro, eliminarLibro }= require("../controllers/mascotas.controller");
const { crearMascota, obtenerMascotaPorId, actualizarMascota, eliminarMascota,obtenerMascotas }= require("../controllers/mascotas.controller");

const router = Router();

/*
router.get("/libros", obtenerLibros);
router.get("/libros/:id", obtenerLibrosPorId);
router.post("/libros", crearLibro);
router.put("/libros/:id", actualizarLibro);
router.delete("/libros/:id", eliminarLibro);
*/
router.post("/mascotas", crearMascota);
router.get("/mascotas/:id", obtenerMascotaPorId);
router.get("/mascotas", obtenerMascotas);
router.put("/mascotas/:id", actualizarMascota);
router.delete("/mascotas/:id", eliminarMascota);

module.exports = router;