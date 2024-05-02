let elemento = document.getElementById('elemento')

console.log(elemento)

window.addEventListener('resize', redimencionado)

function redimencionado()
{
    let cor = '#' + Math.floor(Math.random() * 16777215).toString(16)
    console.log(cor)   
    elemento.style.backgroundColor = cor
}