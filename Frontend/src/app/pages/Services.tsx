import { motion } from "motion/react";
import {
  Camera,
  Video,
  Palette,
  Megaphone,
  Users,
  FileText,
  Calendar,
  Award,
  Tv,
  Mic,
  Radio,
  BookOpen,
  ExternalLink,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useState } from "react";

// ── Data ────────────────────────────────────────────────────────────────────

const services = [
  {
    icon: Camera,
    title: "Professional Photography",
    description:
      "High-quality event photography, portrait sessions, and campus documentation using state-of-the-art Sony studio cameras and professional still cameras.",
    features: ["Event Coverage", "Portrait Photography", "Campus Documentation", "Outdoor Photography"],
  },
  {
    icon: Video,
    title: "Video Production",
    description:
      "Full-spectrum video production — pre-production, production, and post-production — powered by Final Cut Pro X (FCP-10) on iMac systems with professional editing suites.",
    features: ["Live Event Recording", "Promotional Videos", "Interview Production", "Video Editing & Post-Production"],
  },
  // {
  //   icon: Tv,
  //   title: "Live Broadcasting & Streaming",
  //   description:
  //     "Multi-camera live streaming of university events using Two Sony Studio Cameras, Two Camcorders, and advanced control panels to manage multiple video and audio sources simultaneously.",
  //   features: ["Multi-Camera Setup", "Live Streaming", "Real-time Updates", "Broadcast-quality Output"],
  // },
  {
    icon: Mic,
    title: "Podcasting — Engitales",
    description:
      "DTU Studio's flagship podcast series 'Engitales' features conversations with distinguished faculty, alumni, vice chancellors, and industry leaders, available on the DTU Studio YouTube channel.",
    features: ["Studio Podcast Recording", "Guest Management", "Audio Post-Production", "YouTube Distribution"],
  },
  // {
  //   icon: Radio,
  //   title: "ENG (Electronic News Gathering)",
  //   description:
  //     "Two dedicated ENG camera setups for capturing outdoor events, festivals, seminars, and live performances held across the DTU campus.",
  //   features: ["Outdoor Event Coverage", "Festivals & Seminars", "Live Performances", "Field Production"],
  // },
  {
    icon: BookOpen,
    title: "Academic Content & Lecture Recording",
    description:
      "Over 2,000 lectures on diverse topics recorded and archived, including GIAN programmes, MOOC courses, and expert lecture series from national and international faculty.",
    features: ["GIAN Programme Recording", "MOOC Course Videos", "Lecture Series", "Academic Archive"],
  },
  {
    icon: Palette,
    title: "Graphic Design & Animation",
    description:
      "Creative design solutions using Photoshop for graphics, Motion and LiveType for animation — producing posters, social media creatives, branding materials, and visual identities.",
    features: ["Poster & Banner Design", "Social Media Graphics", "Motion Graphics & Animation", "Brand Identity"],
  },
  {
    icon: Megaphone,
    title: "Social Media Management",
    description:
      "Manages DTU's official social media presence on LinkedIn, Facebook, Instagram, X, and YouTube — designing and producing engaging videos, photos, graphics, and posts.",
    features: ["Content Strategy", "Community Management", "Multi-platform Posting", "Analytics & Reporting"],
  },
  {
    icon: Users,
    title: "Event Coverage",
    description:
      "Comprehensive coverage of Orientation Programmes, Convocation, Departmental Lecture Series, Distinguished Speaker Series, International Conferences, Student Fests, and Alumni Meets.",
    features: ["Convocation Coverage", "Cultural Events", "Conferences & Summits", "Alumni & Student Events"],
  },
  {
    icon: FileText,
    title: "Content Creation",
    description:
      "Professional content writing and multimedia production for DTU communications — press releases, news articles, blog posts, and digital content representing the University's identity.",
    features: ["Press Releases", "News Articles", "Blog Writing", "Multimedia Content"],
  },
  // {
  //   icon: Calendar,
  //   title: "Event Planning Support",
  //   description:
  //     "Technical support, logistics coordination, and equipment management for university events. The studio is located on the first floor of the Civil Engineering Department building.",
  //   features: ["Technical Support", "Logistics Coordination", "Equipment Setup", "On-site Support"],
  // },
  // {
  //   icon: Award,
  //   title: "Training & Workshops",
  //   description:
  //     "Educational workshops and training sessions for students interested in photography, videography, graphic design, and digital media production skills.",
  //   features: ["Photography Workshops", "Video Production Training", "Design Workshops", "Media Skills Development"],
  // },
];

