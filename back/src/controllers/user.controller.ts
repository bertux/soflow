import { Request, Response } from 'express';
import { UserService } from '../services/user.service';
import { getCurrentUserId } from '../utils/jwt.util';

class UserController {
  private userService = new UserService();

  async getUser(req: Request, res: Response): Promise<void> {
    try {
      const user = await this.userService.getUserById(req.params.id);
      if (!user) {
        res.status(404).json({ message: 'User not found' });
      } 
      
      res.json(user);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  async getCurrentUser(req: Request, res: Response): Promise<void> {
    try {
      const userId = getCurrentUserId(req);
      const user = await this.userService.getUserById(userId);
      if (!user) {
        res.status(404).json({ message: 'User not found' });
      } 
      
      res.json(user);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }
}

export default UserController;