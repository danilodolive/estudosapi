// Completar o vetor abaixo de forma que ele tenha em seus índices os 15 primeiros termos da sequência de Fibonacci:
let fibonacci = [0, 1];
let cont=0;

while (fibonacci.length-1 <= 16){
    fibonacci.push(fibonacci[cont]+fibonacci[cont+1]);
    console.log('Posição ', cont, '=', fibonacci[cont]);
    cont++;
}
