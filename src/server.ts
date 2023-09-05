import express, { Request, Response } from "express";
import { setTimeout } from "timers/promises";
const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  console.log("headers", req.headers);
  res.send(req.headers);
});

app.get("/too-bad.js", async (req: Request, res: Response) => {
  await setTimeout(10000);
  res.set("Content-Type", "text/javascript");
  res.send("console.log('too bad.js')");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
