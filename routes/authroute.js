const express = require("express");
const { db } = require("../config/db.js");
const authroute = express.Router();

authroute.get("/get", (req, res) => {
  res.send("Listening on route");
});

authroute.post("/adduser", (req, res) => {
  const checkuser = "SELECT * FROM userdata WHERE email=?";

  db.query(checkuser, [req.body.email], (err, results) => {
    if (err) {
      res.status(500).send({ Error: err });
    } else {
      if (results.length > 0) {
        res.send("User already exists");
      } else {
        const addquery =
          "INSERT INTO userdata(`aud`, `azp`, `email`, `email_verified`, `exp`, `family_name`, `given_name`, `hd`, `iat`, `iss`, `jti`, `name`, `nbf`, `picture`, `sub`) VALUES (?)";

        const values = [
          req.body.aud,
          req.body.azp,
          req.body.email,
          req.body.email_verified,
          req.body.exp,
          req.body.family_name,
          req.body.given_name,
          req.body.hd,
          req.body.iat,
          req.body.iss,
          req.body.jti,
          req.body.name,
          req.body.nbf,
          req.body.picture,
          req.body.sub,
        ];

        db.query(addquery, [values], (err, results) => {
          if (err) {
            console.log(err);
            res.status(500).send({ ErrorAdd: err });
          } else {
            res.status(200).send(results);
          }
        });
      }
    }
  });
});

module.exports = { authroute };
