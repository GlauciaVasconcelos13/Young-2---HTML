let botao = document.getElementById ('botao')

botao.addEventListener ('click', clicado)


function clicado ()
{
    var input = document.getElementById ('input').value
    window.document.body.style.backgroundColor = input
    botao.style.backgroundColor = input
}

