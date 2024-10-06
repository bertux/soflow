import { UserModel, IUser } from '../models/user.model';
import { ObjectId } from 'mongodb';

export class UserRepository {
  async findByEmail(email: string): Promise<IUser | null> {
    return await UserModel.findOne({ email });
  }

  async create(userData: Partial<IUser>): Promise<IUser> {
    return await UserModel.create(userData);
  }

  async findById(userId: string): Promise<IUser | null> {
    return await UserModel.findById(new ObjectId(userId));
  }
  
  async getAllUsers(): Promise<IUser[]> {
    return await UserModel.find();
  }
}
