import * as React from "react";
import { cn } from "@/lib/utils";

export default function PageSection({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
    return (
        <main
            className={cn("mx-auto flex w-full max-w-md flex-col justify-center px-4 py-12 sm:px-6 lg:px-8", className)}
            {...props}
        />
    );
}
