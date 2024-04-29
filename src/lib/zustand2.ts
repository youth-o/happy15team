import create from 'zustand';

//zustand.ts 는 모달만 사용하는 것 같아서 2로 임시로 만들었어요
//초대수락이나 거절을 누르면 데이터변동이 있다는걸 알려주는 전역state인데
//리팩토링때 리액트쿼리로 변경할거라 임시로 2로 만들었어요

interface AppState {
  dataChange: number;
  setDataChange: (value: number) => void;
}

const useStore = create<AppState>((set) => ({
  dataChange: 0,
  setDataChange: (value: number) => set({ dataChange: value }),
}));

export default useStore;
