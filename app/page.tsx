"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getStoredUser } from "@/lib/storage";
import Spinner from "@/components/Spinner";

export default function Home() {
    const router = useRouter();

    useEffect(() => {
        const user = getStoredUser();
        router.replace(user ? "/dashboard" : "/login");
    }, [router]);

    return (
        <div className="flex items-center justify-center py-24 text-center">
            <div className="flex items-center gap-3 text-gray-500">
                <Spinner />
                <p>Redirecting…</p>
            </div>
        </div>
    );
}
