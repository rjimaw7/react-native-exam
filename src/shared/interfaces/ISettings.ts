export type SettingsFormData = {
  name: string;
  description: string;
  price: string;
};

export interface IProductCreate {
  name: string;
  description: string;
  price: string;
}

export interface IProductCreateResponse {
  id: string;
  name: string;
  description: string;
  price: string;
}
