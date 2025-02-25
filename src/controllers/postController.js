const Post = require("../models/Post");
const PostList = require("../models/PostList");
const lista = new PostList();

lista.addPost(new Post(10, "Primeiro comentário", 5, ["imagem1.jpg"]));
lista.addPost(new Post(20, "Segundo comentário", 10, ["imagem2.jpg"]));

lista.addPost(new Post(15, "Terceiro comentário", 7, ["imagem3.jpg"]));
lista.addPost(new Post(25, "Quarto comentário", 12, ["imagem4.jpg"]));

const router = {
  getAllPosts: (req, res) => {
    res.json(lista.getAllPosts());
  },

  getPostById: (req, res) => {
    try {
      res.json(lista.getPostById(req.params.id));
    } catch (error) {
      res.status(404).json({ message: "Post não encontrado", error });
    }
  },

  addPost: (req, res) => {
    try {
      const { likes, comentarios, compartilhamentos, imagens } = req.body;
      if (likes === undefined || !comentarios || compartilhamentos === undefined || !imagens) {
        throw new Error("Todos os campos são obrigatórios");
      }
      const newPost = new Post(likes, comentarios, compartilhamentos, imagens);
      lista.addPost(newPost);
      res.status(201).json(newPost);
    } catch (error) {
      res.status(400).json({ message: error.message, error });
    }
  },

  updatePost: (req, res) => {
    try {
      res.json(lista.updatePost(req.params.id, req.body));
    } catch (error) {
      res.status(404).json({ message: "Erro ao atualizar o post", error });
    }
  },

  deletePost: (req, res) => {
    lista.deletePost(req.params.id);
    res.status(200).json({ message: "Post deletado com sucesso", IdDeletado: req.params.id });
  }
};

module.exports = router;