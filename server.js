const express = require("express");
const cors = require("cors");
const dns = require("node:dns"); // or require("dns")

dns.setServers(["8.8.8.8", "8.8.4.4"]);

const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

const movieRoutes = require("./routes/movieRoutes");

app.use("/api/movies", movieRoutes);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
