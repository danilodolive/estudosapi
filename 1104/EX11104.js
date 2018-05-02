function  vogcons(){
    let letras = [0, 0], cons=0;
    for (let cont=0; cont<answer.length; cont++){
        switch (answer[cont]){
            case 'a':
                letra[1]++;
                break;
            case 'e':
                letra[1]++;
                break;
            case 'i':
                letra[1]++;
                break;
            case 'o':
                letra[1]++;
                break;
            case 'u':
                letra[1]++;
                break;
            default:
                letra[2]++;
                break;
        }
    }
    return letras[1];
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite a palavra ', (palavra) => {
    console.log('Quantidade de vogais:', vogcons(palavra));
    rl.close();
});

 teste;