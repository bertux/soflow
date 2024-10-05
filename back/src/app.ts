import express from "express";
import dotenv from "dotenv";
import AuthController from "./controllers/auth.controller";
import UserController from "./controllers/user.controller";
import mongoose from "mongoose";
import config from "./config";
import { commissionPlanController } from "./controllers/commissionPlan.controller";
import { productController } from "./controllers/product.controller";

const app = express();
app.use(express.json());

const PORT = config.port;

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

const authController = new AuthController();
const userController = new UserController();

// Routes
app.post('/auth/register', authController.register);
app.post('/auth/login', authController.login);

app.get('/user/:id', userController.getUser);

app.post('/commission-plans', (req, res) => commissionPlanController.create(req, res));
app.get('/commission-plans/:id', (req, res) => commissionPlanController.getById(req, res));
app.get('/commission-plans', (req, res) => commissionPlanController.getAll(req, res));
app.put('/commission-plans/:id', (req, res) => commissionPlanController.update(req, res));
app.delete('/commission-plans/:id', (req, res) => commissionPlanController.delete(req, res));

app.post('/products', (req, res) => productController.create(req, res));
app.get('/products/:id', (req, res) => productController.getById(req, res));
app.get('/products', (req, res) => productController.getAll(req, res));
app.put('/products/:id', (req, res) => productController.update(req, res));
app.delete('/products/:id', (req, res) => productController.delete(req, res));

// Error handling middleware
// app.use((err: any, req: Request, res: Response, next: NextFunction) => {
//   console.error(err.stack);
//   res.status(500).json({ message: 'Something went wrong!' });
// });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});