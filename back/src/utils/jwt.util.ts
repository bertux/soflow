
import jwt from 'jsonwebtoken';

export const generateToken = (_id: string): string => {
  return jwt.sign({ _id }, process.env.JWT_SECRET!, { expiresIn: '24h' });
};

export const verifyToken = (token: string): any => {
  return jwt.verify(token, process.env.JWT_SECRET!);
};

export const getCurrentUserId = (req: any) : string => {
  const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw "no token sent";
    }

    const token = authHeader?.split(' ')[1];
    const decoded = verifyToken(token);

    return decoded?._id;
}