import bcrypt from 'bcrypt';
import { UserRepository } from '../repositories/user.repository';
import { IUser } from '../models/user.model';
import { generateToken } from '../utils/jwt.util';

export class AuthService {
  private userRepository = new UserRepository();

  async register(userData: Partial<IUser>): Promise<IUser> {
    const hashedPassword = await bcrypt.hash(userData.password!, 10);
    userData.password = hashedPassword;
    return this.userRepository.create(userData);
  }

  async login(email: string, password: string): Promise<{ user: IUser; token: string } | null> {
    const user = await this.userRepository.findByEmail(email);
    if (!user) return null;

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return null;

    const token = generateToken(user._id);
    return { user, token };
  }
}
