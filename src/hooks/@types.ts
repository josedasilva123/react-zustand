export interface IUser {
   id: string;
   name: string;
   email: string;
}

export interface IUseUsers {
   users: IUser[];
   getUsers: () => void;
   addUser: (formData: Omit<IUser, "id">) => void;
   removeUser: (removingId: string) => void;
}
