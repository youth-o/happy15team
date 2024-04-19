import styles from "./MyPagePasswordForm.module.css";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

function PasswordForm() {
  // react-hook-form, yup 라이브러리를 통해 유효성 검사
  const formSchema = yup.object({
    nowPassword: yup.string().required(""),
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
    formState: { errors, isValid },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(formSchema),
  });

  return (
    <form className={styles.form}>
      <div className={styles.profileLabel}>비밀번호 변경</div>
      <div className={styles.inputContainer}>
        <div className={styles.editContainer}>
          <label htmlFor="nowPassword">현재 비밀번호</label>
          <input
            className={styles.nowPasswordInput}
            type="text"
            id="nowPassword"
            placeholder="현재 비밀번호 입력"
            {...register("nowPassword")}
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
