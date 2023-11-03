/* eslint-disable @typescript-eslint/no-unused-vars */

import { IUser } from "../hooks/@types";
import { api } from "../services/api"

const create = async (formData: Omit<IUser, "id">) => {
    try {
        const { data } = await api.post("/", formData);

        return data;
    } catch (error) {
        console.log(error);
    }
}

const remove = async (removingId: string) => {
    try {
        api.delete(`/${removingId}`);        
    } catch (error) {
        console.log(error)
    }
}

export const usersServices = { create, remove };