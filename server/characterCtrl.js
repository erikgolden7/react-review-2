const axios = require("axios");

module.exports = {
  getCharacters(req, res) {
    axios
      .get(`https://swapi.co/api/people`)
      .then(res => {
        console.log(res);

        return res.status(200).send(res.data);
      })
      .catch(err => res.status(500).send(err));
  }
};
