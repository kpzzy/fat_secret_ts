import express, { Application } from 'express';
import router from './routers';

const app: Application = express();
const port = 3000;

// Middleware
app.use(express.json());

// Routers
app.use('/api', router);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
