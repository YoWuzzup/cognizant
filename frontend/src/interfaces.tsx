export interface NavBarProps {
  setHide(data: boolean): void;
  hide: boolean;
  cartLength: number;
}

export interface HomeProps {
  setCars(data: object[]): void;
  cars: object[];
  data: object[];
  hide: boolean;
}

export interface SingleItemProps {
  hide: boolean;
  car: any;
}

export interface ItemProps {
  setCart(data: any): void;
  setCar(data: object[]): void;
  cart: object[];
  car: any;
}

export interface CartProps {
  setCart(data: any): void;
  cart: object[];
}
