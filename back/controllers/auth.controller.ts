import { Request, Response } from 'express';
import { AuthService } from '../services/auth.service';

export class AuthController {
  private authService = new AuthService();

  async register(req: Request, res: Response): Promise<void> {
    try {
      const user = await this.authService.register(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async login(req: Request, res: Response): Promise<void> {
    try {
      const { email, password } = req.body;
      const authData = await this.authService.login(email, password);
      if (!authData) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
      res.json(authData);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}
