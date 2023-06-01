import { ChangeHandler, RefCallBack } from "react-hook-form";

declare module "*.jpg";
declare module "*.png";

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