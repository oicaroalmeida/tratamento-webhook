# tratamento-webhook
Aplicação criada para tratar um webhook que será enviado ao bubble posteriormente.

Devido a limitações do bubble.io, onde o mesmo não consegue 'ler' ao mesmo tempo um parâmetro de URL enviado via webhook e também o seu conteúdo,
criei esta aplicação que recebe um webhook com parâmetros na sua URL e também um 'body'. Faço o tratamento que eu preciso no body e retorno um 
JSON com o parâmetro informado na url e com o dado que eu preciso do body.
