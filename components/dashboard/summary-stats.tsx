"use client";
import { Card, CardContent } from "@/components/ui/card";

type Props = {
    email: string;
    phone: string;
    lastLoginLabel?: string;
};

export default function SummaryStats({ email, phone, lastLoginLabel = "همین حالا" }: Props) {
    return (
        <Card className="md:col-span-7">
            <CardContent className="p-4">
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                    <div className="rounded-lg border border-[var(--border)] p-3 text-center">
                        <div className="text-xs text-[color:var(--muted)]">آخرین ورود</div>
                        <div className="mt-1 text-sm">{lastLoginLabel}</div>
                    </div>
                    <div dir="ltr" className="rounded-lg border border-[var(--border)] p-3 text-center">
                        <div className="text-xs text-[color:var(--muted)]">ایمیل</div>
                        <div className="mt-1 text-sm truncate">{email}</div>
                    </div>
                    <div className="rounded-lg border border-[var(--border)] p-3 text-center">
                        <div className="text-xs text-[color:var(--muted)]">شماره</div>
                        <div className="mt-1 text-sm ltr">{phone}</div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
