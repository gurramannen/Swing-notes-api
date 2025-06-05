// index.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import noteRoutes from './src/routes/noteRoutes.js';
import userRoutes from './src/routes/userRoutes.js';
import { errorHandler } from './src/middleware/errorHandler.js';
import { sequelize } from './src/config/db.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/notes', noteRoutes);
app.use('/api/user', userRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
