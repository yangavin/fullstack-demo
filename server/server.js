const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.json({
    firstName: "Gavin",
    lastName: "Yan",
  });
});

app.listen(port, () => {
  console.log(`LISTENING AT PORT ${port}`);
});
