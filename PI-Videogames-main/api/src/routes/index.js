const { Router } = require("express");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
const axios = require("axios");
const { Videogame, Genre } = require("../db");
const { API_KEY } = process.env;
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
//const { getAllVideogames } = require("../controllers/index");
const getApiInfo = async () => {
  try {
    console.log();
    const response = await axios.get(
      `https://api.rawg.io/api/games?key=${API_KEY}&page_size=150`
    );
    const apiInfo = response.data.results.map((game) => {
      return {
        previous: game.previous,
        next: game.next,
        id: game.id,
        name: game.name,
        released: game.released,
        rating: game.rating,
        platforms: game.platforms.map((platform) => platform.platform.name),
        genres: game.genres.map((genre) => genre.name),
        background_image: game.background_image,
      };
    });
    return apiInfo;
  } catch (error) {
    return error.message;
  }
};

const getDbInfo = async () => {
  return await Videogame.findAll({
    include: {
      model: Genre,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
};

const getAllVideogames = async () => {
  const apiInfo = await getApiInfo();
  const dbInfo = await getDbInfo();
  const totalInfo = apiInfo.concat(dbInfo);
  return totalInfo;
};

router.get("/videogames", async (req, res) => {
  const { name } = req.query;
  const videogamesTotal = await getAllVideogames();
  try {
    if (name) {
      const videogamesName = videogamesTotal.filter((videogame) =>
        videogame.name.toLowerCase().includes(name.toLowerCase())
      );
      videogamesName.length
        ? res.send(videogamesName)
        : res.status(404).send("No se encontró ningún juego con ese nombre");
    } else {
      res.send(videogamesTotal);
    }
  } catch (error) {
    res.send({ error: error.message });
  }
});
router.get("/videogame/:id", async (req, res) => {
  const { id } = req.params;
  const videogamesTotal = await getAllVideogames();
  try {
    const videogame = videogamesTotal.find((videogame) => videogame.id == id);
    videogame
      ? res.send(videogame)
      : res.status(404).send("No se encontró ningún juego con ese id");
  } catch (error) {
    res.send({ error: error.message });
  }
});
router.post("/videogames", async (req, res) => {
  const {
    name,
    description,
    released,
    rating,
    platforms,
    genres,
    createdInDb,
  } = req.body;
  try {
    const videogame = await Videogame.create({
      name,
      description,
      released,
      rating,
      platforms,
      createdInDb,
    });
    const genresDb = await Genre.findAll({
      where: {
        name: genres,
      },
    });
    videogame.addGenre(genresDb);
    res.status(200).send("Juego creado con éxito");
  } catch (error) {
    res.send({ error: error.message });
  }
});

router.get("/genres", async (req, res) => {
  try {
    const genresApi = await axios.get(
      `https://api.rawg.io/api/genres?key=${API_KEY}`
    );
    const genres = genresApi.data.results.map((genre) => {
      return {
        id: genre.id,
        name: genre.name,
      };
    });
    genres.forEach((el) => {
      Genre.findOrCreate({
        where: {
          name: el.name,
        },
      });
    });
    const allGenres = await Genre.findAll();
    res.status(200).send(allGenres);
  } catch (error) {
    res.send({ error: error.message });
  }
});

module.exports = router;
