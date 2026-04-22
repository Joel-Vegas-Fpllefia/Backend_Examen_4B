const saludar = (req, res) => {
  res.status(200).json({
    Message: "HOLA CARLOS ERES ADMIN",
  });
};

export { saludar };
