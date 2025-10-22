"use client"

import { motion } from "framer-motion";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar,
  Clock,
  Users,
  DollarSign,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  ExternalLink,
  Star,
  CheckCircle,
  BookOpen,
  GraduationCap,
  Shield,
  Zap
} from "lucide-react";

const upcomingTrainings = [
  {
    id: "ai-4-youth",
    title: "AI-4-YOUTH TRAINING",
    subtitle: "Youth Empowerment in Artificial Intelligence (AI) Skills for Entrepreneurship",
    startDate: "November 10th, 2025",
    duration: "5 Days",
    format: "Online",
    price: "KSH 1,500",
    paymentMethod: "M-PESA TILL: 687 37 37",
    description: "Comprehensive 5-day program designed to empower youth with AI skills for entrepreneurship. Learn how to leverage AI to start, market, run, and grow your business.",
    curriculum: [
      "Day 1: AI to Start a Business",
      "Day 2: AI to Market a Business", 
      "Day 3: AI to Run a Business",
      "Day 4: AI to Grow a Business",
      "Day 5: AI Agents for Business"
    ],
    features: [
      "Hands-on AI tools training",
      "Business case studies",
      "Entrepreneurship mentorship",
      "Certificate of completion",
      "Networking opportunities"
    ],
    contact: {
      phone1: "+254 20 243 5017",
      phone2: "+254 733 816 880",
      email: "info@africatechcenter.com"
    },
    partners: ["SIMBA AI", "LISH AI LABS", "Google", "Safaricom", "ACAT"]
  },
  {
    id: "ai-4-bodaboda",
    title: "AI-4-BODABODA TRAINING",
    subtitle: "Bodaboda Empowerment in Artificial Intelligence (AI) Skills for Entrepreneurship",
    startDate: "November 10th, 2025",
    duration: "5 Days",
    format: "Online",
    price: "KSH 500",
    paymentMethod: "M-PESA TILL: 687 37 37",
    description: "Specialized training program for bodaboda operators to learn AI skills for business growth and entrepreneurship opportunities.",
    curriculum: [
      "Day 1: AI to Start a Business",
      "Day 2: AI to Market a Business",
      "Day 3: AI to Run a Business", 
      "Day 4: AI to Grow a Business",
      "Day 5: AI Agents for Business"
    ],
    features: [
      "Mobile-friendly learning",
      "Practical business applications",
      "Digital marketing with AI",
      "Financial management tools",
      "Community support network"
    ],
    contact: {
      phone1: "+254 20 243 5017",
      phone2: "+254 733 816 880",
      email: "info@africatechcenter.com"
    },
    partners: ["SIMBA AI", "LISH AI LABS", "Google", "Safaricom", "ACAT"]
  },
  {
    id: "ai-masterclass",
    title: "AI Masterclass",
    subtitle: "From FOUNDATIONAL PRINCIPLES to PROFESSIONAL MASTERY",
    startDate: "November 3rd, 2025",
    duration: "Intensive Program",
    format: "Online",
    price: "Contact for pricing",
    paymentMethod: "Direct payment",
    description: "Comprehensive AI masterclass covering foundational principles to professional mastery. Perfect for professionals looking to advance their AI skills.",
    curriculum: [
      "Design effective prompts to guide AI tone and output",
      "Provide context to ensure factual accuracy",
      "Use iterative steps to improve AI results",
      "Apply AI skills in professional tasks",
      "Review AI output for bias and accuracy",
      "Practice ethical and responsible AI use"
    ],
    features: [
      "Expert-led instruction",
      "Real-world case studies",
      "Professional certification",
      "Career advancement support",
      "Lifetime access to materials"
    ],
    contact: {
      phone: "+254 728 770 399",
      email: "info@lishailabs.com"
    },
    partners: ["LISH AI LABS"]
  },
  {
    id: "data-science",
    title: "Data Science Fundamentals",
    subtitle: "Comprehensive data analysis and machine learning with Python",
    startDate: "TBD",
    duration: "4 Weeks",
    format: "Hybrid",
    price: "Contact for pricing",
    paymentMethod: "Direct payment",
    description: "Master data science fundamentals with hands-on Python programming, statistical analysis, and machine learning algorithms.",
    curriculum: [
      "Python for Data Science",
      "Statistical Analysis",
      "Machine Learning Algorithms",
      "Data Visualization",
      "Big Data Processing",
      "Real-world Projects"
    ],
    features: [
      "Industry-standard tools",
      "Portfolio projects",
      "Mentorship program",
      "Job placement assistance",
      "Industry certification"
    ],
    contact: {
      phone: "+254 715 545 018",
      email: "info@lishailabs.com"
    },
    partners: ["LISH AI LABS"]
  },
  {
    id: "dahua-surveillance",
    title: "Dahua Surveillance Technology",
    subtitle: "Professional surveillance systems and security technology training",
    startDate: "TBD", 
    duration: "2 Weeks",
    format: "Physical",
    price: "Contact for pricing",
    paymentMethod: "Direct payment",
    description: "Comprehensive training on Dahua surveillance technology, covering installation, configuration, and maintenance of professional security systems.",
    curriculum: [
      "Dahua Camera Systems",
      "Network Configuration",
      "Remote Monitoring",
      "Security Protocols",
      "System Integration",
      "Maintenance & Troubleshooting"
    ],
    features: [
      "Hands-on equipment training",
      "Professional certification",
      "Industry partnerships",
      "Technical support",
      "Career placement"
    ],
    contact: {
      phone: "+254 715 545 018",
      email: "info@lishailabs.com"
    },
    partners: ["LISH AI LABS"]
  }
];

