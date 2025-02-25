require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const postRoutes = require("./src/routes/postRoutes");
const usersRoutes = require("./src/routes/usersRoutes");

app.use("/api/posts", postRoutes);
app.use("/api/users", usersRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
