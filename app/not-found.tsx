"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <main className="mx-auto flex min-h-[60vh] w-full max-w-2xl flex-col items-center justify-center gap-6 px-4 text-center">
            <div>
                <h1 className="text-4xl font-extrabold tracking-tight">
                    <span className="bg-gradient-to-l from-[var(--primary)] via-indigo-600 to-fuchsia-600 bg-clip-text text-transparent dark:from-fuchsia-500 dark:via-violet-500 dark:to-sky-400">
                        صفحه پیدا نشد
                    </span>
                </h1>
                <p className="mt-2 text-sm text-[color:var(--muted)]">متأسفیم! صفحه‌ای که دنبالش بودید وجود ندارد یا جابه‌جا شده است.</p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
                <Button
                    asChild
                    className="h-10"
                >
                    <Link href="/">بازگشت به صفحه اصلی</Link>
                </Button>
                <Button
                    asChild
                    variant="outline"
                    className="
            h-10
            transition-colors
            hover:bg-[color:color-mix(in_oklch,var(--bg),var(--fg)_8%)]
            dark:hover:bg-[color:color-mix(in_oklch,var(--bg),var(--fg)_12%)]
          "
                >
                    <Link href="/login">رفتن به ورود</Link>
                </Button>
            </div>

            <div className="mt-4 rounded-xl border border-[var(--border)] bg-[var(--card-bg)] p-4 text-start backdrop-blur-md">
                <p className="text-xs text-[color:var(--muted)]">اگر فکر می‌کنید این یک خطاست، آدرس را بررسی کنید یا از منوی بالا استفاده کنید.</p>
            </div>
        </main>
    );
}
