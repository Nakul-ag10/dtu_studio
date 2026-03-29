import { Link } from "react-router";
import { Button } from "../components/ui/Button";
import { SectionContainer } from "../components/ui/SectionContainer";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <SectionContainer className="min-h-[60vh] flex items-center">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-6xl md:text-8xl mb-4">404</h1>
        <h2 className="mb-4">Page Not Found</h2>
        <p className="text-muted-foreground mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <Button variant="primary">
            <Home size={20} className="mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>
    </SectionContainer>
  );
}
