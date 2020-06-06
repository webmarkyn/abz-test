import { User } from "./types";

export const sortByRegistraion = (arr: User[]): User[] => {
  return arr.sort(
    (a, b) => b.registration_timestamp - a.registration_timestamp
  );
};
