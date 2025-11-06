"use client"

import { motion } from "framer-motion"
import {
  Palette,
  Smartphone,
  Globe,
  Code,
  Database,
  Video,
  TrendingUp,
} from "lucide-react"

const services = [
  {
    icon: Palette,
    title: "UI/UX Design & Figma Prototyping",
    description: "Beautiful, intuitive interfaces that users love to interact with.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile apps for Android & iOS.",
  },
  {
    icon: Globe,
    title: "Web Application Development",
    description: "Scalable, performant web applications built with modern tech stacks.",
  },
  {
    icon: Code,
    title: "Website Design & Development",
    description: "Stunning, responsive websites that convert visitors into customers.",
  },
  {
    icon: Database,
    title: "API & Backend Management",
    description: "Robust backend systems and API integrations for seamless data flow.",
  },
  {
    icon: Video,
    title: "Video Editing & Production",
    description: "Professional video content that tells your brand story.",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing & SEO",
    description: "Strategic marketing campaigns that drive traffic and growth.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            End-to-end digital solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative bg-card rounded-lg p-6 border border-border hover:border-primary/50 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              data-testid={`card-service-${index}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                
                <h3 className="text-xl font-heading font-semibold mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </div>

              <div className="absolute inset-0 rounded-lg ring-2 ring-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
