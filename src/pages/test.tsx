import useStore from "@/lib/zustand2";
import Image from "next/image";
import UserService from "@/api/UserService";
import { useEffect, useState } from "react";
import { UserData } from "@/types/interface";

type UserFormInput = Pick<UserData, "email" | "nickname" | "profileImageUrl">;

function Test() {
  const { dataChange, setDataChange } = useStore();
  const [formData, setFormData] = useState<UserFormInput>({
    email: "",
    nickname: "",
    profileImageUrl: "",
  });

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("accessToken");
      if (token) {
        try {
          const userData = await UserService.getUserData();
          setFormData(userData);
          setDataChange(false);
          // 사용자 정보를 처리
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };
    fetchUserData();
  }, [dataChange]);

  return <Image src={formData.profileImageUrl} width={180} height={180} />;
}

export default Test;
