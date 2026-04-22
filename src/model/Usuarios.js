import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const usuarioSchema = new mongoose.Schema(
  {
    nom: {
      type: String,
      required: [true, "El nombre debe ser obligatorio"],
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "La contraseña debe ser obligatoria"],
      select: false,
    },
    rol: {
      type: String,
      enum: ["usuari", "admin"],
      default: "admin",
    },
  },
  {
    timestamps: true,
  },
);

usuarioSchema.pre("save", async function () {
  if (!this.isModified("password")) return;

  try {
    this.password = await bcrypt.hash(this.password, 10);
  } catch (err) {
    throw new Error(err);
  }
});

usuarioSchema.methods.comprovarPassword = function (candidat) {
  return bcrypt.compare(candidat, this.password);
};

export default mongoose.model("Usuario", usuarioSchema);
