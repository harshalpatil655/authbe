const express = require("express");
const { authroute } = require("./routes/authroute.js");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", authroute);

app.listen(7001, () => {
  console.log("Listeninhg on port 7001");
});
