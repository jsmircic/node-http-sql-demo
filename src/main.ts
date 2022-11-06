import http, { RequestListener } from "http";
import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

const host = process.env.host || "localhost";
const port = Number(process.env.port) || 4000;

const requestListener: RequestListener = async (req, res) => {
  //dohvat prvog zapisa BussPart tablice
  const bp = await prisma.bussPart.findFirst();

  //vrati dohvaćen zapis kao JSON u http response
  res.setHeader("Content-Type", "application/json");
  res.writeHead(200);

  res.end(JSON.stringify(bp));
};

//kreiranje http servera
const server = http.createServer(requestListener);

//start servera
server.listen(port, host, async () => {
  console.log(`Server is running on http://${host}:${port}`);
});
