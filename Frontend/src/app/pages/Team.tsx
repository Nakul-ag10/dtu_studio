import { SectionContainer } from "../components/ui/SectionContainer";
import { TeamCard } from "../components/ui/TeamCard";
import { Users } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function Team() {
  const team = {
    head: [
      {
        name: "Dr. Rajesh Kumar",
        role: "Faculty In-charge",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      },
    ],
    coordinators: [
      {
        name: "Priya Sharma",
        role: "Head Coordinator",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      },
      {
        name: "Arjun Patel",
        role: "Technical Coordinator",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      },
      {
        name: "Ananya Verma",
        role: "Creative Coordinator",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      },
    ],
    photographers: [
      {
        name: "Rahul Singh",
        role: "Lead Photographer",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      },
      {
        name: "Sneha Reddy",
        role: "Photographer",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
      },
      {
        name: "Vikram Malhotra",
        role: "Photographer",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
      },
    ],
    videographers: [
      {
        name: "Karan Mehta",
        role: "Lead Videographer",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
      },
      {
        name: "Isha Gupta",
        role: "Videographer",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop",
      },
    ],
    content: [
      {
        name: "Aditya Joshi",
        role: "Content Writer",
        image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop",
      },
      {
        name: "Neha Kapoor",
        role: "Social Media Manager",
        image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop",
      },
      {
        name: "Rohan Desai",
        role: "Graphics Designer",
        image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=400&h=400&fit=crop",
      },
    ],
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-80 flex items-center justify-center overflow-hidden">
        {/* <ImageWithFallback
          src="https://images.unsplash.com/photo-1758270705518-b61b40527e76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
          alt="Our Team"
          className="w-full h-full object-cover"
        /> */}
        <div className="absolute inset-0 bg-primary" />
        <div className="relative z-10 text-center px-4">
          <Users className="w-16 h-16 text-white mx-auto mb-4" />
          <h1 className="text-5xl text-white mb-4">Our Team</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Meet the dedicated individuals who make DTU Studio the premier media cell of Delhi Technological University
          </p>
        </div>
      </div>

      <SectionContainer className="bg-gradient-to-b from-gray-50 to-white">
        {/* Faculty Head */}
        <div className="mb-16">
          <h2 className="text-center mb-8 text-primary">Faculty In-charge</h2>
          <div className="max-w-xs mx-auto">
            {team.head.map((member, index) => (
              <TeamCard key={index} {...member} />
            ))}
          </div>
        </div>

        {/* Coordinators */}
        <div className="mb-16">
          <h2 className="text-center mb-8 text-primary">Student Coordinators</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {team.coordinators.map((member, index) => (
              <TeamCard key={index} {...member} />
            ))}
          </div>
        </div>

        {/* Photographers */}
        <div className="mb-16">
          <h2 className="text-center mb-8 text-primary">Photography Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {team.photographers.map((member, index) => (
              <TeamCard key={index} {...member} />
            ))}
          </div>
        </div>

        {/* Videographers */}
        <div className="mb-16">
          <h2 className="text-center mb-8 text-primary">Videography Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {team.videographers.map((member, index) => (
              <TeamCard key={index} {...member} />
            ))}
          </div>
        </div>

        {/* Content Team */}
        <div>
          <h2 className="text-center mb-8 text-primary">Content & Design Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {team.content.map((member, index) => (
              <TeamCard key={index} {...member} />
            ))}
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
