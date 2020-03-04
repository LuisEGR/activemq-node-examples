const stomp = require('node-stomp');

// Set debug to true for more verbose output.
// login and passcode are optional (required by rabbitMQ)
let stomp_args = {
    port: 61613,
    host: 'localhost',
    debug: true,
    // login: 'guest',
    // passcode: 'guest',
};

let messages = 0;

let client = new stomp.Stomp(stomp_args);
client.connect();
client.on('connected', () => {
    client.subscribe({
        destination: '/queue/test',
        "suscription-type": "client-individual'",
    })
})


client.on('message', function (message) {
    messages++;
    // console.log("received message : " + message.body[0]);
    console.log('message.body[0] :', message);
    // client.ack(message.headers['message-id']);
});


client.on('error', function (error_frame) {
    console.log('[AMQ] message : ' + error_frame);
    client.disconnect();
});
