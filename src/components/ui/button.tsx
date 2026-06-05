import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium cursor-pointer transition-all duration-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 font-mono",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground border-2 border-[#3D6B21] shadow-[3px_3px_0px_#1A3A10] hover:bg-primary/90 hover:shadow-[4px_4px_0px_#1A3A10] active:shadow-[1px_1px_0px_#1A3A10] active:translate-x-0.5 active:translate-y-0.5",
        destructive: "bg-destructive text-destructive-foreground border-2 border-[#8A1010] shadow-[3px_3px_0px_rgba(0,0,0,0.5)] hover:bg-destructive/90",
        outline:
          "border-2 border-[#5A5A5A] bg-[#2D2D2D] text-[#F5F5F5] shadow-[3px_3px_0px_rgba(0,0,0,0.5)] hover:bg-[#3A3A3A] hover:border-[#8A8A8A] active:shadow-[1px_1px_0px_rgba(0,0,0,0.5)] active:translate-x-0.5 active:translate-y-0.5",
        secondary: "bg-secondary text-secondary-foreground border-2 border-[#2A5CA0] shadow-[3px_3px_0px_rgba(0,0,0,0.5)] hover:bg-secondary/80",
        ghost: "hover:bg-[#3A3A3A] hover:text-[#F5F5F5]",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
