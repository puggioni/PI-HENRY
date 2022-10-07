const { API_KEY } = process.env;
const axios = require("axios");

const platforms = async (req, res) => {
  var apiresult = await axios.get(
    `https://api.rawg.io/api/platforms/lists/parents?key=8ffe28d1255b4c808087052bef21f939`
  );
  var apivgplat = apiresult.data.results.map((p) => {
    return {
      id: p.id,
      name: p.name,
    };
  });
  res.send(apivgplat);
};
module.exports = {
  platforms,
};
