import { motion } from "motion/react";
import { Mail, MapPin, Clock, ExternalLink } from "lucide-react";

export default function Contact() {
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
            <p className="text-xs uppercase tracking-widest text-white/50 mb-3 font-medium">
              DTU Media Cell
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold mb-4">Contact Us</h1>
            <div className="w-10 h-0.5 bg-primary mb-5" />
            <p className="text-base text-white/80 max-w-xl leading-relaxed">
              Have questions or want to collaborate? Reach out to the DTU Media Cell team — we're
              always happy to connect.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl py-12">

        {/* Info cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {/* Email */}
          <motion.a
            href="mailto:pro@dtu.ac.in"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="bg-white rounded-xl p-5 border border-border flex items-center gap-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group"
          >
            <div className="w-15 h-15 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
              <Mail className="text-primary" size={20} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-muted-foreground uppercase tracking-wide font-medium mb-0.5">
                Email Us
              </p>
              <p className="text-md font-semibold text-primary truncate">pro@dtu.ac.in</p>
            </div>
            <ExternalLink size={14} className="text-muted-foreground/40 flex-shrink-0" />
          </motion.a>

          {/* Office Hours */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-xl p-5 border border-border flex items-center gap-4"
          >
            <div className="w-15 h-15 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Clock className="text-primary" size={20} />
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide font-medium mb-0.5">
                Office Hours
              </p>
              <p className="text-md font-semibold text-foreground">
                Mon–Fri &nbsp;·&nbsp; 9:30 AM – 6:00 PM
              </p>
            </div>
          </motion.div>
        </div>

        {/* Map + Address */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="bg-white rounded-xl border border-border overflow-hidden"
        >
          {/* Map */}
          <div className="w-full h-72 sm:h-96 border-b border-border">
            <iframe
              width="100%"
              height="100%"
              scrolling="no"
              src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Administration%20Block,%20Delhi%20Technological%20University+(Media%20Cell,%20Delhi%20Technological%20University)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
              className="block"
            />
          </div>

          {/* Address row */}
          <div className="p-6 flex items-start gap-4">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
              <MapPin className="text-primary" size={18} />
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide font-medium mb-1">
                Visit Us
              </p>
              <p className="text-md text-foreground leading-relaxed font-medium">
                Media Cell, Administrative Block,{" "}
                <br/>
                <span className="text-muted-foreground font-normal">
                  Delhi Technological University, Shahbad Daulatpur, Main Bawana Road, Delhi – 110042, India
                </span>
              </p>
            </div>
          </div>
        </motion.div>

        
      </div>
    </div>
  );
}