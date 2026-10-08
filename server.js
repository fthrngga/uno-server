const { PeerServer } = require('peer');

const port = process.env.PORT || 9000;

const peerServer = PeerServer({
  port: port,
  path: '/uno'
});

peerServer.on('connection', (client) => {
  console.log(`[+] Pemain masuk: ${client.getId()}`);
});

peerServer.on('disconnect', (client) => {
  console.log(`[-] Pemain keluar: ${client.getId()}`);
});

console.log(`🚀 Signaling server berjalan di port ${port}`);
