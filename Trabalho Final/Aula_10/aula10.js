const hora = window.prompt('Digite uma hora')

const titulo = document.querySelector('#horario')
const saudacao = document.querySelector('#saudacao')
const imagem = document.querySelector('#foto')
const botao_avançar = document.querySelector ('.avancar')
const botao_voltar = document.querySelector ('.voltar')

botao_avançar.addEventListener ('click', salvar_dados)

function salvar_dados () {
    localStorage.setItem ('titulo')
    localStorage.setItem ('suadacao')
    localStorage.setItem ('imagem')
    localStorage.setItem ('botao_avançar')
    localStorage.setItem ('botao_voltar')
}

titulo.innerText = `Agora são ${hora} horas`

if (hora >= 5 && hora <= 12)
{
    window.document.body.style.backgroundColor = 'greenyellow'
    saudacao.innerText = 'Bom dia!'
    imagem.src = 'https://st.depositphotos.com/13649386/56305/i/450/depositphotos_563059114-stock-photo-sunset-evening-clouds-green-fields.jpg'
    titulo.style.color = 'green'
    saudacao.style.color = 'limegreen'
}
else if (hora <= 18)
{
    window.document.body.style.backgroundColor = 'orange'
    saudacao.innerText = 'Boa tarde!'
    imagem.src = 'https://img.freepik.com/fotos-premium/fim-da-tarde-natureza-paisagem-foto-de-um-rio-ao-por-do-sol_566982-137.jpg'
    titulo.style.color = 'maroon'
    saudacao.style.color = 'saddlebrown'
}
else {
    window.document.body.style.backgroundColor = 'navy'
    saudacao.innerText = 'Boa noite!'
    imagem.src = 'https://static.vecteezy.com/ti/fotos-gratis/t1/8440112-paisagem-noite-em-fprest-com-lua-cheia-e-nuvens-foto.jpg'
    titulo.style.color = 'white'
    saudacao.style.color = 'dimgrey'
}

