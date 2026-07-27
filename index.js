require('dotenv').config();

const express = require("express");
const authRoutes = require("./routes/auth/authRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "¡Servidor Express corriendo correctamente!" });
});

app.use("/auth", authRoutes);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
