import { ChangeHandler, RefCallBack } from 'react-hook-form';

export interface FormRegisterReturn {
  onChange: ChangeHandler;
  onBlur: ChangeHandler;
  ref: RefCallBack;
  name: string;
  min?: string | number;
  max?: string | number;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  required?: boolean;
  disabled?: boolean;
}

export interface FormData {
  location: string;
  suburb: string;
  rentmin: number;
  rentmax: number;
  bedrooms: number;
  propertytype: string;
}

export interface CardData {
  location: string;
  suburb: string;
  rentprice: number;
  bedrooms: number;
  bathrooms: number;
  carparks: number;
  propertytype: string;
}

export interface SearchPanelProps {
  onSearchResults: (results: any) => void;
}

export interface RefineSearchProps {
  openModal: boolean;
  onCloseModal: () => void;
}
