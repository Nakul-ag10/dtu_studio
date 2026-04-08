import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: ReactNode;
}

export default function Button({ variant = "primary", children, className = "", ...props }: ButtonProps) {
  const baseStyles = "px-6 py-3 rounded transition-all duration-200 font-medium";
  const variantStyles = {
    primary: "bg-primary text-white hover:bg-primary/90 active:bg-primary/80",
    secondary: "bg-secondary text-foreground hover:bg-secondary/80 active:bg-secondary/70 border border-border",
  };

  return (
    <button className={`${baseStyles} ${variantStyles[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
