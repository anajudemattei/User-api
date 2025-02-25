const { v4: uuid4 } = require('uuid');
class Post {
    constructor(likes, comentarios, compartilhamentos, imagens) {
        this.id = Date.now().toString();
        this.likes = likes;
        this.comentarios = comentarios;
        this.compartilhamentos = compartilhamentos;
        this.imagens = imagens;
    }
}

module.exports = Post;