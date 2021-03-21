
/* realiza o deploy e execução no Heroku */
const PORT = process.env.PORT || 8080;
const INDEX = '/index.html';
/* */
/* importa a biblioteca */
const WebSocket = require("ws");
const express = require("express");

const server = express()
  .use((req, res) => res.sendFile(INDEX, { root: __dirname }))
  .listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}!`));

/* cria o objeto do servidor WebSocket */
const wss = new WebSocket.Server({ server });

/* quando um cliente se conectar no servidor, executa: */
wss.on("connection", (socket) => {
    
    console.log("Cliente conectado!");
    
    /* quando o servidor receber uma mensagem do cliente, executa */
    socket.on("message", (message) => {
        
        console.log("Mensagem recebida: " + message);

        /* envia a mensagem para todos os clientes conectados */
        wss.clients.forEach((client) => {
            client.send(message);
        });
    });
});