// Featured YouTube videos (from annual report)
const featuredVideos = [
  {
    id: "YB-BP8MIVeg",
    title: "DTU Celebrated 78th Independence Day - 2024",
    category: "National Events",
  },
  {
    id: "jNCH1HA5eRg",
    title: "ENGIFEST-2025 Inaugural Ceremony",
    category: "Student Events",
  },
  {
    id: "HXyeTCf5OqU",
    title: "VIRASAT-2024 Cultural Event Highlight",
    category: "Cultural Events",
  },
  {
    id: "lUyoAzIwS3w",
    title: "DTU Celebrated World Teachers Day 2024",
    category: "University Events",
  },
  {
    id: "DcQDh20QyoU",
    title: "DTU Open House 2024 — 1000 School Students",
    category: "Outreach",
  },
  {
    id: "iyd63EafC7w",
    title: "DTU in DD National — 'Avenues of Excellence'",
    category: "Media Coverage",
  },
];

// Podcast episodes (Engitales)
const podcasts = [
  { ep: 1, title: "With Superannuated Distinguished Faculty Member Prof. R.K. Selot", id: "gvhwKQWBsec" },
  { ep: 2, title: "With First Vice Chancellor of DTU, Prof. P.B. Sharma", id: "5ohsduz_MdM" },
  { ep: 3, title: "With Distinguished Alumnus, Prof. D. Yogi Goswami", id: "O5fZCPS1KuA" },
  { ep: 4, title: "With Vice Chancellor, Delhi University, Prof. Yogesh Singh", id: "UVmO68hIb3w" },
  { ep: 5, title: '"Echoes of Excellence" — Untold Stories with Prof. O.P. Grover', id: "9QsKOOkRFqI" },
  // { ep: 6, title: "Leading with Purpose — Alumnus Mr. Mahesh Joshi", id: "2nmey0yQYaw" },
  // { ep: 7, title: '"Electrifying Wisdom" — With Prof. A.K. Tandon, DCE', id: "OYxEkv_PMgQ" },
  // { ep: 8, title: "Innovation & Inspiration — CEO of MSys Group, Mr. Sanjay Sehgal", id: "t135lhhZku0" },
  // { ep: 9, title: "Beyond Pentium — Padma Bhushan Mr. Vinod Dham (Father of Pentium Chip)", id: "k9SJiI6-snc" },
  // { ep: 10, title: "Legacy Talks with Prof. Vinod Mahna", id: "nXoN1BYTIGk" },
  // { ep: 11, title: "Inspiring Conversation — Mr. P.S. Chadha: The Engineer Who Shaped DTU's Campus", id: "0JvxPLlg59o" },
];

