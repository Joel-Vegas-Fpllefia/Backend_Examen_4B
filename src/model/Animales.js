import mongoose from "mongoose";

const Animales = new mongoose.Schema(
  {
    nom: {
      type: String,
      required: [true, "Campo nombre es obligatorio"],
      trim: true,
    },
    tipus: {
      type: String,
      trim: true,
      enum: ["perro", "gato", "otro"],
    },
    raza: {
      type: String,
      default: "chihuahua",
    },
    foto: {
      type: String,
      default:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8y5_hCarezEf-i6FUdB_wn4XOxlFf0B1ST0OwPYaJShE3Ehuec5AFO-rP35hbVnbsNH14ZR3AklGp1vbvmTz5BZmncAnnkcYNB8GvgKiQ&s=10",
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Animales", Animales);
