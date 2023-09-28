// Filter Criteria Interface types for use in the FilterCriteria class interface methods below */
// FilterCriteria.ts
export interface FilterCriteria {
  minPrice: string;
  maxPrice: string;
  symbolMin: string;
  symbolMax: string;
  symbolCountMin: number;
  symbolCountMax: number;
  charPrefix: string;
  selectedCategories: string[];
  category: string;
  selectedDomzones: string[];
}

export const initialFilterCriteria: FilterCriteria = {
  minPrice: "",
  maxPrice: "",
  symbolMin: "",
  symbolMax: "",
  symbolCountMin: 0,
  symbolCountMax: 26,
  charPrefix: "",
  selectedCategories: [],
  category: "",
  selectedDomzones: [],
};


// SliderComponentProps
export interface SliderComponentProps {
  minPrice: string;
  maxPrice: string;
  onPriceChange: (values: [number, number]) => void;
}

// Domain definition
export interface Domain {
  id: string;
  name: string;
  priceLari: number;
  priceDollar: string;
  category: string;
}

// mastHead interface
export interface State {
  count: number;
}

export interface Actions {
  inc: () => void;
}
