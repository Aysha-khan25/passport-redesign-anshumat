const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose"); 

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/passportDB")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));


const appRoutes = require("./routes/application");
app.use("/", appRoutes);

app.get("/", (req, res) => {
  res.send("API working");
});

app.listen(5000, () => console.log("Server running"));