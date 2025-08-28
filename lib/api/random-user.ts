import type { AuthUser } from "@/lib/types";

export async function fetchRandomAuthUser(phone: string): Promise<AuthUser> {
    const res = await fetch("https://randomuser.me/api/?results=1&nat=us");
    if (!res.ok) throw new Error("Failed to fetch user");
    const data = await res.json();
    const u = data?.results?.[0];
    if (!u) throw new Error("No user returned");

    return {
        name: `${u.name.first} ${u.name.last}`,
        email: u.email,
        picture: u.picture?.large ?? "",
        phone,
    };
}
