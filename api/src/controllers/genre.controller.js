const { API_KEY } = process.env;
const axios = require("axios");
const { Genre } = require("../db");

const getGenres = async (req, res) => {
  try {
    const genresApi = await axios.get(
      `https://api.rawg.io/api/genres?key=8ffe28d1255b4c808087052bef21f939`
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
    res.status(200).json(allGenres);
  } catch (error) {
    res.send({ error: error.message });
  }
};

module.exports = {
  getGenres,
};
