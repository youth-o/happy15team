import axios from "@/lib/axios";
import { UserData } from "@/types/interface";

class UserService {
  static async signUp(userData: UserData) {
    try {
      const response = await axios.post("/users", userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async login(userData: UserData) {
    try {
      const response = await axios.post("/auth/login", userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export default UserService;
