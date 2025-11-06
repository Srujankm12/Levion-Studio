"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { useState } from "react"

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "Full-stack online shopping experience with payment integration",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&q=80",
  },
  {
    title: "Mobile Banking App",
    category: "Mobile Development",
    description: "Secure and intuitive banking application for iOS and Android",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
  },
  {
    title: "Brand Identity",
    category: "Design",
    description: "Complete branding package for a tech startup",
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&q=80",
  },
  {
    title: "SaaS Dashboard",
    category: "UI/UX Design",
    description: "Analytics dashboard with real-time data visualization",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    title: "Social Media Campaign",
    category: "Digital Marketing",
    description: "Multi-platform campaign that increased engagement by 300%",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
  },
  {
    title: "Video Production",
    category: "Video Editing",
    description: "Corporate video series for product launches",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80",
  },
]

export function Portfolio() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 right-10 text-9xl font-bold text-primary/5 rotate-12">
          WORK
        </div>
        <div className="absolute bottom-10 left-10 text-9xl font-bold text-primary/5 -rotate-12">
          PORTFOLIO
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Our <span className="text-primary">Work</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing our latest projects and success stories
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group relative bg-card rounded-lg overflow-hidden cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              style={{
                transformStyle: "preserve-3d",
                perspective: 1000,
              }}
              data-testid={`card-portfolio-${index}`}
            >
              <div className="aspect-video relative overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-90" />
              </div>

              <div className="relative p-6">
                <div className="text-sm text-primary mb-2">{project.category}</div>
                <h3 className="text-xl font-heading font-bold mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <motion.div
                  className="flex items-center gap-2 text-primary font-semibold"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0, x: hoveredIndex === index ? 0 : -10 }}
                >
                  View Case Study
                  <ExternalLink className="w-4 h-4" />
                </motion.div>
              </div>

              <div className="absolute inset-0 rounded-lg ring-2 ring-primary opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
