constexpress = require("express");
constserverless = require("serverless-http");
constapp = express();
constcors = require("cors");
constrouter = express.Router();
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
