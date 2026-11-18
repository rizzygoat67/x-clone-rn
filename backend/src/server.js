// PUT THIS AT THE VERY TOP OF THE FILE
import dns from "node:dns/promises";
dns.setServers(["1.1.1.1", "8.8.8.8"]);

import express from "express";
import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js";

const app = express();

connectDB();

app.get("/", (req, res) => res.send("Hello from server"));

app.listen(ENV.PORT, () => console.log("Server is up and running on PORT:", ENV.PORT));
