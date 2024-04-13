
const div = document.getElementById ('ex')

const acaodobotao = document.getElementById ('botaodois')

const interação = window.document.getElementById ('rolar')


console.log (div)

//SEPARAR
div.style.backgroundColor = "purple"

//SEPARAR
div.addEventListener ('click', clicar)
div.addEventListener ('mouseout', sair)
div.addEventListener ('mouseenter', entrar)
document.getElementById("rolar").addEventListener("wheel", rolar);

function clicar ()
{
    div.innerText = "Mexa o mouse!"
    alert ('Você clicou na caixa de texto!')
    div.style.backgroundColor = 'deeppink'
}

function sair ()
{
    div.innerText = "Entraaaa"
    div.style.backgroundColor = "deepskyblue"
}

function entrar ()
{
    div.innerText = "Saiiiiii"
    div.style.backgroundColor = "skyblue"
}


function mouseDown ()
{
    alert ('Você pressinou o caixa de texto!')
    div.style.backgroundColor = "pagegreen"
}

function mouseUp ()
{
    div.style.backgroundColor = "rosybrown"
}

function clicar2 ()
{
    alert ('Você clicou duas vezes na caixa de texto!')
    document.getElementById ('duasvezes').innerHTML += "Parabéns"
}

function mouseEnter ()
{
    document.getElementById ('redimi').style.backgroundColor = "yellow"
}

function mouseLeave ()
{
    document.getElementById ('redimi').style.backgroundColor = "aqua"
}

function rolar ()
{
    alert ('Eu vi você rolando a página!')
    interação.style.backgroundColor = "darkgreen"
}

function acao2 ()
{
    document.getElementById ('mensagem').innerHTML += "Você clicou duas vezes no botão!"
}

function selecao ()
{
    alert ('Você selecionou um texto!')
}

// function ondragStart (event)
// {
//     event.dataTransfer.setData ("Text", event.target.id)
// }

