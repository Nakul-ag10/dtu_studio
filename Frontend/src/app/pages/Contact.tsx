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


  return (
    <div className="min-h-screen bg-secondary/20">
      {/* Hero */}
      <div
        className="relative overflow-hidden text-white py-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/bg-12.png')" }}
      >
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative mx-auto px-6 lg:px-8 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs uppercase tracking-widest text-white/50 mb-3 font-medium">DTU Media Cell</p>
            <h1 className="text-4xl md:text-5xl font-semibold mb-4">Contact Us</h1>
            <div className="w-10 h-0.5 bg-primary mb-5" />
            <p className="text-base text-white/80 max-w-xl leading-relaxed">
              Have questions or want to collaborate? Reach out to the DTU Media Cell team through email, phone, or visit us during office hours. We look forward to connecting with you!
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
            <a href="mailto:pro@dtu.ac.in" className="text-primary hover:underline">
              pro@dtu.ac.in
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
                    Media Cell, Administrative Block, <br/>
                    Delhi Technological University<br />
                    Shahbad Daulatpur, Main Bawana Road<br />
                    Delhi - 110042, India
                  </p>
                </div>
              </div>
              <div className="w-full mt-5 border-2"><iframe width="100%" height="600" scrolling="no" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Administration%20Block,%20Delhi%20Technological%20University+(Media%20Cell,%20Delhi%20Technological%20University)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.mapsdirections.info/pl/mapa-populacji/">mapa populacji świata online</a></iframe></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
