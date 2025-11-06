"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { ArrowRight } from "lucide-react"

const quotes = [
  "Innovation is our foundation.",
  "Your vision, our creation.",
  "Design. Build. Scale.",
  "Turning ideas into reality.",
]

export function Hero() {
  const [currentQuote, setCurrentQuote] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 animate-pulse" />
      
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              x: [null, Math.random() * window.innerWidth],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="mb-8"
          variants={itemVariants}
        >
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {["Our", "Work.", "Your", "Way."].map((word, index) => (
              <motion.span
                key={word}
                className={index % 2 === 0 ? "text-primary" : "text-foreground"}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
              >
                {word}{" "}
              </motion.span>
            ))}
          </motion.h1>
        </motion.div>

        <motion.p
          className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-8 max-w-3xl mx-auto"
          variants={itemVariants}
        >
          We turn your ideas into impactful digital experiences.
        </motion.p>

        <motion.div
          className="h-16 mb-8 flex items-center justify-center"
          variants={itemVariants}
        >
          <AnimatePresence mode="wait">
            <motion.p
              key={currentQuote}
              className="text-lg md:text-xl text-primary italic"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              "{quotes[currentQuote]}"
            </motion.p>
          </AnimatePresence>
        </motion.div>

        <motion.div variants={itemVariants}>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-yellow-400 text-primary-foreground rounded-md font-semibold text-lg shadow-lg hover:shadow-primary/50 transition-all"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 210, 51, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            data-testid="button-get-quote"
          >
            Get a Quote
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-primary rounded-full"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}
