import instance from "@/lib/axios";

interface SignInData {
  email: string;
  password: string;
}

const postSignIn = async (userData: SignInData) => {
  try {
    const response = await instance.post("/auth/login", userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default postSignIn;
