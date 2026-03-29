interface TeamCardProps {
  name: string;
  role: string;
  image: string;
}

export function TeamCard({ name, role, image }: TeamCardProps) {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200">
      <div className="aspect-square bg-muted overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="mb-1">{name}</h3>
        <p className="text-sm text-muted-foreground">{role}</p>
      </div>
    </div>
  );
}
