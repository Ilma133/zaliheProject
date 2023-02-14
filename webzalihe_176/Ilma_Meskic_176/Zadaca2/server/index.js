import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

import Connection from "./database/db.js";
import Routes from "./routes/route.js";
import ZaposlenikRoutes from "./routes/zaposlenikruta.js";
import SirovinaRoutes from "./routes/sirovinaruta.js";
import KorisnikRoutes from "./routes/korisnikruta.js";
import ProizvodniProcesRoutes from "./routes/proizvodniprocesruta.js";
import ProcesRoutes from './routes/procesruta.js';
import LoginRoutes from "./routes/loginruta.js";

const app = express();

dotenv.config();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/", Routes);
app.use("/zaposlenici", ZaposlenikRoutes);
app.use("/sirovine", SirovinaRoutes);
app.use("/korisnici", KorisnikRoutes);
app.use("/proizvodniprocesi", ProizvodniProcesRoutes);
app.use('/procesi', ProcesRoutes);
app.use("/auth", LoginRoutes);
//app.use('/login', LoginRoutes);

const PORT = 8000;

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);

app.listen(PORT, () =>
  console.log(`Server is running successfuly on PORT ${PORT}`)
);
