import { User } from "../../config/definitions";
import type { StateSlice } from "../store";
import { v4 as uuid } from "uuid";

export interface UsersSlice {
  users: User[];
  addUser: (newUser: Pick<User, "name" | "password">) => void;
  getUser: (id: string) => User | undefined;
  checkCredentials: (name: string, password: string) => User | undefined;
}

const createUsersSlice: StateSlice<UsersSlice> = (set, get) => ({
  users: [],
  addUser: (newUser) =>
    set((state) => {
      state.users.users = [
        ...state.users.users,
        { ...newUser, id: uuid(), picture: "", contacts: [] },
      ];
    }),
  getUser: (id) => get().users.users.find((user) => user.id === id),
  checkCredentials: (name, password) =>
    get().users.users.find(
      (user) => user.name === name && user.password === password
    ),
});

export default createUsersSlice;
