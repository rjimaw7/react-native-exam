import { create } from 'zustand';

interface GlobalState {
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  selectedProduct: string;
  setSelectedProduct: (value: string) => void;
  searchUser: string;
  setSearchUser: (value: string) => void;
  pressedSearchUser: boolean;
  setPressedSearchUser: (value: boolean) => void;
}

const useGlobalStore = create<GlobalState>((set) => ({
  selectedCategory: '',
  setSelectedCategory: (value: string) => set({ selectedCategory: value }),
  selectedProduct: '',
  setSelectedProduct: (product: string) => set({ selectedProduct: product }),
  searchQuery: '',
  setSearchQuery: (query: string) => set({ searchQuery: query }),
  searchUser: '',
  setSearchUser: (value: string) => set({ searchUser: value }),
  pressedSearchUser: false,
  setPressedSearchUser: (value: boolean) => set({ pressedSearchUser: value }),
}));

export default useGlobalStore;
