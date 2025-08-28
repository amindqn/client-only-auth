"use client";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { clearStoredUser } from "@/lib/storage";
import { useRouter } from "next/navigation";

export default function DashboardHeader({ name }: { name: string }) {
    const router = useRouter();

    return (
        <header className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <h1 className="text-2xl font-bold tracking-tight">
                <span className="bg-gradient-to-l from-[var(--primary)] via-indigo-600 to-fuchsia-600 bg-clip-text text-transparent dark:from-fuchsia-500 dark:via-violet-500 dark:to-sky-400">
                    سلام، {name} 👋
                </span>
            </h1>

            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    clearStoredUser();
                    router.replace("/login");
                }}
            >
                <Button
                    type="submit"
                    variant="outline"
                    className="
            gap-2
            transition-colors
            hover:bg-[color:color-mix(in_oklch,var(--bg),var(--fg)_8%)]
            dark:hover:bg-[color:color-mix(in_oklch,var(--bg),var(--fg)_12%)]
          "
                >
                    <LogOut className="h-4 w-4" /> خروج
                </Button>
            </form>
        </header>
    );
}
