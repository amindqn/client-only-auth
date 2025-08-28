import type { Metadata } from "next";
import "./globals.css";
import ThemeToggle from "@/components/theme-toggle";
import { ThemeProvider } from "@/context/theme-provider";
import { IBM_Plex_Sans_Arabic, IBM_Plex_Sans, Beiruti } from "next/font/google";

const ibmArabic = IBM_Plex_Sans_Arabic({
    subsets: ["arabic"],
    weight: ["100", "200", "300", "400", "500", "600", "700"],
    variable: "--font-arabic",
});
const ibm = IBM_Plex_Sans({
    subsets: ["latin"],
    variable: "--font-latin",
});
const beiruti = Beiruti({
    subsets: ["arabic"],
    variable: "--font-display",
});
export const metadata: Metadata = {
    title: "Client Auth Demo",
    description: "Login & Dashboard with client-side localStorage (Next.js + TS + Tailwind + shadcn/ui)",
    icons: {
        icon: [{ url: "/favicon.svg" }],
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html
            lang="fa"
            dir="rtl"
            suppressHydrationWarning
            className={`${ibmArabic.variable} ${ibm.variable} ${beiruti.variable}`}
        >
            <body className="min-h-dvh [background-image:var(--app-bg)]">
                <ThemeProvider>
                    <div className="mx-auto w-full max-w-screen-xl p-4 md:p-6 lg:p-10">
                        <header className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                            <h1 className="text-lg font-semibold text-[color:var(--fg)]">سیستم ورود و داشبورد</h1>
                            <ThemeToggle />
                        </header>
                        {children}
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
