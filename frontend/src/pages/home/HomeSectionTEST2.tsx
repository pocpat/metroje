import React, { useState, useEffect, useRef } from 'react';
import { useForm, UseFormReturn,  FieldValues, ChangeHandler, RefCallBack } from 'react-hook-form';
import {FormRegisterReturn} from '../../../types'
 type UseFormRegisterReturn<TFieldName extends string = string> = {
  onChange: ChangeHandler;
  onBlur: ChangeHandler;
  ref: RefCallBack;
  name: TFieldName;
  min?: string | number | undefined;
  max?: string | number | undefined;
  maxLength?: number | undefined;
  minLength?: number | undefined;
  pattern?: string | undefined;
  required?: boolean | undefined;
  disabled?: boolean | undefined;
}
 
function HomeSectionTEST2() {
  // const { register, handleSubmit, formState: { errors } }: UseFormReturn<FieldValues> = useForm<FieldValues>();
  // const onSubmit = (data: any) => console.log(data);
  // const [data, setData] = useState<any>(null);
  // const nameRef = useRef<HTMLInputElement | null>(null);

  // useEffect(() => {
  //   fetch('/api/my-data')
  //     .then(response => response.json())
  //     .then(data => setData(data));
  // }, []);

  return (
    <div>
      <h1>HomeSectionTEST2</h1>
    </div>
  );
}

export default HomeSectionTEST2;