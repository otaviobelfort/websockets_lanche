// /* importa a biblioteca */
const WebSocket = require("ws");

// /* cria o objeto do servidor WebSocket */
const server = new WebSocket.Server({ port: 8080 });

// dados do cardapio
const bd_massa = [
    {
        nome: "Mini Pizza Calabreza",
        preco: 5.0,
    },
    {
        nome: 'Pastel Carne Seca',
        preco: 6.0,
    },
    {
        nome: "Pastel Queijo",
        preco: 5.0,
    },
    {
        nome: "Churrus",
        preco: 3.0,
    },
    {
        nome: "Bomba",
        preco: 7.0,
    },
    {
        nome: "Torta de chocolate",
        preco: 10.0,
    },
    
];
const bd_bebida = [
    {
        nome: "Refrigerante Guaraná Jesus - 2L",
        preco: 8.0,
    },
    {
        nome: 'Refrigerante Coca Cola',
        preco: 10.0,
    },
    {
        nome: "Suco de Abacaxi",
        preco: 10.0,
    },
    {
        nome: "Suco de Cupu",
        preco: 10.0,
    },
];

/* quando um cliente se conectar no servidor, executa: */
server.on("connection", (socket) => {
    
    console.log("Cliente conectado!");
    
    /* quando o servidor receber uma mensagem do cliente, executa */
    socket.on("message", (message) => {
        if(message === 'cardapio'){
            for(i = 0; i <= bd_massa.length;i++){
                socket.send(bd_massa[i].nome + " R$ " + bd_massa[i].preco + ",00");
            }
            
        }
        
    //socket.send("Obrigado por enviar a Mensagem : " + message);

        /* envia a mensagem para todos os clientes conectados */
        
    });
});
console.log("Servidor Rodando ...")

