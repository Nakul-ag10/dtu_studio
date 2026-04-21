import { motion } from "motion/react";
import { Camera, Video, Palette, Pen, Film, LucideIcon } from "lucide-react";

interface TeamMember {
  name: string;
  designation: string;
  image: string;
  icon: LucideIcon;
}

interface MemberCardProps {
  member: TeamMember;
  index: number;
  side: "left" | "right";
}

interface TeamColumnProps {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  members: TeamMember[];
  side: "left" | "right";
  accentClass: string;
}

export default function StudioTeam() {
  const cameraTeam: TeamMember[] = [
    {
      name: "Mr. Sushil Kumar",
      designation: "Sr. Cameraman",
      image: "Mr.SKumar.png",
      icon: Camera,
    },
    {
      name: "Mr. Naresh Nautiyal",
      designation: "Cameraman",
      image: "Mr.Nautiyal.png",
      icon: Camera,
    },
    {
      name: "Mr. Naveen Kumar",
      designation: "MTS (Spec: Cameras & Tool Management)",
      image: "Mr.NKumar.png",
      icon: Film,
    },
  ];

  const contentMediaTeam: TeamMember[] = [
    {
      name: "Mr. Hariom Dwivedi",
      designation: "Content Writer / Digital Content Creator",
      image: "Mr.HDwivedi.png",
      icon: Pen,
    },
    {
      name: "Mr. Mohd. Anees",
      designation: "Video Editor, Media Manager",
      image: "Mr.MAnees.png",
      icon: Video,
    },
    {
      name: "Ms. Parvathi Nair",
      designation: "Graphic Designer & Content Writer",
      image: "Ms.PNair.png",
      icon: Palette,
    },
  ];

  const MemberCard = ({ member, index, side }: MemberCardProps) => (
    <motion.div
      key={member.name}
      initial={{ opacity: 0, x: side === "left" ? -24 : 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="group bg-white rounded-xl border border-border overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
    >
      <div className="flex flex-row">
        <div className="relative flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute bottom-1.5 right-1.5 w-7 h-7 bg-primary rounded-md flex items-center justify-center shadow">
            <member.icon className="text-white" size={14} />
          </div>
        </div>

        <div className="flex flex-col justify-center px-4 py-3 flex-1 min-w-0">
          <h3 className="text-sm sm:text-base font-semibold text-foreground leading-snug truncate">
            {member.name}
          </h3>
          <p className="text-xs sm:text-sm text-primary font-medium mt-0.5 leading-snug line-clamp-2">
            {member.designation}
          </p>
        </div>
      </div>
    </motion.div>
  );

  const TeamColumn = ({ title, subtitle, icon: Icon, members, side, accentClass }: TeamColumnProps) => (
    <div className="flex-1 min-w-0">
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className={`rounded-xl p-5 mb-5 border ${accentClass}`}
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <Icon className="text-primary" size={20} />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-foreground leading-tight">{title}</h2>
            <p className="text-xs text-muted-foreground mt-0.5">{subtitle}</p>
          </div>
        </div>
      </motion.div>

      <div className="space-y-3">
        {members.map((member, index) => (
          <MemberCard key={member.name} member={member} index={index} side={side} />
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-secondary/20">
      {/* Hero */}
      <div
        className="relative overflow-hidden text-white py-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/bg-11.png')" }}
      >
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative mx-auto px-6 lg:px-8 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs uppercase tracking-widest text-white/50 mb-3 font-medium">
              DTU Media Cell
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold mb-4">Studio Team</h1>
            <div className="w-10 h-0.5 bg-primary mb-5" />
            <p className="text-base text-white/80 max-w-xl leading-relaxed">
              Meet the dedicated individuals behind DTU Media Cell who work tirelessly to capture
              and share our university's story through compelling visuals and engaging content.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main content */}
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl py-12">
        <div className="mb-10 text-center">
          <h2 className="mb-3">Our Creative Professionals</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
            A dedicated team of skilled media professionals committed to excellence in photography,
            videography, design, and digital content creation.
          </p>
        </div>

        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-border" />
          <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium px-2">
            Meet the Team
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
          <TeamColumn
            title="Camera Team"
            subtitle="Photography & Cinematography"
            icon={Camera}
            members={cameraTeam}
            side="left"
            accentClass="bg-white border-border"
          />

          {/* Vertical divider — desktop only */}
          <div className="hidden lg:flex flex-col items-center self-stretch">
            <div className="w-px flex-1 bg-gradient-to-b from-transparent via-border to-transparent" />
          </div>

          {/* Horizontal divider — mobile only */}
          <div className="lg:hidden w-full flex items-center gap-3">
            <div className="flex-1 h-px bg-border" />
            <span className="text-xs text-muted-foreground uppercase tracking-wider">vs</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          <TeamColumn
            title="Content & Media Team"
            subtitle="Editing, Design & Digital Content"
            icon={Pen}
            members={contentMediaTeam}
            side="right"
            accentClass="bg-white border-border"
          />
        </div>

       
      </div>
    </div>
  );
}