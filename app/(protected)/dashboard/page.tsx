"use client";
import Spinner from "@/components/Spinner";
import { useAuthGuard, useUser } from "@/hooks/use-auth";
import DashboardHeader from "@/components/dashboard/header";
import ProfileCard from "@/components/dashboard/profile-card";
import SummaryStats from "@/components/dashboard/summary-stats";
import ActivityCard from "@/components/dashboard/activity-card";
import QuickHelpCard from "@/components/dashboard/quick-help-card";
import DashboardSection from "@/components/section/dashboard-section";

export default function DashboardPage() {
    const { ready } = useAuthGuard(true);
    const { user } = useUser();

    if (!ready) {
        return (
            <div className="flex h-[60vh] items-center justify-center text-[color:var(--muted)]">
                <Spinner label="Loading dashboard" />
            </div>
        );
    }

    if (!user) return null;

    return (
        <DashboardSection>
            <DashboardHeader name={user.name} />

            <section className="grid grid-cols-1 gap-4 md:grid-cols-12">
                <ProfileCard
                    name={user.name}
                    email={user.email}
                    phone={user.phone}
                    picture={user.picture}
                />
                <SummaryStats
                    email={user.email}
                    phone={user.phone}
                />
            </section>

            <section className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                <ActivityCard />
                <QuickHelpCard />
            </section>
        </DashboardSection>
    );
}
