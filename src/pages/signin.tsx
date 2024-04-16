import SignInForm from "@/components/SignInForm/SignInForm";
import Link from "next/link";

function signIn() {
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

export default signIn;
