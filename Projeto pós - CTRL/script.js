let number = []
var limite = 9
let pc = Math.random (0,101)
var num_usuario = 0
var erros = 0
var limite_erros = 10
var qtd_num = 0
let botao = document.getElementById ('botao')


for (let i = 1; i <= limite; i++) {
    let computador = document.getElementById ('computador').innerHTML =`Você está na tentativa ${erros}º!`
    setTimeout(1000)
    clicar.addEventListener ('click', botao)
    let usuario = document.getElementById('usuario')
    if (clicar) {
        computador.innerHTML = `Digite um número`
    }
}