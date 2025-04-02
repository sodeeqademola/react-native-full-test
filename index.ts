import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(express.json({ limit: "10mb" }));
app.use(cors());
app.use(express.urlencoded({ limit: "10mb" }));
import dotenv from "dotenv";
import connect from "./connect";
import route from "./route";
import job from "./cron";

job.start();

dotenv.config();

connect();

app.use("/api", route);

app.get("/", (req: Request, res: Response) => {
  res.status(201).send("alhamdulilah");
});

app.listen(4000, () => {
  console.log("connected to port " + 4000);
});
