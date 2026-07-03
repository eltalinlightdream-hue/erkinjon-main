import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[11px] font-semibold leading-normal whitespace-nowrap font-sans transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        // Soft tinted pills — bg tint + matching darker text, one pill shape.
        default: "border-transparent bg-[var(--badge-new-bg)] text-[var(--badge-new-fg)]",
        secondary: "border-transparent bg-[var(--badge-neutral-bg)] text-[var(--badge-neutral-fg)]",
        success: "border-transparent bg-[var(--badge-done-bg)] text-[var(--badge-done-fg)]",
        progress: "border-transparent bg-[var(--badge-progress-bg)] text-[var(--badge-progress-fg)]",
        info: "border-transparent bg-[var(--badge-info-bg)] text-[var(--badge-info-fg)]",
        destructive: "border-transparent bg-destructive/12 text-destructive",
        outline: "border-border bg-transparent text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
