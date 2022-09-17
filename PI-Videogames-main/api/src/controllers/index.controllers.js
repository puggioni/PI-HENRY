const axios = require("axios");
const { Videogame, Genre } = require("../db");
const { API_KEY } = process.env;

const getApiInfo = async () => {
  try {
    const response1 = axios
      .get(`https://api.rawg.io/api/games?key=${API_KEY}&page_size=20&page=1`)
      .then((res) => res.data.results);
    const response2 = axios
      .get(`https://api.rawg.io/api/games?key=${API_KEY}&page_size=40&page=2`)
      .then((res) => res.data.results);
    const response3 = axios
      .get(`https://api.rawg.io/api/games?key=${API_KEY}&page_size=40&page=3`)
      .then((res) => res.data.results);
    const apiInfo = await Promise.all([response1, response2, response3]);
    const videogames = apiInfo.flat().map((game) => {
      return {
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
    });

    return videogames;
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

module.exports = {
  getAllVideogames,
};
