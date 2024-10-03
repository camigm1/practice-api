const express = require("express");
const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

//__dirname - start looking from current server

const artists = {
  "brandon boyd": {
    name: "Brandon Boyd",
    birthdate: "1976-02-15",
    band: "Incubus",
  },
  victoria: {
    birthdate: "testing",
    band: "Beach House",
  },
  unknown: {
    birthdate: "testing",
    band: "unknown",
  },
};

app.get("/api/:name", (req, res) => {
  const artistName = req.params.name.toLowerCase();
  if (artists[artistName]) {
    res.json(artists[artistName]);
  } else {
    res.json(artists["unknown"]);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}, better go catch it!`);
});

//Only responding with JSON for now
//Download desktop agent on postman if you want to run localhost
