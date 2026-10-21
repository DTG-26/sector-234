import http from 'http';

const server = http.createServer((req, res) => {
  const host = req.headers.host ? req.headers.host.split(':')[0] : '192.168.0.5';
  res.writeHead(302, { Location: `http://${host}:3000${req.url}` });
  res.end();
});

server.listen(5173, '0.0.0.0', () => {
  console.log('[PORT REDIRECT] Forwarding legacy port 5173 -> port 3000');
});
