export interface NavBarProps {
  setHide(data: boolean): void;
  hide: boolean;
}
export interface HomeProps {
  setCars(data: object[]): void;
  data: object[];
  cars: object[];
  hide: boolean;
}
export interface SingleItemProps {
  hide: boolean;
  car: any;
}
