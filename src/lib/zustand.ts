import dashboard from "@/pages/dashboard/[id]";
import { create } from "zustand";

//Todo
//모달 이름 case화 해서 페이지 최상단에 코드 한줄로 적용시키기

const setModals = create((set) => ({
  modalState: false,
  openModal: () => set({ modalState: true }),
  closeModal: () => set({ modalState: false }),
  nicknameError: false, // 닉네임 10자 이상 에러
  samePassword: false, // 현재 비밀번호와 새 비밀번호 중복
  changePassword: false, // 비밀번호 변경 성공
  dashboardData: {
    id: "",
    title: "",
    userId: "",
    createdByMe: false,
  },

  loginUserData: { id: "", email: "", nickname: "", profileImageUrl: "" },
  cardImageUrl: "",
  rerender: "",


  
  draggingCard : "",
  dashboardMembers: [{
     userId: "" 
  }],
  dashboardId: 0,
  onDragging:false,

  openedModalId: "",
  confirmCardData: [],
  openedCardData: "",
  isFetching: false,
  commentRender: false,
  cardLength: [],
  reload: false,
  setReload:(data:any)=>set({ reload : data}),
  setCardLength:(data:any)=>set({ cardLength : data}),
  setOnDragging:(data:any)=>set({onDragging : data}),
  setDraggingCard:(data:any)=>set({draggingCard : data}),
  setOpenedCardData:(data:any) => set({ openedCardData: data }),
  setRerender:(state:any) => set({ rerender: state }),
  setRerenderDone: () => set({ rerender: false }),
  setCommentRenderDone: () => set({ commentRender: false }),
  setCommentRender: () => set({ commentRender: true }),
  setDashboardId: (id: number) => set({ dashboardId: id }),
  setCardImageUrl: (data: string) => set({ cardImageUrl: data }),
  setIsFetching: (data:any) => set({ isFetching: data }),
  setConfirmCardData: (data: any) => set({ confirmCardData: data }),
  setOpenedModalId: (data: any) => set({ openedModalId: data }),
  setDashboardMembers: (data: any) => set({ dashboardMembers: data }),
  setLoginUserData: (data: any) => set({ loginUserData: data }),
  setDashboardData: (data: any) => set({ dashboardData: data }),
}));

export default setModals;
