import { CardData } from ".";

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
    cardData: CardData[];
    setCardData: (value: CardData[]) => void;
  }
    
  export interface RefineSearchProps {
    openModal: boolean;
    onCloseModal: () => void;
  }

  export interface CardHeroProps {
    cardData: CardData[];
    setCardData: (value: CardData[]) => void;
  }
  export interface PropertyTypesSelectProps {
    propertytype: string;
    setPropertytype: (value: string) => void;
  }
  