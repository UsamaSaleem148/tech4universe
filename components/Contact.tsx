"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "./ContactForm";
import { useState } from "react";
import ContactModal from "./ContactModal";

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let&apos;s build something great together. Have a project in mind?
            Reach out to us today.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Send me a message
            </h3>
            <ContactForm />
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a
                      href="mailto:outreach@tech4universe.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      outreach@tech4universe.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Address</p>
                    <p className="text-muted-foreground">
                      1021 E Lincoln way Unit # 1446
                    </p>
                    <p className="text-muted-foreground">Cheyenne, WY 82001</p>
                    <p className="text-muted-foreground font-semibold mt-1">
                      U.S.-Registered LLC
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Website</p>
                    <a
                      href="https://www.tech4universe.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      www.tech4universe.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-10">
                Get Started
              </h3>
              <div className="space-y-4">
                <motion.button
                  onClick={() => setIsModalOpen(true)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-4 px-6 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Get a Free Consultation
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
