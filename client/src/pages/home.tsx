import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Palette, 
  Smartphone, 
  Globe, 
  Layout, 
  Database, 
  Video, 
  TrendingUp,
  MessageCircle,
  Pencil,
  Code,
  Rocket,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  ChevronDown,
  Menu,
  X
} from "lucide-react";


import { Form, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";


import { useMutation } from "@tanstack/react-query";

import logoImage from "@assets/Group 1 (1)_1762409367674.png";
import { useToast } from "../hooks/use-toast";
import { InsertContact, insertContactSchema } from "@/shared/schema";
import { apiRequest } from "../lib/queryClient";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../components/ui/form";
import { Input } from "../components/ui/input";
import { Select, SelectContent, SelectTrigger, SelectValue } from "../components/ui/select";
import { SelectItem } from "@radix-ui/react-select";
import { Textarea } from "../components/ui/textarea";

const services = [
  {
    icon: Palette,
    title: "UI/UX Design & Figma Prototyping",
    description: "Creating intuitive, beautiful interfaces that users love with pixel-perfect Figma prototypes."
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native Android & iOS applications built with cutting-edge technology and seamless performance."
  },
  {
    icon: Globe,
    title: "Web Application Development",
    description: "Full-stack web applications with modern frameworks, scalable architecture, and robust security."
  },
  {
    icon: Layout,
    title: "Website Design & Development",
    description: "Stunning, responsive websites that convert visitors into customers and drive business growth."
  },
  {
    icon: Database,
    title: "API & Backend Management",
    description: "Powerful backend systems, RESTful APIs, and database architecture for enterprise solutions."
  },
  {
    icon: Video,
    title: "Video Editing & Production",
    description: "Professional video content that captures attention and tells your brand story effectively."
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing & SEO",
    description: "Data-driven marketing strategies and SEO optimization to maximize your online presence."
  }
];

const workSteps = [
  {
    icon: MessageCircle,
    title: "Communication",
    description: "We start by understanding your vision, goals, and requirements through detailed consultation."
  },
  {
    icon: Pencil,
    title: "Design",
    description: "Our creative team crafts stunning designs and prototypes that bring your ideas to life."
  },
  {
    icon: Code,
    title: "Development",
    description: "Expert developers build robust, scalable solutions using cutting-edge technologies."
  },
  {
    icon: Rocket,
    title: "Deployment",
    description: "We launch your product with thorough testing, optimization, and ongoing support."
  }
];

const portfolioProjects = [
  {
    title: "FinTech Dashboard",
    description: "Modern financial analytics platform with real-time data visualization",
    tags: ["React", "TypeScript", "D3.js"],
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "E-Commerce Mobile App",
    description: "Cross-platform shopping experience with seamless checkout flow",
    tags: ["React Native", "Node.js", "Stripe"],
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "SaaS Marketing Site",
    description: "High-converting landing page with interactive product demos",
    tags: ["Next.js", "Framer Motion", "Tailwind"],
    gradient: "from-orange-500 to-red-500"
  },
  {
    title: "Healthcare Platform",
    description: "HIPAA-compliant patient management system with telemedicine",
    tags: ["Vue.js", "Python", "PostgreSQL"],
    gradient: "from-green-500 to-emerald-500"
  }
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const { toast } = useToast();
  
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);
  
  const servicesInView = useInView(servicesRef, { once: true, margin: "-100px" });
  const portfolioInView = useInView(portfolioRef, { once: true, margin: "-100px" });
  const contactInView = useInView(contactRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      projectType: "",
      budget: "",
      message: ""
    }
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
      });
    }
  });

  const onSubmit = (data: InsertContact) => {
    contactMutation.mutate(data);
  };

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer"
              data-testid="logo-nav"
            >
              <img src ={logoImage} alt="Levion Studio" className="h-8 md:h-10" />
            </motion.div>

            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection(heroRef)}
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
                data-testid="link-home"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection(servicesRef)}
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
                data-testid="link-services"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection(portfolioRef)}
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
                data-testid="link-portfolio"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection(contactRef)}
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
                data-testid="link-contact"
              >
                Contact
              </button>
              <Button
                size="default"
                onClick={() => scrollToSection(contactRef)}
                data-testid="button-get-quote"
              >
                Get a Quote
              </Button>
            </div>

            <button
              className="md:hidden text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-menu-toggle"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-card border-t border-border"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              <button
                onClick={() => scrollToSection(heroRef)}
                className="text-left text-muted-foreground hover:text-primary transition-colors font-medium"
                data-testid="link-mobile-home"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection(servicesRef)}
                className="text-left text-muted-foreground hover:text-primary transition-colors font-medium"
                data-testid="link-mobile-services"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection(portfolioRef)}
                className="text-left text-muted-foreground hover:text-primary transition-colors font-medium"
                data-testid="link-mobile-portfolio"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection(contactRef)}
                className="text-left text-muted-foreground hover:text-primary transition-colors font-medium"
                data-testid="link-mobile-contact"
              >
                Contact
              </button>
              <Button
                size="default"
                className="w-full"
                onClick={() => scrollToSection(contactRef)}
                data-testid="button-mobile-get-quote"
              >
                Get a Quote
              </Button>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        data-testid="section-hero"
      >
        {/* Animated Background Grid */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-accent/5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            opacity: 0.1
          }} />
        </div>

        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="relative z-10 max-w-7xl mx-auto px-6 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <img src ={logoImage} 
              alt="Levion Studio" 
              className="h-20 md:h-28 mx-auto mb-12"
              data-testid="img-hero-logo"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
            data-testid="text-hero-title"
          >
            Our Work. <span className="text-primary">Your Way.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
            data-testid="text-hero-subtitle"
          >
            The Freelance Agency for YOU. Full-stack creative and software development from communication to deployment.
            We handle every stage of your product journey with precision and creativity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection(contactRef)}
              data-testid="button-start-project"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-background/50 backdrop-blur-sm"
              onClick={() => scrollToSection(portfolioRef)}
              data-testid="button-view-work"
            >
              View Our Work
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-primary"
            data-testid="icon-scroll-indicator"
          >
            <ChevronDown size={32} />
          </motion.div>
        </motion.div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-accent/5 to-background" data-testid="section-how-we-work">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-how-we-work-title">
              How We <span className="text-primary">Work</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our proven process ensures exceptional results from start to finish
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {workSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onHoverStart={() => setActiveStep(index)}
                  data-testid={`card-work-step-${index}`}
                >
                  <Card className={`p-6 h-full transition-all duration-300 border-2 hover-elevate active-elevate-2 ${
                    activeStep === index ? "border-primary shadow-lg shadow-primary/20" : "border-card-border"
                  }`}>
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                      activeStep === index ? "bg-primary text-primary-foreground" : "bg-accent text-accent-foreground"
                    }`}>
                      <Icon size={28} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </Card>
                  {index < workSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-20 md:py-32" data-testid="section-services">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-services-title">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  data-testid={`card-service-${index}`}
                >
                  <Card className="p-8 h-full hover-elevate active-elevate-2 transition-all duration-300 hover:border-primary/50 group">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon size={28} className="text-primary group-hover:text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section ref={portfolioRef} className="py-20 md:py-32 bg-gradient-to-b from-background to-accent/5" data-testid="section-portfolio">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-portfolio-title">
              Featured <span className="text-primary">Work</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Showcasing our recent projects and client success stories
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {portfolioProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={portfolioInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                data-testid={`card-project-${index}`}
              >
                <Card className="overflow-hidden group hover-elevate active-elevate-2 transition-all duration-300">
                  <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-background/60 group-hover:bg-background/40 transition-all duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button variant="outline" className="bg-background/80 backdrop-blur-sm" data-testid={`button-view-project-${index}`}>
                        View Project
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="py-20 md:py-32" data-testid="section-contact">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-contact-title">
              Let's Start <span className="text-primary">Building</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to bring your vision to life? Get in touch and let's create something amazing together.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={contactInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} data-testid="input-name" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="your@email.com" {...field} data-testid="input-email" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="projectType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Project Type</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="select-project-type">
                                <SelectValue placeholder="Select project type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="web-development">Web Development</SelectItem>
                              <SelectItem value="mobile-app">Mobile App</SelectItem>
                              <SelectItem value="ui-ux-design">UI/UX Design</SelectItem>
                              <SelectItem value="video-production">Video Production</SelectItem>
                              <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="budget"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Budget (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., $5,000 - $10,000" {...field} value={field.value ?? ""} data-testid="input-budget" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us about your project..."
                              className="min-h-32"
                              {...field}
                              data-testid="textarea-message"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={contactMutation.isPending}
                      data-testid="button-submit-contact"
                    >
                      {contactMutation.isPending ? "Sending..." : "Send Message"}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </Form>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={contactInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4" data-testid="contact-info-email">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Email</p>
                      <p className="text-muted-foreground">hello@levionstudio.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4" data-testid="contact-info-phone">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Phone</p>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4" data-testid="contact-info-location">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Location</p>
                      <p className="text-muted-foreground">Remote - Serving clients worldwide</p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                <h4 className="text-xl font-bold mb-3">Why Choose Levion Studio?</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>End-to-end solutions from concept to deployment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Expert team with cutting-edge technology skills</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Transparent communication throughout the project</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Ongoing support and maintenance after launch</span>
                  </li>
                </ul>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50" data-testid="footer">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-3 gap-12 mb-8">
            <div>
              <img src={logoImage} alt="Levion Studio" className="h-8 mb-4" />
              <p className="text-muted-foreground leading-relaxed">
                The Freelance Agency for YOU. Creating exceptional digital experiences from communication to deployment.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <button
                  onClick={() => scrollToSection(servicesRef)}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-services"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection(portfolioRef)}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-portfolio"
                >
                  Portfolio
                </button>
                <button
                  onClick={() => scrollToSection(contactRef)}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-contact"
                >
                  Contact
                </button>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Stay Updated</h4>
              <p className="text-muted-foreground mb-4">Subscribe to our newsletter for the latest updates and insights.</p>
              <div className="flex gap-2">
                <Input placeholder="Your email" type="email" data-testid="input-newsletter" />
                <Button data-testid="button-subscribe">Subscribe</Button>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-border text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Levion Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
