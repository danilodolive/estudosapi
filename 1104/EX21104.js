function ehprimo(num){
    for (let i = 2; i < num; i++)
    switch (num % i){
        case 0:
            return false;
        default: 
            return true;
    }
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o número ', (numero) => {
    switch (ehprimo(numero)){
        case true:
            console.log('O número ', numero, 'é primo.');
            break;
        case false:
            console.log('O número ', numero, 'não é primo.');
            break;
    }
  rl.close();
});