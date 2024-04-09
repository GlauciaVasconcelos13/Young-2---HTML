//COMO IDENTIFICAR ELEMENTOS DA TELA
const divs =  document.getElementsByTagName ('div') // TAG

const div = document.getElementById ('area') // ID

const div_class = document.getElementsByClassName ('area') // CLASSE



console.log (divs [2]) // MOSTRA UMA LISTA
console.log (div) // MOSTRA UM ELEMENTO
console.log (div_class) // MOSTRA UMA LISTA DAS CLASSES

//ALTERANDO AS PROPRIEDADES DOS ELEMENTOS

div.style.backgroundColor = "purple"

for (var i = 0; i <divs.length; i++)
{
    divs [i].innerText = 'Olá'
    div_class[i].style.backgroundColor = 'purple'
    // divs[i].addEventListener ('click', clicar2)
}

// EVENTOS

div.addEventListener ('click', clicar)
// divs.addEventListener ('click', clicar2)
div.addEventListener ('mouseenter', entrar)
div.addEventListener ('mouseout', sair)
div.addEventListener ('mouseup', clicado)
div.addEventListener ('mousedown', desclicado)
let contador_click = 0;

function clicar ()
{
    div.innerText = 'Tchau'
}

function entrar ()
{
    div.innerText = 'Entraram em mim!'
    div.style.backgroundColor = 'pink'
}

function sair ()
{
    div.innerText = 'Sairam de mim'
    div.style.backgroundColor = 'orange'
}

function clicado ()
{
    div.style.backgroundColor = 'yellow'
    contador_click++
    if (contador_click == 5)
    {
        div.remove ()
    }
}

function desclicado ()
{
    div.style.backgroundColor = 'green'
}
// function clicar2 ()
// {
//     divs.innerText = 'Tchau'
// }