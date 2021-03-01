const express = require("express");
const app = express();
const path = require("path");
const morgan = require("morgan");
var exphbs = require("express-handlebars");
const { static } = require("express");
// config
const port = 3000;
// midleware
app.use(express.static(path.join(__dirname, "public")));
app.use(morgan("combined"));
app.engine(".hbs", exphbs({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "resources/views"));
console.log(__dirname);
//
app.get("/", (req, res) => {
  res.render("home");
});
app.listen(port, () => {
  console.log(`example app listening at http://localhost:${port}`);
});
