const prompt = require("prompt-sync")()
const {criarAutor} = require("./autor/criarAutor")
const {criarLivros} = require("./livros/criarLivro")
const {listarAutores} = require("./autor/listarAutor")
const {listarLivros} = require("./livros/listarLivro")

const autor1 = criarAutor("Gabriel", "gabriel@gmail.com")
const autor2 = criarAutor("Joaozin","joaozin@gmail.com")
criarLivros("Livro De Zezinho", autor1, "12345")
criarLivros("Livro De Joaozin", autor2, "12346")

listarAutores()
listarLivros()