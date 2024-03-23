// user.service.ts

import axios from "axios";
import { UserDTO } from "./user.model";

export async function createUser(userData: UserDTO) {
    try {
        const response = await axios.post(`http://localhost:3000/users/create`, userData);
        return response.data;
    } catch (error: unknown) { 
        throw new Error(`Erro ao criar usuário: ${(error as Error).message}`);
    }
}
