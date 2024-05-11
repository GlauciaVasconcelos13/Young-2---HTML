let entrada = document.getElementById('input')

console.log(entrada)

entrada.addEventListener('change', exibir_alerta)

function exibir_alerta()
{
    let valor = entrada.value
    alert('Você alterou o texto para: ' + valor)
}