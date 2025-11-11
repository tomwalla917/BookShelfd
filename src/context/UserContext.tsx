import { useState } from "react";
import {defaultUser, User} from "../types/User";

export function useUser() {
    const [user] = useState<User>(() => {
        try {
            const raw = localStorage.getItem("user");
            return raw ? (JSON.parse(raw) as User) : defaultUser;
        } catch {
            return defaultUser;
        }
    });
    return { user };
}