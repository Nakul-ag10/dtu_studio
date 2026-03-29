import { useState } from "react";
import { SectionContainer } from "../components/ui/SectionContainer";
import { Card } from "../components/ui/Card";
import { Input } from "../components/ui/Input";
import { Textarea } from "../components/ui/Textarea";
import { Button } from "../components/ui/Button";
import { Mail, MapPin, Phone, Clock, MessageSquare } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form submitted! In production, this would send to backend.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const collaborationCharges = [
    { service: "Event Photography (Half Day)", price: "₹5,000" },
    { service: "Event Photography (Full Day)", price: "₹8,000" },
    { service: "Event Videography (Half Day)", price: "₹7,000" },
    { service: "Event Videography (Full Day)", price: "₹12,000" },
    { service: "Professional Photo Editing (per image)", price: "₹200" },
    { service: "Video Editing (per minute)", price: "₹500" },
    { service: "Social Media Content Package", price: "₹10,000/month" },
    { service: "Documentary Production", price: "₹50,000+" },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-80 flex items-center justify-center overflow-hidden">
        {/* <ImageWithFallback
          src="https://images.unsplash.com/photo-1772657577424-1ae6f223919d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
          alt="Contact Us"
          className="w-full h-full object-cover"
        /> */}
        <div className="absolute inset-0 bg-primary" />
        <div className="relative z-10 text-center px-4">
          <MessageSquare className="w-16 h-16 text-white mx-auto mb-4" />
          <h1 className="text-5xl text-white mb-4">Contact Us</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Get in touch with DTU Studio for collaborations, inquiries, or media requests
          </p>
        </div>
      </div>

      <SectionContainer className="bg-gradient-to-b from-gray-50 to-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <h2 className="mb-6 text-primary">Get in Touch</h2>
            <div className="space-y-4 mb-8">
              <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-primary">
                <div className="flex items-start gap-3">
                  <Mail className="text-primary mt-1" size={20} />
                  <div>
                    <h4 className="mb-1">Email</h4>
                    <p className="text-sm text-muted-foreground">studio@dtu.ac.in</p>
                    <p className="text-sm text-muted-foreground">mediacell@dtu.ac.in</p>
                  </div>
                </div>
              </Card>

              <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-blue-500">
                <div className="flex items-start gap-3">
                  <Phone className="text-blue-500 mt-1" size={20} />
                  <div>
                    <h4 className="mb-1">Phone</h4>
                    <p className="text-sm text-muted-foreground">+91 11 2787 XXXX</p>
                    <p className="text-sm text-muted-foreground">+91 XXXXX XXXXX (Mobile)</p>
                  </div>
                </div>
              </Card>

              <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-green-500">
                <div className="flex items-start gap-3">
                  <MapPin className="text-green-500 mt-1" size={20} />
                  <div>
                    <h4 className="mb-1">Address</h4>
                    <p className="text-sm text-muted-foreground">
                      DTU Studio - Media Cell<br />
                      Delhi Technological University<br />
                      Shahbad Daulatpur, Main Bawana Road<br />
                      Delhi - 110042, India
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-orange-500">
                <div className="flex items-start gap-3">
                  <Clock className="text-orange-500 mt-1" size={20} />
                  <div>
                    <h4 className="mb-1">Office Hours</h4>
                    <p className="text-sm text-muted-foreground">
                      Monday - Friday: 9:00 AM - 5:00 PM<br />
                      Saturday: 9:00 AM - 1:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="mb-6 text-primary">Send Us a Message</h2>
            <Card className="shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  label="Name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                />
                <Input
                  label="Email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                />
                <Input
                  label="Subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this regarding?"
                  required
                />
                <Textarea
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your inquiry..."
                  required
                />
                <Button type="submit" variant="primary" className="w-full shadow-md hover:shadow-lg">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </SectionContainer>

      {/* Collaboration Charges */}
      <SectionContainer background="gray">
        <h2 className="text-center mb-4 text-primary">Collaboration Charges</h2>
        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          Professional media services for events, promotions, and content creation
        </p>
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-primary bg-primary/5">
                    <th className="text-left py-4 px-4">Service</th>
                    <th className="text-right py-4 px-4">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {collaborationCharges.map((item, index) => (
                    <tr key={index} className="border-b border-border last:border-0 hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-4">{item.service}</td>
                      <td className="py-4 px-4 text-right text-primary">{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 pt-6 border-t-2 border-primary/20 bg-blue-50 rounded-lg p-4">
              <p className="text-sm text-muted-foreground">
                * Prices are indicative and may vary based on project requirements, duration, and complexity.
                Custom packages are available for long-term collaborations and institutional events.
                GST applicable as per government regulations.
              </p>
            </div>
          </Card>
        </div>
      </SectionContainer>
    </>
  );
}
