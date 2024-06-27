const TITULO = document.querySelector ('.titulo')
const LISTA = document.querySelector ('lista')
const BOTAO = document.querySelector ('.botao')

BOTAO.addEventListener ('click', salvar_dados)

function salvar_dados () {
    localStorage.setItem ('TITULO', TITULO.value )
    localStorage.setItem ('LISTA', LISTA.value)
    localStorage.setItem ('BOTAO', BOTAO.value)
}
