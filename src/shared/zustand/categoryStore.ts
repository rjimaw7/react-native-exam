import { create } from 'zustand';

interface GlobalState {
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
  searchQuery: string;
  setSearchQuery: (value: string) => void;
}

const useGlobalStore = create<GlobalState>((set) => ({
  selectedCategory: '',
  setSelectedCategory: (value: string) => set({ selectedCategory: value }),
  searchQuery: '',
  setSearchQuery: (value: string) => set({ searchQuery: value }),
}));

export default useGlobalStore;
