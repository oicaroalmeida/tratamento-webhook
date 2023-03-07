# tratamento-webhook
Aplicação criada para tratar um webhook que será enviado ao bubble posteriormente.

Devido a limitações do bubble.io, onde o mesmo não consegue 'ler' ao mesmo tempo um parâmetro de URL enviado em uma requisição POST e também o seu body,
criei esta aplicação que recebe um webhook com parâmetros na sua URL e também um 'body'. Faço o tratamento que eu preciso no body e envio um 
JSON com o parâmetro informado na url e com o dado que eu preciso do body.

Uma rápida explicação do código e suas funções...

===================================================================================

~~~javascript
const express = require('express');           // Faz o import do express -> Necessário para criação da API
const bodyParser = require('body-parser');    // Faz o import do bodyParser -> Necessário para tratar o corpo da requisição
const axios = require('axios');               // Faz o import do axios -> Necessário para envio da chamada POST com os dados tratados

const app = express();                        // Instancia o express numa variável chamada app

// Configuração do body-parser
app.use(bodyParser.urlencoded({ extended: true }));   // Informa ao 'app' (variável instanciada acima - A API propriamente dita) as configurações do body-parser

app.post('/webhook', (req, res) => {                    // Cria a rota para recebimento de uma requisição do tipo POST
    const token = req.query.token;                      // Salva o token vindo na URL como um 'query param' da requisição em uma variável
    const notificationCode = req.body.notificationCode; // Salva o notificationCode vindo no body em uma variável de mesmo nome

    const jsonToSend = {                                // Coloca as duas variáveis acima em um arquivo JSON
        token: token,
        notificationCode: notificationCode
    };

    axios.post('https://conect-pag-20230111.bubbleapps.io/api/1.1/wf/recebernotificacao2', jsonToSend)    // Envia o arquivo JSON para o endereço de destino
        .then(response => {
            res.end();
        })
        .catch(error => {
            res.end();
        });


});

app.listen(3000, () => {                                        // Inicia o serviço na porta 3000 e exibe uma mensagem no console
    console.log('Server started on port 3000');
});
~~~

===================================================================================

Espero que este projeto seja útil para mais alguém que se deparou com este limitante do Bubble.io

