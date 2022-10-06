const { Router } = require("express");
const router = Router();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const {
  getVideogames,
  getVideogameById,
  createVideogame,
  deleteVideogame,
  getVideogames2,
} = require("../controllers/videogames.controller");
const { getGenres } = require("../controllers/genre.controller");
const { platforms } = require("../controllers/platform.controller");
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/videogame/:id", getVideogameById);
router.delete("/videogame/:id", deleteVideogame);
router.get("/videogames", getVideogames);
router.get("/genres", getGenres);
router.get("/platforms", platforms);
router.post("/videogames", createVideogame);
router.get("/videogames/prueba/:param", getVideogames2);

module.exports = router;
