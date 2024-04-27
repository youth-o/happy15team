import styles from "./RegisterSuccessModal.module.css";
import { useRouter } from "next/router";
import modalState from "@/lib/modalState";

function RegisterSuccessModal() {
  const router = useRouter();
  const {setOpenModal} = modalState();

  const handleButtonClick = () => {
    setOpenModal("");
    router.push("/signin");
  };

  return (
    <>
      <div className={styles.modalText}>가입이 완료되었습니다!</div>
      <button className={styles.modalBtn} onClick={handleButtonClick}>
        확인
      </button>
    </>
  );
}

export default RegisterSuccessModal;
