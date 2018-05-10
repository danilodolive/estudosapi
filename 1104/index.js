const express = require ('express');
const httprequest = require ('request');
const chalk = require ('chalk');
const app = express();
const funcao = require ("./funcoes");

app.get('/', (request, response) =>{
    //teste da API  
    response.status(200).send('API OK');
});

app.get('/cepf/:cep/', (request, response) => {
    const cep = request.params.cep;
    funcao.consultacep(cep, callback => {
        console.log(callback);
        response.status(200).send(callback);  
    });

    app.get('/cepf/:cep/rua', (request, response) => {
        const cep = request.params.cep;
        funcao.consultacep(cep, callback => {
            console.log(callback);
            response.status(200).send(callback.logradouro);  
        });
});

app.get('/cep/:cep/', (request, response) => {
    const cep = request.params.cep; //atribuindo a variável CEP o que o usuário digitou na URL (postalcode)
    response.send(`ENDERECEO ${consultacep(cep)}`);
    const url = `https://viacep.com.br/ws/${cep}/json`;
    console.log('ENTROU NO CEP COMPLETO');
    httprequest(url, function (error, resposta, body) {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', resposta && resposta.statusCode); // Print the response status code if a response was received
        response.status(200).send(`CEP COMPLETO ${body}`);
    });
   response.sendStatus(200);
});

app.get('/cep/:postalcode/rua/', (request, response) => {
    const cep = request.params.postalcode;
    const url = `https://viacep.com.br/ws/${cep}/json`;
    console.log('ENTROU NA RUA');
    httprequest(url, function (error, resposta, body) {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', resposta && resposta.statusCode); // Print the response status code if a response was received
        
        const rua = JSON.parse(body);
        console.log('statusCode:', rua);
       
        response.status(200).send(`RUA ${rua.logradouro}`);
    });
});

app.get('/cep/:postalcode/bairro', (request, response) => {
    const cep = request.params.postalcode;
    //bairro
    //separar em função 
});

app.listen(3000, () => {
    console.log(chalk.blue('Rodando na porta 3000'));
});