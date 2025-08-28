"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Phone } from "lucide-react";

type Props = {
    value: string;
    onChange: (v: string) => void;
    error?: string | null;
};

export default function PhoneField({ value, onChange, error }: Props) {
    return (
        <div className="space-y-2">
            <Label htmlFor="phone">شماره موبایل ( ایران )</Label>
            <div className="relative">
                <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-[color:var(--muted)]">
                    <Phone className="h-4 w-4" />
                </span>
                <Input
                    id="phone"
                    name="phone"
                    placeholder="09123456789 یا +989123456789"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    inputMode="numeric"
                    autoComplete="tel"
                    aria-invalid={Boolean(error)}
                    aria-describedby={error ? "phone-error" : undefined}
                    className="pr-9"
                    required
                />
            </div>
            {error && (
                <p
                    id="phone-error"
                    role="alert"
                    className="text-xs text-red-600 dark:text-red-400"
                >
                    {error}
                </p>
            )}
        </div>
    );
}
