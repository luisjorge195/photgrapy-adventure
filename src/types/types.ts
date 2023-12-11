import { Dispatch, SetStateAction } from "react";

export interface User  {
    userId: string,
    signInDetails: object | undefined
}
export interface ButtonOptionsProps {
    isOpen?: boolean;
    className?: string;
}
interface dataImage{
    name: string,
    url: string
  }
  export interface identificator {
    id?: dataImage | undefined;
    setOpen?: Dispatch<SetStateAction<boolean>>;
    name?:string
  }
  