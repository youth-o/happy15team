import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import useUpdateDashboardTitle from "@/hooks/useUpdateDashboardTitle";
import ColorSelector from "@/components/ColorSelector/ColorSelector";

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
    <section>
      <div>
        <h1>비브리지</h1>
      </div>
      <ColorSelector
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
      />
      <form onSubmit={handleFormSubmit}>
        <label>대시보드 이름</label>
        <input
          id="editDashboardName"
          type="text"
          placeholder="제목을 설정해 주세요."
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          required
        />
        <div>
          <button type="submit" disabled={isPending}>
            변경
          </button>
          {/* 버튼 컴포넌트로 뺄까..? 고민중 */}
        </div>
      </form>
    </section>
  );
}

export default EditDashboardTitle;