export default function UpcomingTrainingsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Upcoming Training Programs
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Join our comprehensive AI and technology training programs designed to advance your career and enhance your skills.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-white/20 text-white px-4 py-2">
                <Calendar className="h-4 w-4 mr-2" />
                Starting November 2025
              </Badge>
              <Badge className="bg-white/20 text-white px-4 py-2">
                <Users className="h-4 w-4 mr-2" />
                Limited Seats Available
              </Badge>
              <Badge className="bg-white/20 text-white px-4 py-2">
                <GraduationCap className="h-4 w-4 mr-2" />
                Industry Certifications
              </Badge>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trainings List */}
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {upcomingTrainings.map((training, index) => (
            <motion.div
              key={training.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="border-0 shadow-lg hover-lift overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  {/* Training Info */}
                  <div className="lg:col-span-2 p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h2 className="text-2xl font-bold text-foreground mb-2">
                          {training.title}
                        </h2>
                        <p className="text-lg text-muted-foreground mb-4">
                          {training.subtitle}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Badge variant="outline" className="text-xs">
                          {training.format}
                        </Badge>
                        {training.startDate !== "TBD" && (
                          <Badge className="bg-green-100 text-green-800 text-xs">
                            <Calendar className="h-3 w-3 mr-1" />
                            {training.startDate}
                          </Badge>
                        )}
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6">
                      {training.description}
                    </p>

                    {/* Training Details */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>{training.startDate}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-primary" />
                        <span>{training.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <DollarSign className="h-4 w-4 text-primary" />
                        <span>{training.price}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="h-4 w-4 text-primary" />
                        <span>Limited Seats</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">What You'll Get:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {training.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Curriculum */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">Curriculum:</h4>
                      <div className="space-y-1">
                        {training.curriculum.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <BookOpen className="h-4 w-4 text-primary" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Partners */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">Powered By:</h4>
                      <div className="flex flex-wrap gap-2">
                        {training.partners.map((partner, partnerIndex) => (
                          <Badge key={partnerIndex} variant="secondary" className="text-xs">
                            {partner}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Registration Sidebar */}
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
                    <div className="sticky top-8">
                      <h3 className="text-xl font-bold text-foreground mb-4">
                        Register Now
                      </h3>
                      
                      <div className="space-y-4 mb-6">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-gradient-primary mb-2">
                            {training.price}
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {training.paymentMethod}
                          </p>
                        </div>

                        <div className="space-y-3">
                          <Button className="w-full bg-gradient-primary hover:opacity-90 text-white">
                            <BookOpen className="h-4 w-4 mr-2" />
                            Register Now
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </Button>
                          <Button variant="outline" className="w-full">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Learn More
                          </Button>
                        </div>
                      </div>

                      {/* Contact Information */}
                      <div className="border-t pt-4">
                        <h4 className="font-semibold text-foreground mb-3">Contact for Registration:</h4>
                        <div className="space-y-3 text-sm">
                          {training.contact.phone && (
                            <div className="flex items-center gap-2">
                              <Phone className="h-4 w-4 text-primary" />
                              <a href={`tel:${training.contact.phone}`} className="text-primary hover:underline">
                                {training.contact.phone}
                              </a>
                            </div>
                          )}
                          {training.contact.phone1 && (
                            <div className="flex items-center gap-2">
                              <Phone className="h-4 w-4 text-primary" />
                              <a href={`tel:${training.contact.phone1}`} className="text-primary hover:underline">
                                {training.contact.phone1}
                              </a>
                            </div>
                          )}
                          {training.contact.phone2 && (
                            <div className="flex items-center gap-2">
                              <Phone className="h-4 w-4 text-primary" />
                              <a href={`tel:${training.contact.phone2}`} className="text-primary hover:underline">
                                {training.contact.phone2}
                              </a>
                            </div>
                          )}
                          <div className="flex items-center gap-2">
                            <Mail className="h-4 w-4 text-primary" />
                            <a href={`mailto:${training.contact.email}`} className="text-primary hover:underline">
                              {training.contact.email}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <Card className="border-0 shadow-lg bg-gradient-to-r from-primary/10 to-secondary/10">
            <CardContent className="py-12">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Ready to Transform Your Career?
              </h3>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of professionals who have advanced their careers with our AI and technology training programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-white">
                  <Phone className="h-5 w-5 mr-2" />
                  Call +254 715 545 018
                </Button>
                <Button size="lg" variant="outline">
                  <Mail className="h-5 w-5 mr-2" />
                  Email info@lishailabs.com
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
