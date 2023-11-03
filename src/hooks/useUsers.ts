import { create } from "zustand";
import { IUseUsers, IUser } from "./@types";
import { usersServices } from "../requests/users.service";

export const useUsers = create<IUseUsers>((set, get) => ({
   users: [],

   getUsers: () => {
    /* request */
   },

   addUser: async (formData: Omit<IUser, 'id'>) => {
    const newUser = await usersServices.create(formData);

    set(({ users }) => ({ users: [...users, newUser]}));
   },

   removeUser: async (removingId: string) => {
    await usersServices.remove(removingId);

    const { users } = get();

    const newUsers = users.filter(user => user.id !== removingId);

    set({ users: newUsers });
   }
}));
