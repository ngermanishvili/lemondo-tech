import create from "zustand";
import { FilterCriteria, initialFilterCriteria } from "../types/index";

interface FilterStoreState {
  filterCriteria: FilterCriteria;
  updateFilter: (newFilters: Partial<FilterCriteria>) => void;
}

export const useFilterStore = create<FilterStoreState>((set) => ({
  filterCriteria: { ...initialFilterCriteria },
  updateFilter: (newFilters) =>
    set((state) => ({
      filterCriteria: { ...state.filterCriteria, ...newFilters },
    })),
}));
