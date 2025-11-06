"use client"

import { motion } from "framer-motion"
import { SiGithub, SiLinkedin, SiX, SiInstagram } from "react-icons/si"
import Image from "next/image"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: SiGithub, href: "#", label: "GitHub" },
    { icon: SiLinkedin, href: "#", label: "LinkedIn" },
    { icon: SiX, href: "#", label: "X" },
    { icon: SiInstagram, href: "#", label: "Instagram" },
  ]

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Work", href: "#portfolio" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <motion.footer
      className="bg-card border-t border-border py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <motion.div
              className="relative w-40 h-10 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src="/logo.png"
                alt="Levion Studio"
                fill
                className="object-contain"
              />
            </motion.div>
            <p className="text-muted-foreground mb-4">
              The Freelance Agency for YOU
            </p>
            <p className="text-sm text-muted-foreground">
              End-to-end digital solutions from communication to deployment.
            </p>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ x: 5 }}
                  data-testid={`link-footer-${link.name.toLowerCase()}`}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Connect With Us</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-muted rounded-md flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                  data-testid={`link-social-${social.label.toLowerCase()}`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          className="border-t border-border pt-8 text-center text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p>
            © {currentYear} Levion Studio. All rights reserved. Built with passion
            <span className="text-primary"> ♥</span> by Levion Studio
          </p>
        </motion.div>
      </div>
    </motion.footer>
  )
}
