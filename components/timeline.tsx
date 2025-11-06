"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { MessageSquare, Palette, Code, Rocket } from "lucide-react"

const stages = [
  {
    icon: MessageSquare,
    title: "Communication",
    description: "We listen to your needs and understand your vision",
  },
  {
    icon: Palette,
    title: "Design",
    description: "Creating beautiful, intuitive designs that match your brand",
  },
  {
    icon: Code,
    title: "Development",
    description: "Building robust, scalable solutions with cutting-edge technology",
  },
  {
    icon: Rocket,
    title: "Deployment",
    description: "Launching your project and ensuring smooth operation",
  },
]

export function Timeline() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  })

  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section ref={ref} className="py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            How We <span className="text-primary">Work</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our proven process ensures exceptional results
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2">
            <motion.div
              className="h-full bg-primary"
              style={{ width: lineWidth }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stages.map((stage, index) => (
              <motion.div
                key={stage.title}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                data-testid={`timeline-stage-${index}`}
              >
                <div className="relative z-10 bg-background p-6 rounded-lg border border-border hover:border-primary/50 transition-all group">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                      <stage.icon className="w-8 h-8 text-primary" />
                    </div>
                    
                    <div className="text-sm font-semibold text-primary mb-2">
                      Step {index + 1}
                    </div>
                    
                    <h3 className="text-xl font-heading font-bold mb-2">
                      {stage.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground">
                      {stage.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
