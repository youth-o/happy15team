import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useQuery, useMutation, useQueryClient } from "react-query";
import getDashboardMembers from "@/api/getDashboardMembers";
import deleteDashboardMember from "@/api/deleteDashboardMember";
import { PAGENATION_SIZE } from "@/constants/pagenation";

interface DeleteMemberParams {
  memberId: number;
}

export const usePaginationDashboardMembers = () => {
  const [allPage, setAllPage] = useState(1);
  const [nowPage, setNowPage] = useState(1);
  const queryClient = useQueryClient();

  const router = useRouter();
  const { boardId } = router.query;

  const boardIdString = boardId as string;

  const { data, isLoading } = useQuery({
    queryKey: ["dashboardMembers", boardIdString, nowPage],
    queryFn: () =>
      getDashboardMembers(
        boardIdString,
        nowPage,
        PAGENATION_SIZE.DASHBOARD.MEMBERS
      ),
  });

  const { mutate } = useMutation({
    mutationFn: ({ memberId }: DeleteMemberParams) =>
      deleteDashboardMember(memberId),
    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: ["dashboardMembers", boardIdString, nowPage],
      });
      queryClient.refetchQueries({
        queryKey: ["navDashboardMembers", boardIdString],
      });
    },
  });

  useEffect(() => {
    const totalCount = data?.totalCount ?? 1;
    const calculatedAllPage = Math.ceil(
      totalCount / PAGENATION_SIZE.DASHBOARD.MEMBERS
    );
    setAllPage(calculatedAllPage === 0 ? 1 : calculatedAllPage);
  }, [data?.totalCount]);

  const handleBackwardButtonClick = () => {
    if (nowPage === 1 || isLoading) {
      return;
    }
    setNowPage(nowPage - 1);
  };

  const handleForwardButtonClick = () => {
    if (nowPage === allPage || isLoading) {
      return;
    }
    setNowPage(nowPage + 1);
  };

  const handleDeleteButtonClick = (memberId: number) => {
    if (isLoading) {
      return;
    }
    mutate({ memberId });
  };

  return {
    mutate,
    boardId: boardIdString,
    data,
    isLoading,
    allPage,
    nowPage,
    setNowPage,
    handleBackwardButtonClick,
    handleForwardButtonClick,
    handleDeleteButtonClick,
  };
};

export default usePaginationDashboardMembers;
