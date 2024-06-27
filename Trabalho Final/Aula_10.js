let hora = window.prompt('Digite uma hora')
let titulo = document.getElementById('horario')
let saudacao = document.getElementById('saudacao')
let imagem = document.getElementById('foto')

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