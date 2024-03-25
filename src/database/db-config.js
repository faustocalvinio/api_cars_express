const mongoose = require("mongoose");

const dbConnection = async () => {
   try {
      await mongoose.connect(process.env.ENV_MONGODB_CONNECTION_STRING, {
         useNewUrlParser: true,
         useUnifiedTopology: true,
      });
      console.log("Base de datos en linea");
   } catch (error) {
      console.log(error);
      console.log(process.env.ENV_MONGODB_CONNECTION_STRING);
      throw new Error(
         `Error al iniciar la base de datos ${process.env.ENV_MONGODB_CONNECTION_STRING}`
      );
   }
};

module.exports = {
   dbConnection,
};