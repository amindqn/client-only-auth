"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import type { AuthUser } from "@/lib/types";
import { getStoredUser } from "@/lib/storage";

export function useUser() {
    const [user, setUser] = useState<AuthUser | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setUser(getStoredUser());
        setLoading(false);
    }, []);

    return { user, loading } as const;
}

export function useAuthGuard(expectAuthed: boolean) {
    const router = useRouter();
    const { user, loading } = useUser();

    useEffect(() => {
        if (loading) return;
        if (expectAuthed && !user) router.replace("/login");
        if (!expectAuthed && user) router.replace("/dashboard");
    }, [expectAuthed, user, loading, router]);

    return { ready: !loading } as const;
}
