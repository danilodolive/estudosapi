let palavra = 'ABCBA'
let tamanho = (palavra.length-1);
let cont=0;
let pali = false;

while (cont < (palavra.length/2)){
    if (palavra[cont] === palavra[tamanho]){
       validacao.push(1);
       cont++;
       tamanho--;
       pali = true;
    } else {
        pali = false;
        tamanho--;
        break;
    }
}

if (pali === true){
    console.log('A palavra ', palavra, ' é palíndroma.');
} else {
    console.log('A palavra ', palavra, ' não é palíndroma.');
}

