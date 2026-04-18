import React from 'react';
import { Link } from 'react-router';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '../components/ui/button';
import { Images, Youtube, Newspaper, FileText, LogOut, LayoutDashboard } from 'lucide-react';

const sections = [
  {
    title: "Month in Pictures",
    description: "Manage monthly picture collections and photo galleries",
    to: "/admin/month-in-pictures",
    icon: Images,
  },
  {
    title: "Press Conferences",
    description: "Manage YouTube links for press conferences",
    to: "/admin/press-conferences",
    icon: Youtube,
  },
  {
    title: "Press Coverages",
    description: "Manage press coverage articles and media mentions",
    to: "/admin/press-coverages",
    icon: Newspaper,
  },
  {
    title: "Press Releases",
    description: "Manage press release documents and announcements",
    to: "/admin/press-releases",
    icon: FileText,
  },
];

export default function Admin() {
  const { logout } = useAuth();

  return (
    <div className="min-h-screen bg-secondary/20">

      {/* Top bar */}
      <div className="bg-white border-b border-border sticky top-0 z-10">
        <div className="mx-auto px-6 lg:px-8 max-w-5xl h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <LayoutDashboard size={18} className="text-primary" />
            <span className="text-sm font-semibold text-foreground">Admin Dashboard</span>
            <span className="hidden sm:block w-px h-4 bg-border" />
            <span className="hidden sm:block text-xs text-muted-foreground">DTU Media Cell</span>
          </div>
          <Button
            onClick={logout}
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-foreground gap-2 text-xs"
          >
            <LogOut size={14} />
            Logout
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto px-6 lg:px-8 max-w-5xl py-10">

        {/* Page heading */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-foreground mb-1">Dashboard</h1>
          <p className="text-sm text-muted-foreground">
            Manage content across DTU Media Cell's public pages.
          </p>
          <div className="w-8 h-0.5 bg-primary mt-3 rounded" />
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {sections.map(({ title, description, to, icon: Icon }) => (
            <Link
              key={to}
              to={to}
              className="group bg-white border border-border rounded-xl p-6 flex items-start gap-5 hover:shadow-md hover:border-primary/30 transition-all duration-200"
            >
              {/* Icon */}
              <div className="shrink-0 w-11 h-11 rounded-lg bg-primary/8 border border-primary/15 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors duration-200">
                <Icon size={20} className="text-primary group-hover:text-white transition-colors duration-200" />
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h2 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                    {title}
                  </h2>
                  <span className="text-muted-foreground/40 group-hover:text-primary transition-colors text-base leading-none">
                    →
                  </span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}