import { create } from 'zustand';

interface GlobalState {
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  selectedProduct: string;
  setSelectedProduct: (value: string) => void;
}

const useGlobalStore = create<GlobalState>((set) => ({
  selectedCategory: '',
  setSelectedCategory: (value: string) => set({ selectedCategory: value }),
  selectedProduct: '',
  setSelectedProduct: (product: string) => set({ selectedProduct: product }),
  searchQuery: '',
  setSearchQuery: (query: string) => set({ searchQuery: query }),
}));

export default useGlobalStore;
