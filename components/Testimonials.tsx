"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Client Review",
    company: "SaaS Startup",
    feedback:
      "Excellent communication and consistent delivery. The team at Tech4 Universe helped us scale our B2B outreach fast.",
    rating: 5,
    screenshot: "/assets/testimonials/1.png",
  },
  {
    name: "Client Review",
    company: "Marketing Agency",
    feedback:
      "Their cold calling and appointment setting exceeded expectations — professional and results-driven team!",
    rating: 5,
    screenshot: "/assets/testimonials/2.png",
  },
  {
    name: "Client Review",
    company: "Email Campaign",
    feedback:
      "We saw an immediate impact from their email marketing campaigns. Highly recommend them for B2B projects.",
    rating: 5,
    screenshot: "/assets/testimonials/3.png",
  },
  {
    name: "Client Review",
    company: "E-commerce Platform",
    feedback:
      "Tech4 Universe transformed our cybersecurity posture. Their penetration testing identified critical vulnerabilities we never knew existed. Outstanding technical expertise!",
    rating: 5,
    screenshot: null,
  },
  {
    name: "Client Review",
    company: "IT Services Firm",
    feedback:
      "We saw an immediate impact from their email marketing campaigns. Highly recommend them for B2B projects.",
    rating: 5,
    screenshot: "/assets/testimonials/4.png",
  },
  {
    name: "Ikechukwu Mezu",
    company: "Novus Consulting LLC",
    feedback:
      "Muhammad has been an outstanding full-stack developer for our SaaS platform, Novus Health. His expertise was crucial in bringing our EMR platform to market. He is highly responsive, consistently delivers top-quality work, and has also supported our DevOps and GCP development with exceptional skill. His contributions have been invaluable to our success.",
    rating: 5,
    screenshot: null,
  },
  {
    name: "Haris Aftab",
    company: "Booltec",
    feedback:
      "Muhammad is an exceptional developer who goes above and beyond to ensure project success. His ability to understand complex requirements and turn them into reliable, scalable solutions is impressive. He has been a true partner in our development journey.",
    rating: 5,
    screenshot: null,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const [itemsPerView, setItemsPerView] = useState(1);

  useEffect(() => {
    const getItemsPerView = () => {
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 768) return 2;
      return 1;
    };

    setItemsPerView(getItemsPerView());

    const handleResize = () => setItemsPerView(getItemsPerView());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - itemsPerView);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [maxIndex]);

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We’re proud of the trust our clients place in us. See what they say
            about working with Tech4 Universe LLC.
          </p>
        </motion.div>

        <div className="relative group">
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full 
              bg-card border border-border shadow-lg hover:bg-muted 
              transition-all duration-200 opacity-0 group-hover:opacity-100"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full 
              bg-card border border-border shadow-lg hover:bg-muted 
              transition-all duration-200 opacity-0 group-hover:opacity-100"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>

          <div ref={scrollContainerRef} className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <div className="h-full relative rounded-2xl border border-border bg-card shadow-lg hover:shadow-xl transition-all duration-300 p-6 overflow-hidden group">
                    {testimonial.company !== "E-commerce Platform" && testimonial.company !== "Novus Consulting LLC" && testimonial.company !== "Booltec" && (
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.08] dark:opacity-[0.12]">
                        <svg
                          className="w-48 h-48 text-green-600"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
                        </svg>
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="mb-4">
                        <svg
                          className="w-8 h-8 text-primary/60"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                        </svg>
                      </div>

                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>

                      <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                        &quot;{testimonial.feedback}&quot;
                      </p>

                      {testimonial.screenshot && (
                        <div className="mb-4 rounded-lg overflow-hidden border border-border/50">
                          <Image
                            src={testimonial.screenshot}
                            alt={`${testimonial.company} review`}
                            width={400}
                            height={200}
                            className="w-full h-auto object-contain bg-muted/20"
                            onError={(e) => {
                              e.currentTarget.style.display = "none";
                            }}
                          />
                        </div>
                      )}

                      <div className="mt-auto">
                        <div className="font-semibold text-card-foreground text-lg">
                          {testimonial.name}
                        </div>
                        <div className="text-muted-foreground text-sm">
                          {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${index === currentIndex ? "bg-primary scale-110" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