// All YouTube videos from the report
const allVideos = [
  { no: 1, title: "DTU Celebrated 78th Independence Day-2024 Part-1", id: "YB-BP8MIVeg" },
  { no: 2, title: "Hindi play 'Dicky' dedicated to the life of Second Lieutenant Puneet Nath Dutt", id: "SDuKXH8wPK0" },
  { no: 3, title: "Anti Ragging Rules of DTU & Anti Ragging UGC Guidelines | Celebrated Anti Ragging Week-2024", id: "r0mNITnCz2U" },
  { no: 4, title: "DTU Exploring Engineering-2024 Highlight", id: "rw-TO71EMNo" },
  { no: 5, title: "AWARD CEREMONY-2024 | DTU Research and Innovation Awards Ceremony-2024", id: "l8jElrmFodw" },
  { no: 6, title: "Hindi Utsav — Hindi Pakhwada / Hindi Divas | Kavi Sammelan-2024", id: "JP6wUlfMBmo" },
  { no: 7, title: "VIRASAT-2024 Event Highlight | SPIC MACAY & DTU Cultural Event", id: "HXyeTCf5OqU" },
  { no: 8, title: "DTU Celebrated World Teachers Day-2024", id: "lUyoAzIwS3w" },
  { no: 9, title: "DTU Chapter — Flute Recital by Pt. Hariprasad Chaurasia", id: "Br_dNCxBdyc" },
  { no: 10, title: "Kathak Dance Recital by Padma Shri Shovana Narayan in VIRASAT-2024", id: "rbZoFWW4rHc" },
  { no: 11, title: "DTU Open House - 2024 EVENT HIGHLIGHT | 1000 school students participated", id: "DcQDh20QyoU" },
  { no: 12, title: 'MOOC Course on "Disaster Risk Reduction and Management"', id: "taGmETCwUxY" },
  { no: 13, title: 'DTU in DD National Series "Avenues of Excellence" | DTU Documentary Film', id: "iyd63EafC7w" },
  { no: 14, title: "Bibliometric Analysis BibExcel & VOSviewer Lecture-01", id: "mwRC8_e5bZ8" },
  { no: 15, title: "Bibliometric Analysis using R Lecture-02 | BIBLIOMETRIC ANALYSIS & TOOLS", id: "WUGKkIjm3zg" },
  { no: 16, title: "DTU Celebrated 76th Republic Day | DTU Family Celebrating 76th Republic Day-2025", id: "VYfwkaVH2J0" },
  { no: 17, title: "SWARNIM BHARAT VIRASAT AUR VIKAS | DTU Sport Activities on 26th January 2025", id: "hUwWpvJUZMo" },
  { no: 18, title: "Lecture-1| Essentials of Grant Writing — Dr Meenakshi Munshi | Lecture series of Biotechnology DTU", id: "ZgE07pXbKow" },
  { no: 19, title: "Lecture-1 Electricity Tariff Determination by Shiva Suman, Director, CEA, Ministry of Power", id: "UIoeFkER0LI" },
  { no: 20, title: "THE AIR WE SHARE: Exposure Inequalities, Solutions & Challenges — Expert Lecture by Prof. Prashant Kumar", id: "ljmNwxrXatU" },
  { no: 21, title: "Hon'ble Minister of Education Govt of India Shri Dharmendra Pradhan Ji, appreciated DTU!", id: "o80ETOfmg6s" },
  { no: 22, title: "Inauguration of Paytm-DTU WISDOM on WHEELS | Digital literacy EVENT HIGHLIGHT", id: "_LfwIYi7dQ4" },
  { no: 23, title: "ENGIFEST-2025 Inaugural Ceremony PART-1", id: "jNCH1HA5eRg" },
  { no: 24, title: "Environmental Engineering: Lecture on Science, Spirituality and Sustainability", id: "TiTMCUd4kAQ" },
  { no: 25, title: "Lecture Series on Sustainability | 2nd Expert Lecture on Creation of SETU rating Index for SETC", id: "E745WSY349c" },
  { no: 26, title: "MOOC course on Artificial intelligence (AI) in Drug Discovery by Prof. Yasha Hasija", id: "xi0gRkd03T8" },
  { no: 27, title: "Current Challenges of Energy Transition & The Way Forward | Lecture Series EE DTU-Part-1", id: "ZMJvzEdgaYo" },
  { no: 28, title: "Current Challenges of Energy Transition & The Way Forward | Lecture Series EE DTU-Part-2", id: "nd8kjxW1vRU" },
  { no: 29, title: "Tissue Image Cytometry - Enabling Precision Medicine | Lecture Series Biotechnology LEC-2 Part-1", id: "A1ONBgCXfrc" },
  { no: 30, title: "Tissue Image Cytometry - Enabling Precision Medicine | Lecture Series Biotechnology LEC-2 Part-2", id: "SZh5fLYQuCs" },
  { no: 31, title: "Celebration of International Day of Yoga & Yogasana Competition-2025 Highlights", id: "1hxz_M2JSsI" },
  { no: 32, title: "Lecture-4th on Transforming Glaucoma Care Through Storytelling | Lecture Series Biotechnology", id: "LQTb7BjUjqU" },
  { no: 33, title: 'DTU Press Conference on "Awareness About The New Academic Programs and Initiatives" 9th July-2025', id: "tN0GPM7RQRE" },
  { no: 34, title: "DTU Orientation cum Induction Programme-2025 address by Shri Ashish Sood — Hon'ble Minister of Education, GNCT of Delhi", id: "uaNs91Qof5Q" },
];

