import Animales from "../model/Animales.js";

const get_animales = async (req, res) => {
  try {
    const dades = await Animales.find().sort({ createdAt: -1 });
    res.status(200).json({
      total: dades.length,
      dades: dades,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

const get_animales_id = async (req, res) => {
  try {
    const animal = await Animales.findById(req.params.id);
    if (!animal) {
      return res.status(404).json({
        error: "no se ha encontrado el animal",
      });
    }

    res.json(animal);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

const create_animales = async (req, res) => {
  try {
    const nova = await Animales.create(req.body);
    res.status(201).json(nova);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

const update_animales = async (req, res) => {
  const { id } = req.params;
  try {
    const updated_animal = await Animales.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updated_animal) {
      return res.status(404).json({
        error: "No se ha encontrado la mascota indicada",
      });
    }
    res.json(update_animal);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

const delete_animal = async (req, res) => {
  const { id } = req.params;
  try {
    const eliminada = await Animales.findByIdAndDelete(id);
    if (!eliminada) {
      return res.status(404).json({
        error: "no se ha encontrado a la Mascota en la DB",
      });
    }
    res.status(204).send();
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};
// let Animales = [
//   {
//     id: "1",
//     nom: "Sofi",
//     tipus: "perro",
//     raza: "chihuahua ",
//     foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8y5_hCarezEf-i6FUdB_wn4XOxlFf0B1ST0OwPYaJShE3Ehuec5AFO-rP35hbVnbsNH14ZR3AklGp1vbvmTz5BZmncAnnkcYNB8GvgKiQ&s=10",
//   },
//   {
//     id: "2",
//     nom: "Cokie",
//     tipus: "perro",
//     raza: "PidBull",
//     foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8y5_hCarezEf-i6FUdB_wn4XOxlFf0B1ST0OwPYaJShE3Ehuec5AFO-rP35hbVnbsNH14ZR3AklGp1vbvmTz5BZmncAnnkcYNB8GvgKiQ&s=10",
//   },
// ];

// // MOSTRAR TODOS LOS ANIMALES
// const get_animales = (req, res) => {
//   res.json({
//     total: Animales.length,
//     dades: Animales,
//   });
// };

// // MOSTRAR ANIMALES POR ID
// const get_animales_id = (req, res) => {
//   const { id } = req.params;
//   const animal = Animales.find((c) => c.id === id);
//   if (animal === -1) {
//     return res.status(404).json({
//       error: "Animal no encontrado",
//     });
//   }
//   res.json(animal);
// };

// // CREAR MASCOTA
// const create_animales = (req, res) => {
//   const { nom, raza, tipus, foto } = req.body;
//   const id = String(Animales.length + 1);

//   const nova = { id, nom, tipus, raza, foto };
//   Animales.push(nova);
//   res.status(201).json(nova);
// };

// // EDITAR MASCOTA
// const update_animales = (req, res) => {
//   const { id } = req.params;
//   const index = Animales.findIndex((c) => c.id === id);
//   if (index === -1) {
//     return res.status(404).json({
//       error: "Animal no encontrado",
//     });
//   }
//   Animales[index] = { ...Animales[index], ...req.body, id };
//   res.json(Animales[index]);
// };

// const delete_animal = (req, res) => {
//   const { id } = req.params;
//   const index = Animales.findIndex((c) => c.id === id);
//   if (index === -1) {
//     return res.status(404).json({
//       error: "Animal no encontrado",
//     });
//   }
//   Animales.splice(index, 1);
//   res.status(204).send();
// };
export {
  get_animales,
  get_animales_id,
  create_animales,
  update_animales,
  delete_animal,
};
