const connectToMongo = require("./db");
const express = require("express");
var cors = require("cors");
connectToMongo();

const app = express();
const port = 5002;

app.use(cors());
//to use req.body, we use a middleware
app.use(express.json())

app.get("/", (req, res) => {
  res.send("Hello World!");
});
//Availabe routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`iNotebook app listening on port ${port}`);
});
