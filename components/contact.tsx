"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { useState } from "react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    alert("Message sent! We'll get back to you soon.")
    setFormData({ name: "", email: "", message: "" })
    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Let's Build Something <span className="text-primary">Great Together</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Drop us a message — we'll handle the rest.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-heading font-bold mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <motion.a
                  href="mailto:official.levion@gmail.com"
                  className="flex items-center gap-4 group"
                  whileHover={{ x: 10 }}
                  data-testid="link-email"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Email</div>
                    <div className="font-semibold group-hover:text-primary transition-colors">
                      official.levion@gmail.com
                    </div>
                  </div>
                </motion.a>

                <motion.a
                  href="tel:+918310029635"
                  className="flex items-center gap-4 group"
                  whileHover={{ x: 10 }}
                  data-testid="link-phone"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Phone</div>
                    <div className="font-semibold group-hover:text-primary transition-colors">
                      +91 83100 29635
                    </div>
                  </div>
                </motion.a>

                <motion.div
                  className="flex items-center gap-4"
                  whileHover={{ x: 10 }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Location</div>
                    <div className="font-semibold">Shivamogga, India</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <motion.input
                type="text"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-card border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                whileFocus={{ scale: 1.02 }}
                data-testid="input-name"
              />
            </div>

            <div>
              <motion.input
                type="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-card border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                whileFocus={{ scale: 1.02 }}
                data-testid="input-email"
              />
            </div>

            <div>
              <motion.textarea
                placeholder="Your Message"
                required
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-card border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                whileFocus={{ scale: 1.02 }}
                data-testid="input-message"
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-md font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all disabled:opacity-50"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              data-testid="button-submit"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <Send className="w-5 h-5" />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
