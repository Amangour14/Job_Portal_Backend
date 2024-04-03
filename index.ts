import express, { Response, Request } from "express";
import db from "./src/models";
import routes from "./src/routes";
import cors from "cors";

const app = express();
app.use(cors());
const port = process.env.Port ?? 8080;

app.use(express.json());
app.use(routes);

db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`App Listening on Port ${port}`);
  });
});
