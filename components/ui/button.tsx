import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-[var(--bg)]",
    {
        variants: {
            variant: {
                default:
                    "bg-[var(--primary)] text-[var(--primary-foreground)] hover:brightness-95",
                outline: "border border-[var(--border)] bg-transparent hover:bg-[color:color-mix(in_oklch,var(--bg),var(--fg)_5%)]",
            },
            size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-11 rounded-md px-8",
            },
        },
        defaultVariants: { variant: "default", size: "default" },
    }
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
        <Comp
            className={cn(buttonVariants({ variant, size, className }), "cursor-pointer")}
            ref={ref}
            {...props}
        />
    );
});
Button.displayName = "Button";

export { buttonVariants };
