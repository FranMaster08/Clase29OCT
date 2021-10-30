const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", require("./router"));


app.listen(3000, () => {
  console.log("listening on " + 3000);
});
