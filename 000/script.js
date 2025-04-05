let number = [];
let limite = 9;
let pc = Math.floor(Math.random() * 102);  // Sorteia um número entre 0 e 101
let usuario = 0;
let erros = 0;
let limite_erros = 10;
let qua_num = 0;

console.log('=' .repeat(30));
console.log('-'.repeat(30));
console.log(`{"JOGO DOS NÚMEROS MÁGICOS".padStart(30, ' ').padEnd(30, ' ')}`);
console.log('-'.repeat(30));
console.log('=' .repeat(30));
setTimeout(() => {
    console.log('\n  Bem-vindo ao JOGO DOS NÚMEROS MÁGICOS!');
}, 2000);
setTimeout(() => {
    console.log('\n  Vamos testar sua intuição!');
}, 5000);
setTimeout(() => {
    console.log('\n  Vamos começar!');
}, 8000);
setTimeout(() => {
    console.log('\n  Você tem 10 tentativas, BOA SORTE!');
}, 11000);

let gameLoop = setInterval(() => {
    if (erros >= limite_erros) {
        console.log(`
            VIXI, SUAS CHANCES ACABARAM...
            SEU NÚMERO ERAAAA...

            -> ${pc}
        `);
        clearInterval(gameLoop);
        return;
    }

    console.log(`\n  Você está na tentativa ${erros + 1}º!`);
    usuario = prompt('ADIVINHE O MEU NÚMERO E DIGITE...');

    try {
        usuario = parseInt(usuario);
        if (isNaN(usuario)) throw new Error('Não é um número válido!');

        // Verifica se o usuário já digitou o mesmo número
        qua_num = number.filter(num => num === usuario).length;
        if (qua_num > 0) {
            console.log(`
            VOCÊ JÁ DIGITOU ESSE NÚMERO!!
            ANULEI ESSA TENTATIVA!
            `);
            erros--;  // Não contar como erro
            return;
        }

        number.push(usuario);

        let chute = pc + 11;
        let chute1 = pc - 11;

        if (usuario === pc) {
            console.log(`
            UHUUUULLL, VOCÊ VENCEU!!
            O NÚMERO MÁGICO REALMENTE ERA -> ${pc}
            `);
            clearInterval(gameLoop);
            return;
        }

        if (usuario > chute || usuario < chute1) {
            console.log(`
            VOCÊ ERROU!!
            TENTE NOVAMENTE!
            `);
        }

        if (usuario >= chute1 && usuario < pc) {
            console.log(`
            BOOMM, ACREDITO QUE NÃO SEJA ESSE NÚMERO
            DICA: CHUTE MAIS ALTO, VOCÊ ESTÁ MUITO PRÓXIMO!
            `);
        }

        if (usuario <= chute && usuario > pc) {
            console.log(`
            BOOMM, ACREDITO QUE NÃO SEJA ESSE NÚMERO
            DICA: CHUTE MAIS BAIXO, VOCÊ ESTÁ MUITO PRÓXIMO!
            `);
        }

        erros++;
    } catch (e) {
        console.log(`
            Não estou entendendo... 
            DIGITE UM NÚMERO VÁLIDO!!!
        `);
    }
}, 3000);
