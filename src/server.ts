import { boomError } from './middlewares/error.handler';
import express from 'express';
import { apiRouter } from './router';
import cors from 'cors';
import { db } from './config/database';
const port = process.env.port || 3000;

db.on('error', console.error.bind(console, '[server]: ❌ MongoDB connection error:'));
db.once('open', () => {
  console.log('[server]: ✔ Connected to MongoDB');
});

const app = express();
const router = express.Router();

app.use(express.json());
app.get('/', (req, res) => {
  res.json({ response: '⚡ This API is running' });
});

app.use('/api/v1', router);

app.use(cors());
apiRouter(router);
app.use(boomError);

app.listen(port, () => {
  console.log(`[server]: 🚀 Server is running at https://localhost:${port}`);
});

export default app