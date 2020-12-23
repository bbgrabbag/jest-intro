const express = require("express");

const app = express();

app.use(express.json());

app
  .route("/ping")
  .get((req, res) => {
    res.status(200).send({ message: "pong" });
  })
  .post((req, res) => {
      res.status(201).send({message: `data created`});
  });

  module.exports = {
      app
  }
