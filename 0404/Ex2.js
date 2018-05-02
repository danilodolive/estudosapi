// A partir do vetor abaixo, exibir na tela apenas os valores pares:
const vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let cont = 0;

//Usando While
while (cont <= vetor.length){
    if (vetor[cont]%2===0){
        console.log('Posição ', cont, ' é par. Número:', vetor[cont]);
    }
    cont++;
}

// Usando For
// for (cont=0; cont<vetor.length; cont++){
//     if (vetor[cont]%2===0){
//         console.log('Posição ', cont, ' é o par. Número:', vetor[cont]);
//     }
// }