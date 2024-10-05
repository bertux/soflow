import { Request, Response } from 'express';
import { userService } from '../services/user.service';
import { getCurrentUserId } from '../utils/jwt.util';

class UserController {
  async getUser(req: Request, res: Response): Promise<void> {
    try {
      const user = await userService.getUserById(req.params.id);
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
      const user = await userService.getUserById(userId);
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