"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function QuickHelpCard() {
    return (
        <Card>
            <CardContent className="p-4">
                <h3 className="mb-2 text-base font-semibold">راهنمای سریع</h3>
                <div className="space-y-2 text-sm text-[color:var(--muted)]">
                    <p>• از دکمهٔ بالا برای خروج استفاده کنید. پس از خروج، به صفحهٔ ورود هدایت می‌شوید.</p>
                    <p>• می‌توانید لایت/دارک را از سوییچر تم تغییر دهید؛ کل UI هماهنگ به‌روز می‌شود.</p>
                    <p>• برای توسعه بیشتر، کارت‌های جدیدی مثل «اعلان‌ها» یا «کارهای اخیر» اضافه کنید.</p>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                    <Button
                        type="button"
                        className="
              h-9
              hover:brightness-95
              dark:hover:brightness-110
            "
                    >
                        عملکرد نمونه
                    </Button>
                    <Button
                        type="button"
                        variant="outline"
                        className="
              h-9
              transition-colors
              hover:bg-[color:color-mix(in_oklch,var(--bg),var(--fg)_8%)]
              dark:hover:bg-[color:color-mix(in_oklch,var(--bg),var(--fg)_12%)]
            "
                    >
                        مستندات
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}
