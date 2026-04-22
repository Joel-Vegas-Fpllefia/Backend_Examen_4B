import Usuarios from "../model/Usuarios.js";
import jwt from "jsonwebtoken";

const create_user = async (req, res) => {
  try {
    const { nom, password } = req.body;
    if (!nom || !password) {
      res.status(400).json({
        error: "Los campos de nombre y password son obligatorios",
      });
    }

    const usuari = await Usuarios.create({
      nom,
      password,
    });

    const token = jwt.sign({ id: usuari.id }, process.env.JWT_SECRET);

    res.status(201).json({
      token,
      usuari,
    });
  } catch (err) {
    res.status(400).json({
      error: err.message,
    });
  }
};


export {create_user}