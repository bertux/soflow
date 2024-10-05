import express from "express";
import AuthController from "./controllers/auth.controller";
import UserController from "./controllers/user.controller";
import mongoose from "mongoose";
import config from "./config";
import { commissionPlanController } from "./controllers/commissionPlan.controller";
import { productController } from "./controllers/product.controller";
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

const PORT = config.port;

if (config.mongoUri) {
  mongoose.connect(config.mongoUri)
    .then(() => {
      console.log('Connected to MongoDB');
      app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
      });
    })
    .catch((error) => {
      console.error('MongoDB connection error:', error);
    });
  }

const authController = new AuthController();
const userController = new UserController();

// Routes
app.post('/api/auth/register', (req, res) => authController.register(req, res));
app.post('/api/auth/login', (req, res) => authController.login(req, res));

app.get('/api/user/current', (req, res) => userController.getCurrentUser(req, res));
app.get('/api/user/:id', (req, res) => userController.getUser(req, res));

app.post('/api/commission-plans', (req, res) => commissionPlanController.create(req, res));
app.get('/api/commission-plans/current', (req, res) => commissionPlanController.getAllCurrent(req, res));
app.get('/api/commission-plans/:id', (req, res) => commissionPlanController.getById(req, res));
app.get('/api/commission-plans', (req, res) => commissionPlanController.getAll(req, res));
app.put('/api/commission-plans/:id', (req, res) => commissionPlanController.update(req, res));
app.delete('/api/commission-plans/:id', (req, res) => commissionPlanController.delete(req, res));

app.post('/api/products', (req, res) => productController.create(req, res));
app.get('/api/products/:id', (req, res) => productController.getById(req, res));
app.get('/api/products', (req, res) => productController.getAll(req, res));
app.put('/api/products/:id', (req, res) => productController.update(req, res));
app.delete('/api/products/:id', (req, res) => productController.delete(req, res));

// Error handling middleware
// app.use((err: any, req: Request, res: Response, next: NextFunction) => {
//   console.error(err.stack);
//   res.status(500).json({ message: 'Something went wrong!' });
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });