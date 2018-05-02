// function funcao(param1){
//     return resultado;
// }
// function NOME_DA_FUNCAO (ENTRADAS)
// function funcao(param1) => {
//     return resultado;
// }
//let resultado2 = funcao(1);

// let somar = (N1, N2) => {
//     let resultadosomar = N1 + N2;
//     return resultadosomar; 
// }
// let V1=1, V2=2;
// var soma = somar(V1, V2);

// console.log(`${V1} + ${V2} = ${soma}`);

//ler linha

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
  // TODO: Log the answer in a database
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.close();
});


//no terminal: npm install chalk --save; instalar o postman