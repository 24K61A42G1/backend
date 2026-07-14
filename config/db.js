const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://charantejasunkara24_db_user:BQDXve11e73wmInl@cluster0.j9ezhho.mongodb.net/charan"
    );

    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
