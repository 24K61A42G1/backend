const express = require("express");
const cors = require("cors");
constdns=require("dns")
dns.setServers(["8.8.8.8","8.8.4.4"])

const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

const movieRoutes = require(
  "./routes/movieRoutes"
);

app.use("/api/movies", movieRoutes);

app.listen(5001, () => {
  console.log(
    "Server running on port 5001"
  );
});
