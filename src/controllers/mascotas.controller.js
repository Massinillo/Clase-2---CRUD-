
/*let libros = [
    {id: 1, titulo: "Cien años de soledad", autor: "Gabriel Garcia Marquez" }
];*/

let mascotas = [
    {id: 1, nombre: "Cien años de soledad", especie: "Perro", edad: 3, adoptado: false }
];

/*const obtenerLibros = (req, res) =>{
    res.json(libros);
};*/

const obtenerMascotas = (req, res) =>{
    res.json(mascotas);
};


/*const obtenerLibrosPorId = (req,res) =>{
    const id = parseInt(req.param.id);
    const libro = libros.find((b)=> b.id === id);

    if (!libro){
        return res.status(404).json({mensaje: "Libro no encontrado"});
    }

    res.json(libro);
};*/
const obtenerMascotaPorId = (req,res) =>{
    const id = parseInt(req.params.id);
    const mascota = mascotas.find((b)=> b.id === id);

    if (!mascota){
        return res.status(404).json({mensaje: "Mascota no encontrada"});
    }

    res.json(mascota);
};

/*-----------------------------------------------------*/
/*const crearLibro = (req,res)=>{
    const {titulo,autor} = req.body;

    if(!titulo || !autor){
        return res.status(400).json({ mensaje: "Titulo y autor son obligatorios" });
    }

    const nuevoLibro = {
        id: libros.length >0 ? libros[libros.length-1].id + 1 : 1,
        titulo,
        autor
    };

    libros.push(nuevoLibro);
    res.status(201).json(nuevoLibro);
};*/

const crearMascota = (req, res) => {
    const { nombre, especie, edad, adoptado } = req.body;

    if (!nombre || !especie || !edad) {
        return res.status(400).json({ mensaje: "Nombre, edad y especie son obligatorios" });
    }

    const nuevaMascota = {
        id: mascotas.length > 0 ? mascotas[mascotas.length - 1].id + 1 : 1,
        nombre,
        especie,
        edad,
        adoptado: adoptado !== undefined ? adoptado : false // Valor por defecto
    };

    mascotas.push(nuevaMascota);
    res.status(201).json(nuevaMascota);
};

/*--------------------------------------------------*/
/*const actualizarLibro = (req,res)=>{
    const id = parseInt(req.param.id);
    const { titulo, autor} = req.body;

    const index= libros.findIndex((b) => b.id === id);

    if (index===-1){
        return res.status(404).json({ mensaje: "Libro no encontrado"});
    }

    libros[index] ={
        ...libros[index],
        titulo: titulo || libros[index].titulo,
        autor: autor || libros[index].autor
    };

    res.json(libros[index]);
};*/

const actualizarMascota = (req,res)=>{
    const id = parseInt(req.params.id);
    const { nombre, especie, edad, adoptado} = req.body;

    const index= mascotas.findIndex((b) => b.id === id);

    if (index===-1){
        return res.status(404).json({ mensaje: "Mascota no encontrada"});
    }

    mascotas[index] ={
        ...mascotas[index],
        nombre: nombre || mascotas[index].nombre,
        especie: especie || mascotas[index].especie,
        edad: edad || mascotas[index].edad,
        adoptado: adoptado || mascotas[index].adoptado,
    };

    res.json(mascotas[index]);
};

/*--------------------------------------*/
/*const eliminarLibro = (req,res) =>{
    const id = parseInt(req.param.id);
    const index = libros.findIndex((b) => b.id === id);

    if (index === -1){
        return res.status(404).json({ mensaje: "Libro no encontrado"});
    }

    libros = libros.filter((b) => b.id === id);
    res.json({ mensjae: "Libro eliminado correctamente"});
};*/

const eliminarMascota = (req,res) =>{
    const id = parseInt(req.params.id);
    const index = mascotas.findIndex((b) => b.id === id);

    if (index === -1){
        return res.status(404).json({ mensaje: "Mascota no encontrada"});
    }

    mascotas = mascotas.filter((b) => b.id !== id);
    res.json({ mensjae: "Mascota eliminada correctamente"});
};

//module.exports = {obtenerLibros,obtenerLibrosPorId,crearLibro,actualizarLibro,eliminarLibro};
module.exports = {crearMascota, obtenerMascotaPorId, actualizarMascota, eliminarMascota,obtenerMascotas};
