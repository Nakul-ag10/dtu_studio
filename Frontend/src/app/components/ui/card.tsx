import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
}

export function Card({ children, className = "", hoverable = false }: CardProps) {
  return (
    <div
      className={`bg-card border border-border rounded-lg p-6 ${
        hoverable ? "hover:shadow-lg transition-shadow duration-200 cursor-pointer" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
