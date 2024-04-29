import create from 'zustand';

interface dashboardIdState {
  savedDashboardId: number;
  setSavedDashboardId: (value: number) => void;
}

const dashboardIdState = create<dashboardIdState>((set) => ({
  savedDashboardId: 0,
  setSavedDashboardId: (value: number) => set({ savedDashboardId: value }),
}));

export default dashboardIdState;
