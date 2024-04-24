import styles from "./MainSection.module.css";
import Image from "next/image";
import Link from "next/link";

function MainSection() {
  return (
    <div className={styles.main}>
      <div className={styles.section}>
        <Image
          className={styles.sectionImg}
          src="/images/section.svg"
          width={722}
          height={423}
          alt="섹션이미지"
        />
        <div className={styles.textContainer}>
          <div className={styles.text}>
            <p>새로운 일정관리</p>
            <Image
              className={styles.taskifyImg}
              src="/images/taskify.svg"
              width={327}
              height={100}
              alt="로고이미지"
            />
          </div>
          <p className={styles.description}>
            피그마에 메인 설명 들어갑니다 라고만 적혀있고 왜 설명을 안 적어놓죠?
            😓
          </p>
        </div>
        <Link href="/signin">
          <button>로그인하기</button>
        </Link>
      </div>
      <div className={styles.card}>
        <div className={styles.cardContainer}>
          <div className={`${styles.cardText} ${styles.firstCard}`}>
            <p>Point 1</p>
            <h2>
              일의 우선순위를
              <br />
              관리하세요
            </h2>
          </div>
          <Image
            className={styles.firstCardImg}
            src="/images/landing1.svg"
            width={594}
            height={497}
            alt="랜딩이미지1"
          />
        </div>
        <div className={`${styles.cardContainer} ${styles.imageFirst}`}>
          <Image
            className={styles.secondCardImg}
            src="/images/landing2.svg"
            width={436}
            height={502}
            alt="랜딩이미지2"
          />
          <div className={`${styles.cardText} ${styles.secondCard}`}>
            <p>Point 2</p>
            <h2>
              해야 할 일을
              <br />
              등록하세요
            </h2>
          </div>
        </div>
        <div className={styles.article}>
          <h3>생산성을 높이는 다양한 설정 ⚡️</h3>
          <div className={styles.articleContainer}>
            <div className={styles.articleCard}>
              <div className={styles.articleImgContainer}>
                <Image
                  src="/images/landing3.svg"
                  width={300}
                  height={124}
                  alt="랜딩아티클이미지"
                />
              </div>
              <div className={styles.articleTextContainer}>
                <h5>대시보드 설정</h5>
                <p>대시보드 사진과 이름을 변경할 수 있어요.</p>
              </div>
            </div>
            <div className={styles.articleCard}>
              <div className={styles.articleImgContainer}>
                <Image
                  src="/images/landing4.svg"
                  width={300}
                  height={230}
                  alt="랜딩아티클이미지"
                />
              </div>
              <div className={styles.articleTextContainer}>
                <h5>초대</h5>
                <p>새로운 팀원을 초대할 수 있어요.</p>
              </div>
            </div>
            <div className={styles.articleCard}>
              <div className={styles.articleImgContainer}>
                <Image
                  src="/images/landing5.svg"
                  width={300}
                  height={195}
                  alt="랜딩아티클이미지"
                />
              </div>
              <div className={styles.articleTextContainer}>
                <h5>구성원</h5>
                <p>구성원을 초대하고 내보낼 수 있어요.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
