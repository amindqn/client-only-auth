"use client";

import { useAuthGuard } from "@/hooks/use-auth";
import PageSection from "@/components/section/page-section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import LoginForm from "@/components/auth/login-form";

export default function LoginPage() {
    useAuthGuard(false);

    return (
        <PageSection>
            <div className="mb-6 text-center">
                <h1 className="text-3xl font-extrabold tracking-tight">
                    <span className="bg-gradient-to-l from-[var(--primary)] via-indigo-600 to-fuchsia-600 bg-clip-text text-transparent dark:from-fuchsia-500 dark:via-violet-500 dark:to-sky-400">
                        ورود
                    </span>
                </h1>
                <p className="mt-2 text-sm text-[color:var(--muted)]">با شماره موبایل ایران وارد شوید</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle className="text-base">اعتبارسنجی شماره</CardTitle>
                </CardHeader>
                <CardContent>
                    <LoginForm />
                </CardContent>
            </Card>
        </PageSection>
    );
}
