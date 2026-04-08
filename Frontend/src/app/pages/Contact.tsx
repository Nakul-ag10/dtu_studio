import { useState } from "react";
import { motion } from "motion/react";
import { Mail, MapPin, Phone, Clock, Send } from "lucide-react";
import Button from "../components/Button";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message. We will get back to you soon!");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const collaborationRates = [
    { service: "Event Photography", rate: "₹5,000 - ₹15,000", duration: "Per Event" },
    { service: "Event Videography", rate: "₹8,000 - ₹20,000", duration: "Per Event" },
    { service: "Professional Photoshoot", rate: "₹3,000 - ₹10,000", duration: "Per Session" },
    { service: "Video Production", rate: "₹15,000 - ₹50,000", duration: "Per Project" },
    { service: "Social Media Content", rate: "₹2,000 - ₹8,000", duration: "Per Campaign" },
    { service: "Graphic Design", rate: "₹1,500 - ₹5,000", duration: "Per Design" }
  ];

  return (
    <div className="min-h-screen bg-secondary/20">
      <div className="bg-primary text-white py-16">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="mb-4">Contact Us</h1>
            <p className="text-lg text-white/90 max-w-3xl">
              Get in touch with DTU Media Cell for collaborations, inquiries, or general information
            </p>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px] py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg p-6 border border-border"
          >
            <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center mb-4">
              <Mail className="text-primary" size={24} />
            </div>
            <h3 className="mb-2">Email</h3>
            <p className="text-sm text-muted-foreground mb-2">Send us an email</p>
            <a href="mailto:mediacell@dtu.ac.in" className="text-primary hover:underline">
              mediacell@dtu.ac.in
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-lg p-6 border border-border"
          >
            <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center mb-4">
              <Phone className="text-primary" size={24} />
            </div>
            <h3 className="mb-2">Phone</h3>
            <p className="text-sm text-muted-foreground mb-2">Call us during office hours</p>
            <a href="tel:+91XXXXXXXXXX" className="text-primary hover:underline">
              +91-XXXX-XXXXXX
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-lg p-6 border border-border"
          >
            <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center mb-4">
              <Clock className="text-primary" size={24} />
            </div>
            <h3 className="mb-2">Office Hours</h3>
            <p className="text-sm text-muted-foreground mb-2">Monday - Friday</p>
            <p className="text-primary">9:00 AM - 5:00 PM</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2 className="mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 border border-border space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-input-background border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-sm">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-input-background border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block mb-2 text-sm">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-input-background border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="+91-XXXXX-XXXXX"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-sm">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-input-background border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                  placeholder="Tell us about your inquiry..."
                />
              </div>

              <Button type="submit" variant="primary" className="w-full flex items-center justify-center gap-2">
                <Send size={18} />
                Send Message
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-lg p-8 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="mb-2">Visit Us</h3>
                  <p className="text-muted-foreground">
                    Delhi Technological University<br />
                    Shahbad Daulatpur, Main Bawana Road<br />
                    Delhi - 110042, India
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 border border-border">
              <h3 className="mb-6">Collaboration Charges</h3>
              <div className="space-y-4">
                {collaborationRates.map((item, index) => (
                  <div key={index} className="pb-4 border-b border-border last:border-0 last:pb-0">
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-medium">{item.service}</span>
                      <span className="text-primary font-semibold">{item.rate}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{item.duration}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-muted-foreground">
                * Rates are indicative and may vary based on project scope and requirements. Contact us for detailed quotations.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
