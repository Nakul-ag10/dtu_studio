import { ReactNode } from "react";

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  background?: "white" | "gray";
}

export function SectionContainer({
  children,
  className = "",
  background = "white"
}: SectionContainerProps) {
  const bgClass = background === "gray" ? "bg-secondary" : "bg-white";

  return (
    <section className={`py-16 ${bgClass} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
