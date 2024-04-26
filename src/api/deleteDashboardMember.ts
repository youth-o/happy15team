import instance from "@/lib/axios";
import { DashboardMembers } from "@/types/interface";

const deleteDashboardMember = async (memberId: number) => {
  const { data } = await instance.delete<DashboardMembers>(
    `/members/${memberId}`
  );
  return data;
};

export default deleteDashboardMember;
