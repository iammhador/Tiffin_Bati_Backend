import cors from "cors";
import config from "./config";
import express, { Application, Request, Response } from "express";

const port = config.port;
const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World! Tiffin-Bati Server Working Perfectly.");
});

app.listen(port, () => {
  console.log(`Tiffin-Bati Server on port ${port}`);
});
