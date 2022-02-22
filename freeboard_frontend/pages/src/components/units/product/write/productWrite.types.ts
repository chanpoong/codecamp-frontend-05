export interface IRegister {
  name?: string;
  remarks?: string;
  price?: number;
  contents?: string;
  title?: string;
  images?: string[];
}

export interface IVariables {
  name?: string;
  remarks?: string;
  price?: number;
  contents?: string;
  title?: string;
  images?: string[];
  input?: { any };
}

export interface IFormValues {
  name?: string;
  remarks?: string;
  price?: number;
  contents?: string;
  title?: string;
  images?: string[];
}
