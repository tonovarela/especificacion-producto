
export interface Usuario {
    id:string;
    nombre:string;
    usermane:string;
    areasPermitidas: string[];  
  }
  export enum StatutLogin {
    LOGIN ="LOGIN",
    LOGOUT="LOGOUT",
    ERROR="ERROR",
    LOADING="LOADING"
  }