// ── Sub-components ──────────────────────────────────────────────────────────

interface VideoCardProps {
  id: string;
  title: string;
  category?: string;
}

function VideoCard({ id, title, category }: VideoCardProps) {
  return (
    <div className="bg-white rounded-lg border border-border overflow-hidden group hover:shadow-lg transition-all duration-300">
      <div className="relative aspect-video bg-gray-100">
        <iframe
          src={`https://www.youtube.com/embed/${id}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
          loading="lazy"
        />
      </div>
      <div className="p-3">
        {category && (
          <span className="inline-block mb-1 px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full">
            {category}
          </span>
        )}
        <p className="text-sm font-medium text-foreground line-clamp-2">{title}</p>
      </div>
    </div>
  );
}

interface PodcastCardProps {
  ep: number;
  title: string;
  id: string;
}

function PodcastCard({ ep, title, id }: PodcastCardProps) {
  return (
    <div className="bg-white rounded-lg border border-border overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="aspect-video">
        <iframe
          src={`https://www.youtube.com/embed/${id}`}
          title={`Engitales Podcast ${ep}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
          loading="lazy"
        />
      </div>
      <div className="p-3">
        <span className="inline-block mb-1 px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full">
          Episode {ep}
        </span>
        <p className="text-sm font-medium text-foreground line-clamp-2">{title}</p>
      </div>
    </div>
  );
}

interface VideoTableRowProps {
  no: number;
  title: string;
  id: string;
}

function VideoTableRow({ no, title, id }: VideoTableRowProps) {
  return (
    <tr className="border-b border-border hover:bg-secondary/20 transition-colors">
      <td className="px-4 py-3 text-sm text-muted-foreground text-center w-10">{no}</td>
      <td className="px-4 py-3 text-sm text-foreground">{title}</td>
      <td className="px-4 py-3 text-center w-24">
        <a
          href={`https://www.youtube.com/watch?v=${id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-primary text-xs hover:underline"
        >
          Watch <ExternalLink size={12} />
        </a>
      </td>
    </tr>
  );
}

// ── Main Component ──────────────────────────────────────────────────────────

export default function Services() {
  const [showAllVideos, setShowAllVideos] = useState(false);

  return (
    <div className="min-h-screen bg-secondary/20">

      {/* ── Hero Banner ── */}
      {/* Hero */}
      <div
        className="relative overflow-hidden text-white py-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/bg-1.png')" }}
      >
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative mx-auto px-6 lg:px-8 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs uppercase tracking-widest text-white/50 mb-3 font-medium">DTU Media Cell</p>
            <h1 className="text-4xl md:text-5xl font-semibold mb-4">Studio Services</h1>
            <div className="w-10 h-0.5 bg-primary mb-5" />
            <p className="text-base text-white/80 max-w-xl leading-relaxed">
              The DTU Studio offers a comprehensive range of media production services, including professional photography, video production, live streaming, podcasting, graphic design, and social media management — serving the diverse communication needs of Delhi Technological University.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px] py-12 space-y-16">

        {/* ── About DTU Studio ── */}
        <section>
          <div className="flex lg:grid-cols-2 gap-8 items-start">
            {/* <div>
              <h2 className="mb-4">About DTU Studio</h2>
              <p className="text-muted-foreground mb-4">
                The DTU Studio at Delhi Technological University is a state-of-the-art facility fully equipped to manage the entire spectrum of media production — covering pre-production, production, and post-production activities. Designed as a versatile platform, the studio supports a wide range of applications including interviews, panel discussions, podcasts, short plays, and lecture recordings.
              </p>
              <p className="text-muted-foreground mb-4">
                The studio boasts a multi-camera setup with professional lighting grids, alongside a dedicated production control room fitted with advanced control panels to seamlessly manage multiple video and audio sources in both live and recorded formats. It is enhanced with graphics and special effects generators, as well as video editing suites powered by cutting-edge software — iMac systems running Final Cut Pro X (FCP-10), Photoshop, Motion, and LiveType.
              </p>
              <p className="text-muted-foreground">
                DTU Studio also serves as the University's digital content creator and social media handler, actively managing DTU's official accounts on LinkedIn, Facebook, Instagram, X, and YouTube — ensuring timely updates and consistent communication. It also plays a central role in the development of digital education content, positioning itself as a cornerstone in shaping the future of academic learning and outreach.
              </p>
            </div> */}

            {/* Infrastructure highlight cards */}
            <div className="flex flex-row sm:grid-cols-2 gap-4">
              {[
                { label: "Studios", value: "Indoor & Outdoor", sub: "Chroma keying with virtual studio sets" },
                { label: "ENG Setups", value: "2 Units", sub: "For outdoor events, festivals & seminars" },
                { label: "Editing Suite", value: "iMac + FCP-10", sub: "Final Cut Pro X, Photoshop, Motion, LiveType" },
                { label: "Display Panel", value: "75-inch Panasonic", sub: "Interactive display with CPU" },
                { label: "Audio Console", value: "Yamaha O1V96", sub: "Digital audio mixing console" },
                { label: "YouTube Library", value: "2,000+ Videos", sub: "Diverse topics on the official channel" },
              ].map((item) => (
                <div key={item.label} className="bg-gradient-to-b from-primary/50 to-white border border-border rounded-lg p-4">
                  <p className="text-sm text-black/90 mb-1">{item.label}</p>
                  <p className="text-lg font-bold text-primary">{item.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Studio Photo Gallery placeholder ── */}
        <section>
          <h2 className="mb-6 text-primary font-bold">Studio Facility</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {/* Placeholders — replace src with actual studio images */}
            {[
              { src: "Services-1.png", alt: "DTU Studio Entrance", caption: "DTU Studio — Entrance" },
              { src: "Services-2.png", alt: "Control Room", caption: "Production Control Room with advanced control panels" },
              { src: "Services-3.png", alt: "Green Screen Studio", caption: "Professional green screen studio with lighting grid" },
              { src: "Services-4.png", alt: "Green Screen Studio", caption: "Professional lighting with green screen" },
            ].map((img) => (
              <div key={img.alt} className="rounded-lg overflow-hidden border border-border bg-white group">
                <div className="aspect-video bg-secondary/40 flex items-center justify-center relative overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const img = e.target as HTMLImageElement;
                      const fallback = img.nextElementSibling as HTMLElement;
                      img.style.display = "none";
                      if (fallback) fallback.style.display = "flex";
                    }}
                  />
                  <div className="hidden w-full h-full items-center justify-center flex-col gap-2 text-muted-foreground">
                    <Camera size={32} className="text-primary/40" />
                    <span className="text-xs text-center px-2">{img.alt}</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground p-3 text-center">{img.caption}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Services Grid ── */}
        <section>
          <div className="text-center mb-10">
            <h2 className="mb-3">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Leveraging in-house capabilities, DTU Studio offers comprehensive pre-production, production, and post-production services for a variety of programmes and events.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-lg p-6 border border-border hover:shadow-lg transition-all duration-300 group"
              >
                <div className="mb-4 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <service.icon className="text-primary" size={24} />
                </div>
                <h3 className="mb-3 group-hover:text-primary transition-colors text-base">{service.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-1">
                  {service.features.map((feature) => (
                    <li key={feature} className="text-xs text-muted-foreground flex items-center gap-2">
                      <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Events Covered ──
        <section className="bg-white rounded-lg border border-border p-8">
          <h2 className="mb-4">Events Covered by DTU Studio</h2>
          <p className="text-muted-foreground mb-6">
            DTU Studio covers the full breadth of university life — from flagship annual events to academic and cultural programmes.
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Orientation Programmes", "Convocation", "Departmental Lecture Series",
              "Distinguished Speaker Series", "Podcasts", "International Conferences",
              "Departmental Workshops", "Student Fests", "Alumni Meets", "GIAN Programmes",
              "MOOC Courses", "Cultural Events (VIRASAT)", "ENGIFEST", "Republic Day",
              "Independence Day", "World Teachers Day", "Open House", "Yoga Day",
              "Paytm-DTU WISDOM on WHEELS", "Press Conferences", "Induction Programmes",
            ].map((tag) => (
              <span
                key={tag}
                className="inline-block px-3 py-1 bg-secondary/50 text-sm text-foreground rounded-full border border-border"
              >
                {tag}
              </span>
            ))}
          </div>
        </section> */}

        {/* ── Featured YouTube Videos ── */}
        <section>
          <div className="flex items-end justify-between mb-6 flex-wrap gap-3">
            <div>
              <h2 className="mb-1">Featured Videos</h2>
              <p className="text-muted-foreground text-sm">
                Highlights from the DTU Studio YouTube Channel — 16,000+ subscribers, several million views.
              </p>
            </div>
            <a
              href="https://www.youtube.com/@DTUStudio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-sm"
            >
              Visit YouTube Channel <ExternalLink size={14} />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredVideos.map((v) => (
              <VideoCard key={v.id} {...v} />
            ))}
          </div>
        </section>

        {/* ── Engitales Podcast ── */}
        <section>
          <div className="mb-6">
            <h2 className="mb-1">Engitales — The DTU Studio Podcast Series</h2>
            <p className="text-muted-foreground text-sm max-w-3xl">
              DTU Studio's flagship podcast features candid conversations with distinguished faculty, first vice chancellors, Padma Bhushan awardees, renowned engineers, and industry leaders — preserving their wisdom for future generations.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {podcasts.map((p) => (
              <PodcastCard key={p.id} {...p} />
            ))}
          </div>
        </section>

        {/* ── Full Video Library (collapsible) ── */}
        <section className="bg-white rounded-lg border border-border overflow-hidden">
          <button
            onClick={() => setShowAllVideos((v) => !v)}
            className="w-full flex items-center justify-between p-6 text-left hover:bg-secondary/20 transition-colors"
          >
            <div>
              <h2 className="mb-1">Complete Video Library</h2>
              <p className="text-sm text-muted-foreground">All 34+ videos from the 2024–25 Annual Report</p>
            </div>
            {showAllVideos ? <ChevronUp className="text-primary flex-shrink-0" /> : <ChevronDown className="text-primary flex-shrink-0" />}
          </button>

          {showAllVideos && (
            <div className="overflow-x-auto border-t border-border">
              <table className="w-full">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-4 py-3 text-sm font-medium text-center w-10">S.No.</th>
                    <th className="px-4 py-3 text-sm font-medium text-left">Event / Video Title</th>
                    <th className="px-4 py-3 text-sm font-medium text-center w-24">Link</th>
                  </tr>
                </thead>
                <tbody>
                  {allVideos.map((v) => (
                    <VideoTableRow key={v.no} {...v} />
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        {/* ── Service Request Process ── */}
        <section className="bg-white rounded-lg border border-border p-8">
          <div className="text-center mb-8">
            <h2 className="mb-3">Service Request Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              For DTU internal events and external clients, follow these steps to request our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              {
                step: "1",
                title: "Submit Request",
                desc: "Send us an email with event details, requirements, and timeline.",
              },
              {
                step: "2",
                title: "Review & Planning",
                desc: "Our team reviews your request and provides a detailed proposal with timeline.",
              },
              {
                step: "3",
                title: "Service Delivery",
                desc: "Professional execution of services with high-quality deliverables and post-service support.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold">{item.step}</span>
                </div>
                <h3 className="mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              Request Services
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}