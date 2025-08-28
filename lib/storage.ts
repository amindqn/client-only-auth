import type { AuthUser } from "./types";

const STORAGE_KEY = "auth_user" as const;

export function getStoredUser(): AuthUser | null {
    if (typeof window === "undefined") return null;
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return null;
        const parsed = JSON.parse(raw) as AuthUser;
        if (!parsed?.name || !parsed?.email) return null;
        return parsed;
    } catch {
        return null;
    }
}

export function setStoredUser(user: AuthUser): void {
    if (typeof window === "undefined") return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
}

export function clearStoredUser(): void {
    if (typeof window === "undefined") return;
    localStorage.removeItem(STORAGE_KEY);
}
