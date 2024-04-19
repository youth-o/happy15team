import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";

function EditDashboardTitle() {
  const [inputValue, setInputValue] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const router = useRouter();
  const { boardId } = router.query;
  const boardIdString = boardId as string;

  //훅 만들어야함 대시보드 업데이트 훅

  // useEffect(() => {
  //   setSelectedColor(data?.color ?? '');
  //   setInputValue(data?.title ?? '');
  // }, [data]);

  // const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   mutate({
  //     dashboardId: boardIdString,
  //     title: inputValue,
  //     color: selectedColor,
  //   });
  // };

  return (
    <section>
      <div>
        <h1>비브리지</h1>
      </div>
      {/* //컬러 셀렉터 */}
      <form>
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
          <button>변경</button>
        </div>
      </form>
    </section>
  );
}

export default EditDashboardTitle;
