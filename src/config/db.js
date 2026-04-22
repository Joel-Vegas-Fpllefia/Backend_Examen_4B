import mongoose from "mongoose";
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB);
    console.log("BASE DE DATOS DE MONGOOSE CONECTADA CON EXITO");
  } catch (err) {
    console.log("Error al conectarse a la DB: ", err.message);
    process.exit(1);
  }
};


export default connectDB