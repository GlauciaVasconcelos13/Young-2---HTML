//IDENTIFICAR ELEMENTOS (NUMEROS)
let dias_n = document.getElementById ('dias_n')
let horas_n = document.getElementById ('horas_n')
let minutos_n = document.getElementById ('minutos_n')
let segundos_n = document.getElementById ('segundos_n')

// DATA ALVO
let data_alvo = '06 January 2025'

// CRIAR FUNÇÃO DE CALCULAR A DIFERENÇA ATÉ A DATA
function contagem ()
{
    const hoje = new Date()
    const aniversario_convertido = new Date (data_alvo)
    const total_segundos = (aniversario_convertido - hoje )/1000

    const minutos = Math.floor (total_segundos / 60) % 60
    const horas = Math.floor (total_segundos/ 3600) % 24
    const dias = Math.floor (total_segundos / 3600 / 24)
    const segundos = Math.floor (total_segundos) % 60

    dias_n.innerText =  formatar_digito (dias)
    horas_n.innerText =  formatar_digito (horas)
    minutos_n.innerText =  formatar_digito (minutos)
    segundos_n.innerText =  formatar_digito (segundos)
    
    console.log (dias, horas, minutos, segundos)
}

//CHAMAR FUNÇÃO
contagem ()

//CHAMAR A FUNÇÃO DE TEMPO EM TEMPO

setInterval(contagem,1000)

// FUNÇÃO PARA FORMATAR DIGITOS

function formatar_digito (tempo)
{
    if (tempo < 10)
    {
        return `0${tempo}`
    }
    else 
    {
        return tempo
    }

}