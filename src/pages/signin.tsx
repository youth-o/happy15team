import SignInForm from "@/components/SignInForm/SignInForm";
import Link from "next/link";

function SignIn() {
  return (
    <div>
      <title>Taskify 로그인</title>
      <SignInForm />
      <div>
        회원이 아니신가요?
        <Link href="/signup">회원가입 하기</Link>
      </div>
    </div>
  );
}

export default SignIn;
