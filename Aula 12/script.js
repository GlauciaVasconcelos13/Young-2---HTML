// LISTA DE PERGUNTAS

const QUESTOES_QUIZ = [
    {
        questao: "Qual é o símbolo do Dia das Mães?",
        a: 'Flor',
        b: 'Coração',
        c: 'Presente',
        d: 'Coroa',
        correta: 'Flor',
    },
    {
        questao: "Qual a data do Dia das Mães?",
        a: 'Segundo Domingo de Maio',
        b: 'Primeiro Domingo de Maio',
        c: 'Quarto Domingo de Maio',
        d: 'Sete de Setembro',
        correta: 'Segundo Domingo de Maio',
    },
    {
        questao: "Em qual país foi comemorado pela primeira vez o Dia das Mães?",
        a: 'Brasil',
        b: 'Estados Unidos',
        c: 'França',
        d: 'Marrocos',
        correta: 'Estados Unidos',
    },
    {
        questao: "O que os répteis fazem de noite?",
        a: 'Todos descansam ou fogem',
        b: 'Trocam de pele',
        c: 'Fazem massagem',
        d: 'Comem banana',
        correta: 'Todos descansam ou fogem',
    },
    {
        questao: "Qual a inteligência do ornagotango?",
        a: 'São burros',
        b: 'São os primatas mais inteligentes',
        c: 'São os primatas mais velhos',
        d: 'São os primatas mais estratégicos',
        correta: 'São os primatas mais inteligentes',
    },
    {
        questao: "Porque os orangotangos pulam?",
        a: 'Para alcançar as frutas mais rápidos',
        b: 'Para ficar mais forte',
        c: 'Para sambar',
        d: 'Eles não pulam eles escalam',
        correta: 'Eles não pulam eles escalam',
        
    },
    {
        questao: "Porque as tartarugas correm?",
        a: 'Para apostar corrida com uma lebre',
        b: 'Para ficar mais forte',
        c: 'Por sobrevivencia',
        d: 'Elas não correm',
        correta: 'Por sobrevivência',
        
    },
    {
        questao: "Orcas são o que?",
        a: 'Peixe',
        b: 'Cavalo',
        c: 'Golfinho',
        d: 'Baleia',
        correta: 'Golfinho',
        
    },
    {
        questao: "Porque o teclado do computador não na ordem alfabética?",
        a: 'Porque ele quis',
        b: 'Para não escrever rápido demais',
        c: 'Para sambar',
        d: 'Porque ele é padrão',
        correta: 'Para não escrever rápido demais',
        
    },

    
    
    ]
    
    // IDENTIFICANDO ELEMENTOS
    const QUIZ_TITULO = document.getElementById('questao')
    const ALTERNATIVA_A = document.getElementById('text_a')
    const ALTERNATIVA_B = document.getElementById('text_b')
    const ALTERNATIVA_C = document.getElementById('text_c')
    const ALTERNATIVA_D = document.getElementById('text_d')
    const BOTAO = document.getElementById('enviar')
    const QUIZ_CONTEINER = document.getElementById('quiz')
    const RESPOSTAS = document.querySelectorAll('.resposta')
    
    // Variáveis
    
    let questao_atual = 0
    let corretas = 0
    
    carregar_quiz()
    
    function carregar_quiz()
    {
        console.log(QUIZ_TITULO)
        const INFO_QUESTAO = QUESTOES_QUIZ[questao_atual]
        QUIZ_TITULO.innerText = INFO_QUESTAO.questao
        ALTERNATIVA_A.innerText = INFO_QUESTAO.a
        ALTERNATIVA_B.innerText = INFO_QUESTAO.b
        ALTERNATIVA_C.innerText = INFO_QUESTAO.c
        ALTERNATIVA_D.innerText = INFO_QUESTAO.d
    }
    
    function pegar_resposta()
    {
        let resposta = undefined
    
        RESPOSTAS.forEach((resp_elemento) => {
            if (resp_elemento.checked){
    
                resposta = resp_elemento.id
            }
        })
        return resposta
    }
    
    function clicado(){
    
        const RESPOSTA_JOGADOR = pegar_resposta()
        const TOTAL_PERGUNTAS = QUESTOES_QUIZ.length
        console.log(TOTAL_PERGUNTAS)
    
        if (RESPOSTA_JOGADOR)
        {
            if (RESPOSTA_JOGADOR === QUESTOES_QUIZ[questao_atual].correta)
            {
                corretas++
                corretas.innerText ('Está correto!')
            }
            questao_atual++
            if (questao_atual < TOTAL_PERGUNTAS)
            {
                carregar_quiz()
                innerText ('Não foi desta vez!')
            }
            
        }
    }
    
    BOTAO.addEventListener('click', clicado)