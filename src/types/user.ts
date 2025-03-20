export type TUser = {
  _id: string;
  name: string;
  email: string;
  number?: number;
  role: "user" | "admin";
};
