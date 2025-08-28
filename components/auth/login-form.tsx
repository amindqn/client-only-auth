"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Spinner from "@/components/Spinner";
import PhoneField from "@/components/auth/phone-field";
import { isValidIranianMobile } from "@/lib/validation";
import { setStoredUser } from "@/lib/storage";
import type { AuthUser } from "@/lib/types";
import { fetchRandomAuthUser } from "@/lib/api/random-user";

export default function LoginForm() {
    const router = useRouter();
    const [phone, setPhone] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const valid = isValidIranianMobile(phone);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setError(null);

        if (!valid) {
            setError("شماره موبایل معتبر نیست. یکی از فرمت‌های 09xxxxxxxxx یا +989xxxxxxxxx یا 00989xxxxxxxxx را وارد کنید.");
            return;
        }

        try {
            setLoading(true);
            const user: AuthUser = await fetchRandomAuthUser(phone);
            setStoredUser(user);
            router.replace("/dashboard");
        } catch (err) {
            console.error(err);
            setError("مشکلی پیش آمد. دوباره تلاش کنید.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-4"
            noValidate
        >
            <PhoneField
                value={phone}
                onChange={setPhone}
                error={error}
            />

            <Button
                type="submit"
                disabled={loading}
                aria-busy={loading}
                className="w-full"
            >
                {loading ? (
                    <span className="inline-flex items-center gap-2">
                        <Spinner label="Logging in" /> در حال ورود…
                    </span>
                ) : (
                    "ورود"
                )}
            </Button>

            <p className="mt-2 text-xs text-[color:var(--muted)]">
                با کلیک روی «ورود» یک درخواست GET به <code>randomuser.me</code> ارسال و داده‌ها در <code>localStorage</code> ذخیره می‌شود.
            </p>
        </form>
    );
}
