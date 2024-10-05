import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { AuthController } from './controllers/auth.controller';
import { UserController } from './controllers/user.controller';
import { authMiddleware } from './middlewares/auth.middleware';

dotenv.config();

const app = express();
app.use(express.json());

// Controllers
const authController = new AuthController();
const userController = new UserController();

// Routes
app.post('/auth/register', (req, res) => authController.register(req, res));
app.post('/auth/login', (req, res) => authController.login(req, res));

// Protected routes
app.get('/user/:id', authMiddleware, (req, res) => userController.getUser(req, res));

export default app;
