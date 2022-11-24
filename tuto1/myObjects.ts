/** @format */

type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  creditCardDetails?: number;
};

type cardNumber = {
  cardnumber: string;
};

type cardDate = {
  cardDate: string;
};

type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };

let myUser: User = {
  _id: "1245",
  name: "h",
  email: "h@.com",
  isActive: false,
};

export {};
