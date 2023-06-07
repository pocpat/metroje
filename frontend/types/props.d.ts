export interface BedroomsSelectProps {
    bed: number;
    setBed: (value: number) => void;
  }
  
  export interface RentmaxSelectLabelsProps {
    rmax: number;
    setRmax: (value: number) => void;
  }
  
  interface RentminSelectLabelsProps {
    rmin: number;
    setRmin: (value: number) => void;
  }
  
  
  export interface SearchPanelProps {
    onSearchResults: (results: any) => void;
  }
  
  export interface RefineSearchProps {
    openModal: boolean;
    onCloseModal: () => void;
  }
  