const connectToMongo = require("./db");
const express = require("express");
connectToMongo();

const app = express();
const port = 5002;


//to use req.body, we use a middleware
app.use(express.json())

app.get("/", (req, res) => {
  res.send("Hello World!");
});
//Availabe routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
