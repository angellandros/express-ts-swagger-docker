import * as express from 'express';
import { RegisterRoutes } from './routes/routes';  // here

const app = express();
const port = 3000;

RegisterRoutes(app);  // and here

app.listen(port, () => console.log(`Server started listening to port ${port}`));
