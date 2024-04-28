import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useQuery, useMutation, useQueryClient } from "react-query";
import getDashboardInvitations from "@/api/getDashboardInvitations";
import deleteDashboardInvitation from "@/api/deleteDashboardInvitations";
import { PAGENATION_SIZE } from "@/constants/pagenation";

export const usePagenationDashboardInvitations = () => {
  const [allPage, setAllPage] = useState(1);
  const [nowPage, setNowPage] = useState(1);
  const queryClient = useQueryClient();
  const router = useRouter();
  const { boardId } = router.query;
  const dashboardId = Number(boardId);

  const { data, isLoading } = useQuery({
    queryKey: ["invitations", dashboardId, nowPage],
    queryFn: () => getDashboardInvitations(dashboardId, nowPage),
  });

  const { mutate, isLoading: isDeletePending } = useMutation({
    mutationFn: ({ invitationId }: { invitationId: number }) =>
      deleteDashboardInvitation(dashboardId, invitationId),

    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: ["invitations", dashboardId],
      });
    },
  });

  useEffect(() => {
    const totalCount = data?.totalCount ?? 1;
    const calculatedAllPage = Math.ceil(
      totalCount / PAGENATION_SIZE.DASHBOARD.INVITATIONS
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

  const handleDeleteButtonClick = (invitationId: number) => {
    if (isDeletePending) {
      return;
    }
    mutate({ invitationId });
  };

  return {
    mutate,
    boardId,
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

export default usePagenationDashboardInvitations;
