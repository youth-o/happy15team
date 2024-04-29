import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import getDashboardDetails from "@/api/getDashboardDetails";
import putDashboardTitle from "@/api/putDashboardTitle";

const useUpdateDashboardTitle = (dashboardId: any) => {
  const queryClient = useQueryClient();
  const { data } = useQuery({
    queryKey: ["dashboardDetails", dashboardId],
    queryFn: () => getDashboardDetails(dashboardId),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: ({
      dashboardId, // dashboardId를 mutationFn 내부에서 받아올 수 있도록 수정
      title,
      color,
    }: {
      dashboardId: number;
      title: string;
      color: string;
    }) => putDashboardTitle(dashboardId, title, color),

    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: ["dashboards", dashboardId],
      });
      queryClient.refetchQueries({
        queryKey: ["dashboardDetails", dashboardId],
      });
    },

    onError: (error) => alert(error.message),
  });

  return {
    data,
    mutate,
    isPending,
  };
};

export default useUpdateDashboardTitle;
