import { create } from 'zustand';

interface DateStore {
  selectedDate: Date;
  setSelectedDate: (date: Date | null) => void;
}

const useDateStore = create<DateStore>((set: any) => ({
  selectedDate: new Date(),
  setSelectedDate: (date: any) => set({ selectedDate: date }),
}));

export default useDateStore;