const http = require('http');
const dta = require('./meuModulo.js');
const porta = 8080;

http.createServer((requisicao, resposta)=>{
    resposta.writeHead(200, {'Content-Type':'text/html'});
     resposta.write('Horario atual: '+ dta.dataAtual());
    resposta.end()
}).listen(porta, ()=>{console.log(`servidor rodando: ${porta}`)});