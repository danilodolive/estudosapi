const express = require ('express');
const httprequest = require ('request');
const chalk = require ('chalk');
const app = express();
const funcao = require ("./funcoes");

app.get('/', (request, response) =>{
    //API com Funções OK 
    response.status(200).send('API OK');
});

app.get('/cep/:cep/', (request, response) => {
    const cep = request.params.cep;
    funcao.consultacep(cep, callback => {
        console.log(callback);
        response.status(200).send(callback);  
    });
});

app.get('/cep/:cep/rua', (request, response) => {
    const cep = request.params.cep;
    funcao.consultacep(cep, callback => {
        console.log(callback);
        response.status(200).send(callback.logradouro);  
    });
});


app.listen(3001, () => {
    console.log(chalk.blue('Rodando na porta 3001'));
});