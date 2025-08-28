"use client";
import { Card, CardContent } from "@/components/ui/card";

export default function ActivityCard() {
    return (
        <Card>
            <CardContent className="p-4">
                <h3 className="mb-2 text-base font-semibold">آخرین فعالیت‌ها</h3>
                <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                        <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[var(--primary)]" />
                        <span>ورود موفق با شماره ثبت‌شده</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[var(--primary)]" />
                        <span>دریافت پروفایل از سرویس randomuser</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[var(--primary)]" />
                        <span>ذخیره اطلاعات کاربر در localStorage</span>
                    </li>
                </ul>
            </CardContent>
        </Card>
    );
}
