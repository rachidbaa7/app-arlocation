const mongoose = require("mongoose");

mongoose
    .connect(
        "mongodb+srv://" + process.env.DB_USER_PASS + "@cluster0.rcmbt.mongodb.net/ahlam", /*on peut changer test avec le nom de notre database*/ {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        }
    )
    .then(() => console.log("Connection a MongoDB")) //on a relier notr back avec mongo compass
    .catch((err) => console.log("erreur de cnx a mongodb", err));   // au cas d'erreur