import axios from 'axios';

const API_URL = 'http://localhost:4000';

interface User {
  _id?: string;
  name: string;
  email: string;
  password?: string;
  avatar: string;
  role: number
}

const userService = {
  getUser: async (userId: string) => {
    const response = await axios.get(`${API_URL}/user/${userId}`);
    return response.data;
  },

  updateUser: async (userId: string, user: Partial<User>) => {
    const response = await axios.put(`${API_URL}/user/${userId}`, user);
    return response.data;
  },

  deleteUser: async (userId: string) => {
    const response = await axios.delete(`${API_URL}/user/${userId}`);
    return response.data;
  },

  getAllUsers: async () => {
    const response = await axios.get(`${API_URL}/user`);
    return response.data;
  }
};

export default userService;
