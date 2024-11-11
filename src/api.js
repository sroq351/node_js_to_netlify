const express = require("express");
const serverless = require("serverless-http");
const app = express();
const cors = require("cors");
const router = express.Router();
app.use(cors());
router.get("/", (req, res) => {
  res.send("App is running..");
});
router.get("/test", (req, res) => {
  res.json([
    {
      id: "1",
      name: "Test",
    },
  ]);
});
app.use("/.netlify/functions/api", router);
module.exports.handler = serverless(app);
