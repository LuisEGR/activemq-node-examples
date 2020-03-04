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

// 'activemq.prefetchSize' is optional.
// Specified number will 'fetch' that many messages
// and dump it to the client.
let headers = {
    destination: '/queue/test',
    ack: 'auto',
    "suscription-type": "MULTICAST",
    AMQ_SCHEDULED_DELAY: 10000,
    body: "asdasd",
    // 'activemq.prefetchSize': '10'
};

let messages = 0;
let client = new stomp.Stomp(stomp_args);

// start connection with active-mq
client.connect();

client.on('connected', function () {
    console.log('[AMQ] Connected');
    client.send(headers, true);
    // client.subscribe(headers);
});

client.on('disconnected', function () {
    console.log('[AMQ] Disconnected');
});



client.on('error', function (error_frame) {
    console.log('[AMQ] message : ' + error_frame);
    client.disconnect();
});

