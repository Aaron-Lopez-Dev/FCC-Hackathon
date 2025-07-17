import https from "https";
import fs from "fs";
import { env } from "./config/env";
import { createApp } from "./app";
import routes from "./routes";

import { Response, Request} from 'express'
import { PrismaClient } from "../generated/prisma";
const prisma = new PrismaClient();


const app = createApp();
const key = fs.readFileSync("certs/key.pem");
const cert = fs.readFileSync("certs/cert.pem");

app.get("/get-trade-statuses", async(req:Request, res: Response) => {
  const allStatuses = await prisma.tradeRequestStatuses.findMany();
  res.json(allStatuses)
})

app.get("/get-swap-statuses", async(req: Request, res: Response)=>{
  const allStatuses = await prisma.swapStatuses.findMany();
  res.json(allStatuses)
})


https
  .createServer({ key, cert }, app)
  .listen(env.PORT, () =>
    console.log(`API running at https://localhost:${env.PORT}`)
  );
