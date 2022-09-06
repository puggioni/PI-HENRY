const { Router } = require("express");
const router = Router();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const {
  getVideogames,
  getVideogameById,
  createVideogame,
} = require("../controllers/videogames.controller");
const { getGenres } = require("../controllers/genre.controller");
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/videogames", getVideogames);
router.get("/videogame/:id", getVideogameById);
router.post("/videogames", createVideogame);

router.get("/genres", getGenres);

module.exports = router;
