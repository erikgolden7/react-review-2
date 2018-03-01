const express = require("express");
const cors = require("cors");
const { json } = require("body-parser");
const charCtrl = require("./characterCtrl");

const app = express();

app.use(json());
// app.use(express.static("./public/index.html"));
app.use(cors());

// app.get("api/people", charCtrl.getCharacters);
// app.get("/api/people", charCtrl.getCharacters);

// app.get("/api/people", charCtrl.getCharacters);
// app.get("https://swapi.co/api/people", (req, res) => {
//   res.json(response);
// });

app.listen(3001, () => {
  console.log("listening to port 3001");
});
