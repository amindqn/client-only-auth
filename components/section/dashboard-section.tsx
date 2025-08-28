import * as React from "react";
import { cn } from "@/lib/utils";

export default function DashboardSection({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
    return (
        <main
            className={cn("space-y-6", className)}
            {...props}
        />
    );
}
