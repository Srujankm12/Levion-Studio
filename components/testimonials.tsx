"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { useState, useEffect } from "react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc",
    content: "Levion Studio transformed our vision into reality. Their attention to detail and commitment to excellence is unmatched.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Founder, AppFlow",
    content: "Working with Levion was a game-changer for our business. They delivered beyond our expectations.",
    rating: 5,
  },
  {
    name: "Emma Williams",
    role: "Marketing Director, BrandCo",
    content: "The team at Levion Studio is incredibly talented. They brought creativity and professionalism to every aspect of our project.",
    rating: 5,
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative min-h-[300px] flex items-center justify-center">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="absolute w-full"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: index === currentIndex ? 1 : 0,
                  scale: index === currentIndex ? 1 : 0.8,
                  zIndex: index === currentIndex ? 1 : 0,
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-card border border-primary/20 rounded-lg p-8 md:p-12 relative">
                  <div className="absolute top-4 left-4 text-primary/20">
                    <Quote className="w-12 h-12" />
                  </div>

                  <div className="relative z-10">
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>

                    <p className="text-lg md:text-xl text-center mb-6 italic">
                      "{testimonial.content}"
                    </p>

                    <div className="text-center">
                      <div className="font-semibold text-lg">{testimonial.name}</div>
                      <div className="text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? "bg-primary w-8" : "bg-border"
                }`}
                data-testid={`button-testimonial-${index}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
