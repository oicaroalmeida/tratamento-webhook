const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();

// Configuração do body-parser
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/webhook', (req, res) => {
    const token = req.query.token;
    const notificationCode = req.body.notificationCode;

    const jsonToSend = {
        token: token,
        notificationCode: notificationCode
    };

    axios.post('https://conect-pag-20230111.bubbleapps.io/version-test/api/1.1/wf/recebernotificacao2', jsonToSend)
        .then(response => {
            res.end();
        })
        .catch(error => {
            res.end();
        });


});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});