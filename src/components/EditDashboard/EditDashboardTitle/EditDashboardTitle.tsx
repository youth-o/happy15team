import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import useUpdateDashboardTitle from "@/hooks/useUpdateDashboardTitle";
import ColorSelector from "@/components/ColorSelector/ColorSelector";
import Button from "@/components/Buttons/Button";
import styles from "./EditDashboardTitle.module.css";

function EditDashboardTitle() {
  const [inputValue, setInputValue] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const router = useRouter();
  const { boardId } = router.query;
  const { data, mutate, isPending } = useUpdateDashboardTitle(
    boardId as string
  );

  useEffect(() => {
    setSelectedColor(data?.color ?? "");
    setInputValue(data?.title ?? "");
  }, [data]);

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({
      dashboardId: boardId as string,
      title: inputValue,
      color: selectedColor,
    });
  };

  return (
    <section className={styles.container}>
      <div className={styles.selector}>
        <h1 className={styles.title}>비브리지</h1>
        <ColorSelector
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
      </div>
      <form className={styles.inputform} onSubmit={handleFormSubmit}>
        <label className={styles.dashboardname}>대시보드 이름</label>
        <input
          id="editDashboardName"
          type="text"
          placeholder="제목을 설정해 주세요."
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          required
          className={styles.titleInput}
        />
        <div className={styles.chagebutton}>
          <Button variant="primary" disabled={isPending}>
            <p className={styles.chagebuttontext}>변경</p>
          </Button>
        </div>
      </form>
    </section>
  );
}

export default EditDashboardTitle;
