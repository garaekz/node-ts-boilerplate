import { boomError } from './middlewares/error.handler';
import express from 'express';
import { apiRouter } from './router';
import cors from 'cors';
const port = process.env.port || 3000;

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
  console.log(`🚀[server]: Server is running at https://localhost:${port}`);
});

export default app