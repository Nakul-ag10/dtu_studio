import { useState } from "react";
import { SectionContainer } from "../components/ui/SectionContainer";
import { Card } from "../components/ui/Card";
import { Modal } from "../components/ui/Modal";
import { Download, Calendar, FileText } from "lucide-react";
import { Button } from "../components/ui/Button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function PressRelease() {
  const [selectedRelease, setSelectedRelease] = useState<number | null>(null);

  // API DATA HERE - This will be fetched from backend
  const pressReleases = [
    {
      id: 1,
      title: "DTU Announces New Center of Excellence in AI and Machine Learning",
      date: "March 28, 2026",
      summary: "Delhi Technological University is proud to announce the establishment of a new Center of Excellence dedicated to Artificial Intelligence and Machine Learning research.",
      content: `Delhi Technological University is proud to announce the establishment of a new Center of Excellence dedicated to Artificial Intelligence and Machine Learning research.

This state-of-the-art facility will serve as a hub for cutting-edge research, industry collaboration, and student innovation in the rapidly evolving field of AI. The center will be equipped with high-performance computing infrastructure, advanced research labs, and collaborative workspaces.

Key highlights:
- Investment of INR 50 crores in infrastructure and equipment
- Collaboration with leading tech companies including Microsoft, Google, and NVIDIA
- Focus areas: Deep Learning, Computer Vision, Natural Language Processing, and Robotics
- Industry partnerships for internships and placement opportunities
- Open to undergraduate and postgraduate students across all engineering disciplines

The center is expected to commence operations from April 2026 and will conduct workshops, seminars, and certification programs for students and industry professionals.`,
    },
    {
      id: 2,
      title: "Record Placements: 95% Students Placed with Average Package of 12 LPA",
      date: "March 22, 2026",
      summary: "DTU achieves remarkable placement success with students receiving offers from top companies across various sectors.",
      content: `Delhi Technological University has achieved record-breaking placement statistics for the academic year 2025-26. With 95% of eligible students successfully placed, DTU continues to maintain its position among India's premier engineering institutions.

Placement Highlights:
- Total students placed: 1,850 out of 1,950
- Average package: INR 12 LPA
- Highest domestic package: INR 45 LPA
- Highest international package: INR 1.2 Crore
- Top recruiters: Microsoft, Google, Amazon, Goldman Sachs, Flipkart

Sector-wise breakdown shows strong demand across Software Development, Data Science, Core Engineering, Consulting, and Finance roles. The university's industry partnerships and emphasis on practical learning have contributed significantly to these outstanding results.`,
    },
    {
      id: 3,
      title: "DTU Students Develop Award-Winning Sustainable Water Purification System",
      date: "March 18, 2026",
      summary: "Innovation in water purification technology earns national recognition for DTU students.",
      content: `A team of four students from Delhi Technological University has developed an innovative, low-cost water purification system that has won the National Innovation Award 2026. The system uses a combination of solar energy and advanced filtration technology to provide clean drinking water in rural areas.

Project Details:
- Team: Priya Sharma (ECE), Rahul Verma (ME), Ankit Kumar (CE), Sneha Patel (CHE)
- Cost per unit: INR 5,000
- Purification capacity: 100 liters per hour
- Zero electricity requirement (solar-powered)
- Removes 99.9% of contaminants

The innovation has attracted interest from several NGOs and government agencies working on rural water supply. The team is currently working on scaling up production with support from DTU's incubation center.`,
    },
    {
      id: 4,
      title: "International Collaboration: DTU Signs MoU with MIT and Stanford",
      date: "March 12, 2026",
      summary: "Strategic partnerships with world-leading universities to enhance research and academic exchange programs.",
      content: `Delhi Technological University has formalized partnerships with Massachusetts Institute of Technology (MIT) and Stanford University through Memorandums of Understanding aimed at fostering academic collaboration and research excellence.

Partnership Objectives:
- Joint research projects in emerging technologies
- Faculty and student exchange programs
- Collaborative Ph.D. programs
- Shared access to research facilities and resources
- Joint conferences and workshops

Under these agreements, DTU students will have opportunities to pursue semester exchanges, summer research internships, and collaborative projects with these prestigious institutions. The partnerships will also facilitate joint publications and technology transfer initiatives.`,
    },
  ];

  const currentRelease = selectedRelease
    ? pressReleases.find(r => r.id === selectedRelease)
    : null;

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-80 flex items-center justify-center overflow-hidden">
        {/* <ImageWithFallback
          src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
          alt="Press Releases"
          className="w-full h-full object-cover"
        /> */}
        <div className="absolute inset-0 bg-primary" />
        <div className="relative z-10 text-center px-4">
          <FileText className="w-16 h-16 text-white mx-auto mb-4" />
          <h1 className="text-5xl text-white mb-4">Press Releases</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Official announcements, achievements, and updates from Delhi Technological University
          </p>
          <div className="mt-6 inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg text-sm shadow-lg">
            📡 API DATA HERE
          </div>
        </div>
      </div>

      <SectionContainer className="bg-gradient-to-b from-gray-50 to-white">
        <h2 className="text-center mb-8">Official Announcements</h2>

        <div className="max-w-4xl mx-auto space-y-6">
          {pressReleases.map((release) => (
            <Card key={release.id} onClick={() => setSelectedRelease(release.id)} className="hover:shadow-xl transition-shadow border-l-4 border-l-primary">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar size={16} />
                    {release.date}
                  </div>
                  <h3 className="mb-2">{release.title}</h3>
                  <p className="text-sm text-muted-foreground">{release.summary}</p>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    alert("PDF download would be triggered here");
                  }}
                  className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-sm whitespace-nowrap shadow-md hover:cursor-pointer"
                >
                  <Download size={16} />
                  Download PDF
                </button>
              </div>
            </Card>
          ))}
        </div>
      </SectionContainer>

      {/* Detail Modal */}
      <Modal
        isOpen={selectedRelease !== null}
        onClose={() => setSelectedRelease(null)}
        title="Press Release"
      >
        {currentRelease && (
          <div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Calendar size={16} />
              {currentRelease.date}
            </div>
            <h2 className="mb-6">{currentRelease.title}</h2>
            <div className="prose max-w-none text-foreground whitespace-pre-line">
              {currentRelease.content}
            </div>
            <div className="mt-6 pt-6 border-t border-border">
              <Button variant="outline" onClick={() => alert("PDF download would be triggered here")}>
                <Download size={16} className="mr-2" />
                Download as PDF
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}
