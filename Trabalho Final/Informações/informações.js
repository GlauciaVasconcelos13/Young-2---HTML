const TITULO = document.querySelector ('.titulo')
const LISTA1 = document.querySelector ('.lista1')
const LISTA2 = document.querySelector ('.lista2')
const LISTA3 = document.querySelector ('.lista3')
const LISTA4 = document.querySelector ('.lista4')
const LISTA5 = document.querySelector ('.lista5')
const BOTAO = document.querySelector ('.botao')

BOTAO.addEventListener ('click', salvar_dados)

function salvar_dados () {
    localStorage.setItem ('TITULO', TITULO.value )
    localStorage.setItem ('LISTA1', LISTA1.value)
    localStorage.setItem ('LISTA2', LISTA2.value)
    localStorage.setItem ('LISTA1', LISTA3.value)
    localStorage.setItem ('LISTA1', LISTA4.value)
    localStorage.setItem ('LISTA1', LISTA5.value)
    localStorage.setItem ('BOTAO', BOTAO.value)
}
