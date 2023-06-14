import http from 'http';
import env from 'dotenv';
import app from './app';

env.config();

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/`);
});


