const request = require("request");

const fetchBreedDescription = function (breedName, callback) {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    function (error, response, body) {
      if (error) {
        return callback(error, null);
      }

      const data = JSON.parse(body);
      if (data.length === 0) return callback("not found", null);
      return callback(null, data);
    }
  );
};

module.exports = { fetchBreedDescription };
