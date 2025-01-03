const mongoose = require("mongoose");

const DBConnection = () => {
  mongoose
    .connect(
      "mongodb+srv://netflix:netflix%40123@cluster0.cnzhp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/NetflixData"
    )
    .then(() => {
      console.log("DB Connected");
    })
    .catch((error) => {
      console.log("DB Not Connected" + error);
    });
};

module.exports = DBConnection;
