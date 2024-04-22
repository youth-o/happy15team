import setModals from "@/lib/zustand";
import styles from "./ColumnCard.module.css";
import Image from "next/image";

const ColumnCard = () => {
  const { openCheckCardModal }: any = setModals();
  return (
    <div className={styles.cardWrapper} onClick={openCheckCardModal}>
      <div className={styles.cardrImage}>
        <Image
          src="/images/cardImageTest.svg"
          width={300}
          height={100}
          alt="카드이미지"
        />
      </div>
      <div className={styles.cardTitle}>cardTitle</div>
      <div className={styles.cardTag}>cardTag</div>
      <div className={styles.cardFooter}>
        <div className={styles.createdAt}>2024.04.20</div>
        <div className={styles.manager}>
          <Image
            src="/images/profileImageTest.svg"
            width={30}
            height={30}
            alt="매니저프로필"
          />
        </div>
      </div>
    </div>
  );
};

export default ColumnCard;
