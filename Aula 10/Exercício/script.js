let pergunta = window.prompt ('Digite seu número: ')
let input = document.getElementById ('valornumero')
let botao3 = document.getElementById ('avançar')
let botao2 = document.getElementById ('voltar0')
let botao = document.getElementById ('voltar')
let resposta = pergunta

input.innerText = `O número que você digitou é: ${pergunta}`


botao3.addEventListener ('click', avançar)
botao2.addEventListener ('click', voltar0)
botao.addEventListener ('click', voltar)

function avançar ()
{
    pergunta++
    input.textContent = `O número que você digito é: ${pergunta}`
    input.style.backgroundColor = "yellowgreen"
}

function voltar0 ()
{
    pergunta = resposta
    input.textContent = `O número que você digito é: ${pergunta}`
    input.style.backgroundColor = "khaki"

}

function voltar ()
{
    pergunta--
    input.textContent = `O número que você digito é: ${pergunta}`
    input.style.backgroundColor = "tomato"
}