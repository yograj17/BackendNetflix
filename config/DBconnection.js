const mongoose = require("mongoose");

const DBConnection = () => {
  mongoose
    .connect(
      "mongodb+srv://yograjpatil777:stCKXtumTav6zRi5@cluster0.ja8l4.mongodb.net/NetflixData"
    )
    .then(() => {
      console.log("DB Connected");
    })
    .catch((error) => {
      console.log("DB Not Connected" + error);
    });
};

module.exports = DBConnection;
