import instance from "@/lib/axios";

interface SignInData {
  email: string;
  password: string;
}

const postSignIn = async ({ email, password }: SignInData) => {
  const res = await instance.post("auth/login", { email, password });
  return res.data;
};

export default postSignIn;
