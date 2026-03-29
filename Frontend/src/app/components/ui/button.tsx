import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  children: ReactNode;
}

export function Button({ variant = "primary", children, className = "", ...props }: ButtonProps) {
  const baseStyles = "px-6 py-3 rounded transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed";

  const variantStyles = {
    primary: "bg-primary text-white hover:bg-primary/90 active:bg-primary/80",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 active:bg-secondary/70",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white active:bg-primary/90",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
