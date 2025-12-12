// server.js (CommonJS)
const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // parse GET/POST

let used = false;

app.all("/app", (req, res) => {

  const data = Object.keys(req.query).length ? req.query : req.body;

  const headers = Object.keys(data).join(",") + "\n";
  const row = Object.values(data).join(",") + "\n";

  if (!fs.existsSync("webhook_data.csv")) fs.writeFileSync("webhook_data.csv", headers);

  fs.appendFileSync("webhook_data.csv", row);

  used = false;
  res.redirect("https://www.google.com");
});

app.listen(3000, () => console.log("Webhook server running on http://localhost:3000/app"));