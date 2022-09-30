const { Videogame, Genre } = require("../db");
const { getAllVideogames } = require("./data.controllers");
const axios = require("axios");
const { API_KEY } = process.env;

const getVideogames = async (req, res) => {
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
};

const getVideogameById = async (req, res) => {
  const { id } = req.params;
  const videogamesTotal = await getAllVideogames();

  if (id.includes("-")) {
    const videogame = videogamesTotal.find((game) => game.id === id);
    videogame
      ? res.send(videogame)
      : res.status(404).send("No se encontró ningún juego con ese id");
  } else {
    const response = await axios.get(
      `https://api.rawg.io/api/games/${id}?key=${API_KEY}`
    );
    const game = response.data;
    const videogame = {
      id: game.id,
      name: game.name,
      description: game.description_raw,
      released: game.released,
      rating: game.rating,
      platforms: game.platforms
        .map((platform) => platform.platform.name)
        .join(", "),
      genres: game.genres.map((genre) => genre.name).join(", "),
      background_image: game.background_image,
    };
    res.send(videogame);
  }
};

const createVideogame = async (req, res) => {
  const { name, description, released, rating, genres, platforms } = req.body;
  try {
    const videogame = await Videogame.create({
      name,
      description,
      released,
      rating,
      platforms,
    });
    const genresDb = await Genre.findAll({
      where: {
        name: genres.map((genre) => genre),
      },
    });
    videogame.addGenre(genresDb);
    res.status(201).send("Videogame created");
  } catch (error) {
    res.send({ error: error.message });
  }
};

module.exports = {
  getVideogames,
  getVideogameById,
  createVideogame,
};
