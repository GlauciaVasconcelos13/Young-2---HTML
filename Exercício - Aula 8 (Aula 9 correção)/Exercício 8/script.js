let elemento = document.getElementById('elemento')

elemento.addEventListener('focus', focado)
elemento.addEventListener('blur', desfocado)

function focado()
{
    elemento.classList.add('focado')
}

function desfocado()
{
    elemento.classList.remove('focado')
}