let Animales = [
  {
    id: "1",
    nom: "Sofi",
    raza: "chihuahua ",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8y5_hCarezEf-i6FUdB_wn4XOxlFf0B1ST0OwPYaJShE3Ehuec5AFO-rP35hbVnbsNH14ZR3AklGp1vbvmTz5BZmncAnnkcYNB8GvgKiQ&s=10",
  },
  {
    id: "2",
    nom: "Cokie",
    raza: "PidBull",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8y5_hCarezEf-i6FUdB_wn4XOxlFf0B1ST0OwPYaJShE3Ehuec5AFO-rP35hbVnbsNH14ZR3AklGp1vbvmTz5BZmncAnnkcYNB8GvgKiQ&s=10",
  },
];

// MOSTRAR TODOS LOS ANIMALES
const get_animales = (req, res) => {
  res.json({
    total: Animales.length,
    dades: Animales,
  });
};

// MOSTRAR ANIMALES POR ID
const get_animales_id = (req, res) => {
  const { id } = req.params;
  const animal = Animales.find((c) => c.id === id);
  if (animal === -1) {
    return res.status(404).json({
      error: "Animal no encontrado",
    });
  }
  res.json(animal);
};

// CREAR MASCOTA
const create_animales = (req, res) => {
  const { nom, raza, foto } = req.body;
  const id = String(Animales.length + 1);

  const nova = { id, nom, raza, foto };
  Animales.push(nova);
  res.status(201).json(nova);
};

// EDITAR MASCOTA
const update_animales = (req, res) => {
  const { id } = req.params;
  const index = Animales.findIndex((c) => c.id === id);
  if (index === -1) {
    return res.status(404).json({
      error: "Animal no encontrado",
    });
  }
  Animales[index] = { ...Animales[index], ...req.body, id };
  res.json(Animales[index]);
};

const delete_animal = (req, res) => {
  const { id } = req.params;
  const index = Animales.findIndex((c) => c.id === id);
  if (index === -1) {
    return res.status(404).json({
      error: "Animal no encontrado",
    });
  }
  Animales.splice(index, 1);
  res.status(204).send();
};
export { get_animales, get_animales_id, create_animales, update_animales,delete_animal };
