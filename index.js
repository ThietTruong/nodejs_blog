const expres = require("express");
const app = expres();
const port = 3000;
app.get("/", (req, res) => {
  return res.send("123");
});
app.listen(port, () => {
  console.log(`example app listening at http://localhost:${port}`);
});
