import { FormEvent, useEffect, useState } from "react";
import useUpdateDashboardTitle from "@/hooks/useUpdateDashboardTitle";
import ColorSelector from "@/components/ColorSelector/ColorSelector";
import Button from "@/components/Buttons/Button";
import styles from "./EditDashboardTitle.module.css";
import setModals from "@/lib/zustand";
import dashboardIdState from "@/lib/dashboardIdState";
import useStore from "@/lib/zustand2";

function EditDashboardTitle() {
  const [inputValue, setInputValue] = useState("");
  const { setDataChange } = useStore();
  const [selectedColor, setSelectedColor] = useState("");
  const { dashboardData }: any = setModals();
  const { savedDashboardId } = dashboardIdState();
  const { data, mutate, isPending } = useUpdateDashboardTitle(savedDashboardId); // savedDashboardId를 전달

  useEffect(() => {
    if (data) {
      setSelectedColor(data.color);
      setInputValue(data.title);
    }
  }, [data]);

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({
      dashboardId: savedDashboardId, // mutate 함수에 dashboardId를 전달
      title: inputValue,
      color: selectedColor,
    });
    setDataChange(1234);
  };

  return (
    <section className={styles.container}>
      <div className={styles.selector}>
        <h1 className={styles.title}>{dashboardData.title}</h1>
        <ColorSelector
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
      </div>
      <form className={styles.inputform} onSubmit={handleFormSubmit}>
        <label className={styles.dashboardname}>대시보드 이름</label>
        <div className={styles.border}>
          <input
            id="editDashboardName"
            type="text"
            placeholder="제목을 설정해 주세요."
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            required
            className={styles.titleInput}
            maxLength={10}
          />
        </div>
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
