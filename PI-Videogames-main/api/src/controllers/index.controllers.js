const axios = require("axios");
const { Videogame, Genre } = require("../db");
const { API_KEY } = process.env;

const getApiInfo = async () => {
  try {
    console.log();
    const response = await axios.get(
      `https://api.rawg.io/api/games?key=${API_KEY}&page_size=100`
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

module.exports = {
  getAllVideogames,
};
