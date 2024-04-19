import axios from "@/lib/axios";

interface SignInData {
  email: string;
  password: string;
}

const postSignIn = async ({ email, password }: SignInData) => {
  const res = await axios.post("auth/login", { email, password });
  return res.data;
};

export default postSignIn;
