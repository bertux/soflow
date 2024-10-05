import express from "express";
import dotenv from "dotenv";
import AuthController from "./controllers/auth.controller";
import UserController from "./controllers/user.controller";
import mongoose from "mongoose";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.MONGO_URI!)
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

// Protected routes
// @ts-ignore
app.get('/user/:id', userController.getUser);

// Error handling middleware
// app.use((err: any, req: Request, res: Response, next: NextFunction) => {
//   console.error(err.stack);
//   res.status(500).json({ message: 'Something went wrong!' });
// });

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});