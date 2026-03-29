import { ReactNode } from "react";

interface MediaCardProps {
  image: string;
  title: string;
  description?: string;
  date?: string;
  onClick?: () => void;
  children?: ReactNode;
}

export function MediaCard({ image, title, description, date, onClick, children }: MediaCardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200 cursor-pointer group"
    >
      <div className="aspect-video bg-muted overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        {date && <div className="text-xs text-muted-foreground mb-2">{date}</div>}
        <h3 className="mb-2">{title}</h3>
        {description && <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>}
        {children}
      </div>
    </div>
  );
}
