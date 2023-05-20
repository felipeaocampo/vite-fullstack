import express from "express";

const app = express();
const port = 3000;

app.get(`/`, (_req, res) => {
  res.status(200).send(`All good to go!`);
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
