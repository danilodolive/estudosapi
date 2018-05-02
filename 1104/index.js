const express = require ('express');
const request = require ('request');
const chalk = require ('chalk');
const app = express();

app.get('/', (request, response) =>{
    response.status(200).send('API TOP');
});

app.get('/cep/:cep', (request, response) => {
    const cep = request.params.cep;
    //json completo da API linl: https://viacep.com.br/ws/<CEP>/json
});

app.get('/cep/:cep', (request, response) => {
    const cep = request.params.cep;
    //nome da rua, pela URL que está chamando
});

app.get('/cep/:cep', (request, response) => {
    const cep = request.params.cep;
    //bairro
    //separar em função 
});




app.get('/cep/:cep', (request, response) => {
    const cep = request.params.cep;
    //json completo
});


app.listen(3000, () => {
    console.log(chalk.blue('QIUSSU'));
});