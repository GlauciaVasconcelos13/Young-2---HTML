const FOTO = document.querySelector ('.foto')
const GITHUB = document.querySelector ('.github')
const INSTAGRAM = document.querySelector ('.instagram')
const EMAIL = document.querySelector ('.email')
const TITULO= document.querySelector ('.titulo')
const TEXTO = document.querySelector ('.texto')
const BOTAO = document.querySelector ('.botao')

botao.addEventListener ('click', salvar_dados)

function salvar_dados () {
    localStorage.setItem ('FOTO', FOTO.value)
    localStorage.setItem ('GITHUB', GITHUB.value)
    localStorage.setItem ('INSTAGRAM', INSTAGRAM.value)
    localStorage.setItem ('EMAIL', EMAIL.value)
    localStorage.setItem ('TITULO', TITULO.value)
    localStorage.setItem ('TEXTO', TEXTO.value)
}