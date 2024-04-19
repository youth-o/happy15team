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

  static async getUserData(token: string) {
    try {
      const response = await axios.get("/users/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async updateProfile(userData: {
    nickname?: string;
    profileImage?: string;
  }) {
    try {
      const token = localStorage.getItem("accessToken");
      if (token) {
        const response = await axios.put("/users/me", userData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("User data updated successfully!");
        return response.data;
      } else {
        throw new Error("Access token not found");
      }
    } catch (error) {
      throw error;
    }
  }
}

export default UserService;
