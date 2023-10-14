import cors from "cors";
import config from "./config";
import express, { Application, Request, Response } from "express";
import router from "./routes";
import cookieParser from 'cookie-parser';

const port = config.port;
const app: Application = express();

app.use(cors());
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1", router)

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World! Tiffin-Bati Server Working Perfectly.");
});

app.listen(port, () => {
  console.log(`Tiffin-Bati Server on port ${port}`);
});
