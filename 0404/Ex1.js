// A partir do vetor abaixo, exibir na tela apenas os números
//      const vetor = [1, ‘a’, ‘banana’, 2, -1, 10, undefined, {rua:“Rua dos Vetores”}, 5];

const vetor = [1, 'a', 'banana', 2, -1, 10, undefined, {rua:"Rua dos Vetores"}, 5];
let cont = 0;

//Usando While
while (cont <= vetor.length){
    if ( !isNaN(vetor[cont])){
        console.log('Posição ', cont, ' é o número:', vetor[cont]);
    }
    cont++;
}

// Usando For
// for (cont=0; cont<vetor.length; cont++){
//     if (vetor[cont]*0===0){
//         console.log('Posição ', cont, ' é o número:', vetor[cont]);
//     }
//}