import { useMutation } from "react-query";
import { useRouter } from "next/router";
import deleteDashboard from "@/api/deleteDashboard";

export default function useDeleteDashboard() {
  const router = useRouter();
  const boardId = Array.isArray(router.query.boardId)
    ? router.query.boardId[0]
    : router.query.boardId;

  const { mutate } = useMutation(() => deleteDashboard(boardId), {
    onSuccess: () => {
      router.push("/mydashboard");
    },
  });

  const handleDashboardDeleteButtonClick = () => {
    mutate();
  };

  return { handleDashboardDeleteButtonClick };
}
