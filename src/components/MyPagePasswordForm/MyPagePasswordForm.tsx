import styles from "./MyPagePasswordForm.module.css";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "@/lib/axios";

function PasswordForm() {
  // react-hook-form, yup 라이브러리를 통해 유효성 검사
  const formSchema = yup.object({
    password: yup.string().required(""),
    newPassword: yup
      .string()
      .required("새 비밀번호를 입력해 주세요.")
      .min(8, "8자 이상 입력해 주세요.")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,15}$/,
        "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요."
      ),
    confirmNewPassword: yup
      .string()
      .oneOf([yup.ref("newPassword")], "비밀번호가 일치하지 않습니다."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(formSchema),
  });

  const onSubmit = async (data) => {
    // localStorage에서 accessToken의 비밀번호를 가져옴
    const token = localStorage.getItem("accessToken");
    const { password, newPassword } = data;

    // // 입력한 현재 비밀번호와 localStorage에 저장된 비밀번호를 비교
    // if (nowPassword !== storedPassword) {
    //   alert("현재 비밀번호가 틀립니다.");
    //   return;
    // }
    if (token) {
      try {
        // Axios를 사용하여 PUT 요청을 보내어 새로운 비밀번호로 업데이트
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
      } catch (error) {
        console.error("비밀번호 업데이트 중 오류가 발생했습니다.", error);
      }
    }

    // 비밀번호 변경 로직 실행
    // 여기서는 간단히 alert로 표시하도록 하겠습니다.
    // alert("비밀번호가 성공적으로 변경되었습니다.");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.profileLabel}>비밀번호 변경</div>
      <div className={styles.inputContainer}>
        <div className={styles.editContainer}>
          <label htmlFor="nowPassword">현재 비밀번호</label>
          <input
            className={styles.nowPasswordInput}
            type="text"
            id="nowPassword"
            placeholder="현재 비밀번호 입력"
            {...register("password")}
          />
        </div>
        <div className={styles.editContainer}>
          <label htmlFor="newPassword">새 비밀번호</label>
          <input
            className={errors.newPassword ? styles.errorFocus : styles.notError}
            type="text"
            id="newPassword"
            placeholder="새 비밀번호 입력"
            {...register("newPassword")}
          />
        </div>
        {errors.newPassword && (
          <div className={styles.error}>
            {errors.newPassword.message as string}
          </div>
        )}
        <div className={styles.editContainer}>
          <label htmlFor="confirmNewPassword">새 비밀번호 확인</label>
          <input
            className={
              errors.confirmNewPassword ? styles.errorFocus : styles.notError
            }
            type="text"
            id="confirmNewPassword"
            placeholder="새 비밀번호 입력"
            {...register("confirmNewPassword")}
          />
        </div>
        {errors.confirmNewPassword && (
          <div className={styles.error}>
            {errors.confirmNewPassword.message as string}
          </div>
        )}
      </div>
      <button className={styles.formBtn} disabled={!isValid}>
        변경
      </button>
    </form>
  );
}

export default PasswordForm;
