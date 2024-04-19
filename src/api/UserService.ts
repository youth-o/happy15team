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

  static async updatePassword(data: { password: string; newPassword: string }) {
    const { password, newPassword } = data;

    try {
      const token = localStorage.getItem("accessToken");
      if (token) {
        const response = await axios.put(
          "/auth/password",
          {
            password,
            newPassword,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 204) {
          // 성공적으로 업데이트된 경우
          alert("비밀번호가 업데이트되었습니다.");
        } else {
          // 업데이트에 실패한 경우
          console.error("비밀번호 업데이트에 실패했습니다.");
        }
      } else {
        throw new Error("Access token not found");
      }
    } catch (error) {
      console.error("비밀번호 업데이트 중 오류가 발생했습니다.", error);
    }
  }
}

export default UserService;
