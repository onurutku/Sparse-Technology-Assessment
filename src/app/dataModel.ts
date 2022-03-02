// export interface user {
//   name: string;
//   phone: string;
//   email: string;
//   country: string;
//   age: number;
//   color: string;
//   postalZip: string;
//   latlng: string;
// }
export class user {
  constructor(
    public name: string,
    public phone: string,
    public email: string,
    public country: string,
    public age: number,
    public color: string,
    public postalZip: string,
    public latlng: string
  ) {}
}
