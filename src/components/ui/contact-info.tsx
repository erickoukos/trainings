"use client"

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Calendar,
  Users,
  DollarSign,
  ArrowRight,
  ExternalLink
} from "lucide-react";

const contactInfo = {
  phone: "+254 715 545 018",
  email: "info@lishailabs.com",
  address: "Gibcon House, 4th & 5th Floor, Nakuru - Kenya"
};

const upcomingTrainings = [
  {
    id: "ai-4-youth",
    title: "AI-4-YOUTH TRAINING",
    description: "Youth Empowerment in Artificial Intelligence (AI) Skills for Entrepreneurship",
    startDate: "November 10th, 2025",
    duration: "5 Days",
    format: "Online",
    price: "KSH 1,500",
    paymentMethod: "M-PESA TILL: 687 37 37",
    curriculum: [
      "Day 1: AI to Start a Business",
      "Day 2: AI to Market a Business", 
      "Day 3: AI to Run a Business",
      "Day 4: AI to Grow a Business",
      "Day 5: AI Agents for Business"
    ],
    contact: {
      phone1: "+254 20 243 5017",
      phone2: "+254 733 816 880",
      email: "info@africatechcenter.com"
    }
  },
  {
    id: "ai-4-bodaboda",
    title: "AI-4-BODABODA TRAINING",
    description: "Bodaboda Empowerment in Artificial Intelligence (AI) Skills for Entrepreneurship",
    startDate: "November 10th, 2025",
    duration: "5 Days",
    format: "Online",
    price: "KSH 500",
    paymentMethod: "M-PESA TILL: 687 37 37",
    curriculum: [
      "Day 1: AI to Start a Business",
      "Day 2: AI to Market a Business",
      "Day 3: AI to Run a Business", 
      "Day 4: AI to Grow a Business",
      "Day 5: AI Agents for Business"
    ],
    contact: {
      phone1: "+254 20 243 5017",
      phone2: "+254 733 816 880",
      email: "info@africatechcenter.com"
    }
  },
  {
    id: "ai-masterclass",
    title: "AI Masterclass",
    description: "From FOUNDATIONAL PRINCIPLES to PROFESSIONAL MASTERY",
    startDate: "November 3rd, 2025",
    duration: "Intensive Program",
    format: "Online",
    price: "Contact for pricing",
    paymentMethod: "Direct payment",
    curriculum: [
      "Design effective prompts to guide AI tone and output",
      "Provide context to ensure factual accuracy",
      "Use iterative steps to improve AI results",
      "Apply AI skills in professional tasks",
      "Review AI output for bias and accuracy",
      "Practice ethical and responsible AI use"
    ],
    contact: {
      phone: "+254 728 770 399",
      email: "info@lishailabs.com"
    }
  },
  {
    id: "data-science",
    title: "Data Science Fundamentals",
    description: "Comprehensive data analysis and machine learning with Python",
    startDate: "TBD",
    duration: "4 Weeks",
    format: "Hybrid",
    price: "Contact for pricing",
    paymentMethod: "Direct payment",
    curriculum: [
      "Python for Data Science",
      "Statistical Analysis",
      "Machine Learning Algorithms",
      "Data Visualization",
      "Big Data Processing",
      "Real-world Projects"
    ],
    contact: {
      phone: "+254 715 545 018",
      email: "info@lishailabs.com"
    }
  },
  {
    id: "dahua-surveillance",
    title: "Dahua Surveillance Technology",
    description: "Professional surveillance systems and security technology training",
    startDate: "TBD", 
    duration: "2 Weeks",
    format: "Physical",
    price: "Contact for pricing",
    paymentMethod: "Direct payment",
    curriculum: [
      "Dahua Camera Systems",
      "Network Configuration",
      "Remote Monitoring",
      "Security Protocols",
      "System Integration",
      "Maintenance & Troubleshooting"
    ],
    contact: {
      phone: "+254 715 545 018",
      email: "info@lishailabs.com"
    }
  }
];

const partners = [
  {
    name: "SIMBA AI",
    logo: "/partners/simba-ai.png",
    description: "AI Innovation Partner"
  },
  {
    name: "Google",
    logo: "/partners/google.png", 
    description: "Technology Partner"
  },
  {
    name: "Safaricom",
    logo: "/partners/safaricom.png",
    description: "Telecommunications Partner"
  },
  {
    name: "ACAT Africa Center For Advanced Technology",
    logo: "/partners/acat.png",
    description: "Technology Development Partner"
  }
];

export function ContactInfo() {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/50 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Get in Touch with{" "}
            <span className="text-gradient-primary">Lish AI Labs</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your career with AI? Contact us for more information about our training programs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-lg hover-lift">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gradient-primary">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-primary rounded-lg">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <a 
                      href={`tel:${contactInfo.phone}`}
                      className="text-primary hover:underline"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-secondary rounded-lg">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a 
                      href={`mailto:${contactInfo.email}`}
                      className="text-primary hover:underline"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-accent rounded-lg">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Address</p>
                    <p className="text-muted-foreground">{contactInfo.address}</p>
                  </div>
                </div>

                <Button className="w-full bg-gradient-primary hover:opacity-90 text-white">
                  <Mail className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Upcoming Trainings */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gradient-primary">
                  Upcoming Training Programs
                </CardTitle>
                <p className="text-muted-foreground">
                  Join our comprehensive AI and technology training programs
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {upcomingTrainings.slice(0, 3).map((training, index) => (
                    <motion.div
                      key={training.id}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="p-4 bg-muted/50 rounded-lg hover:bg-muted/80 transition-colors"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="font-semibold text-lg text-foreground mb-1">
                            {training.title}
                          </h4>
                          <p className="text-sm text-muted-foreground mb-2">
                            {training.description}
                          </p>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {training.format}
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{training.startDate}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>{training.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <DollarSign className="h-4 w-4" />
                          <span>{training.price}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          <span>Limited Seats</span>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button size="sm" className="bg-gradient-primary hover:opacity-90 text-white">
                          Register Now
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                        <Button size="sm" variant="outline">
                          Learn More
                          <ExternalLink className="h-4 w-4 ml-2" />
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Partners Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Card className="border-0 shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-gradient-primary mb-4">
                Our Partners
              </CardTitle>
              <p className="text-muted-foreground">
                Proudly powered by industry leaders and technology partners
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
                {partners.map((partner, index) => (
                  <motion.div
                    key={partner.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center group"
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">
                          {partner.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                        </span>
                      </div>
                    </div>
                    <h4 className="font-medium text-foreground mb-1">{partner.name}</h4>
                    <p className="text-xs text-muted-foreground">{partner.description}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
