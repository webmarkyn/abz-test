import { User } from "./types";

export const getUsers = async (
  page: number,
  count: number
): Promise<User[]> => {
  try {
    const res = await fetch(
      `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=${count}`
    );
    const data = await res.json();
    return data.users;
  } catch (e) {
    throw new Error(`Something went wrong: ${e}`);
  }
};

export const getToken = async (): Promise<string> => {
  try {
    const res = await fetch(
      "https://frontend-test-assignment-api.abz.agency/api/v1/token"
    );
    const data = await res.json();
    return data.token;
  } catch (e) {
    throw new Error(`Something went wrong: ${e}`);
  }
};
