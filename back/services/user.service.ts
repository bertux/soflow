import { UserRepository } from '../repositories/user.repository';
import { IUser } from '../models/user.model';

export class UserService {
  private userRepository = new UserRepository();

  async getUserById(userId: string): Promise<IUser | null> {
    return this.userRepository.findById(userId);
  }
}
