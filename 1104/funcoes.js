const request = require ('request');

function  consultacep(cep, callback){
    const url = `https://viacep.com.br/ws/${cep}/json`;
    request(url, function (erro, resposta, conteudo) {
        const retorno = JSON.parse(conteudo);
        // console.log(`erro:${erro}`);
        // console.log('statusCode:', resposta && resposta.statusCode);
        // console.log('statusCode:', conteudo);       
        return callback(retorno);
    });
}
exports.consultacep = consultacep;