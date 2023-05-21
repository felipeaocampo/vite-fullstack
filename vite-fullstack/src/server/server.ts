import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

//GENERAL MIDDLEWARES
app.use(cors());

app.use(`*`, (req, _res, next) => {
  console.log(req.url, `this is the req.url`);
  next();
});

app.get(`/`, (_req, res) => {
  res.status(200).json({ hello: `World!` });
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
