import jwt from "jsonwebtoken";
import Usuarios from "../model/Usuarios.js";
import "dotenv/config";

const protegir = async (req, res, next) => {
  let token = null;

  if (req.headers.authorization?.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return res.status(401).json({
      error: "Token absent",
    });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.usuari = await Usuarios.findById(decoded.id);

    if (!res.usuari) {
      return res.status(401).json({
        error: "Usuario No Valido",
      });
    }

    next();
  } catch (err) {
    return res.status(401).json({ error: "Token no valido" });
  }
};


const autorizar = (...rols) => {
    return (req,res,next) => {
        if(!req.usuari){
            return res.status(401).json({
                error: "Usuario no valido"
            })
        }

        if(!rols.includes(req.usuari.rol)){
            return res.status(403).json({
                error:"No tienes permisos"
            })
        }

        next()
    }
}

export {protegir,autorizar}