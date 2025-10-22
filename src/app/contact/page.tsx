"use client"

import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  MessageCircle,
  Users,
  BookOpen,
  Calendar,
  ArrowRight,
  CheckCircle,
  Globe,
  Headphones,
  Zap,
  Star,
  Award
} from "lucide-react";
import Link from "next/link";

const contactInfo = {
  phone: "+254 715 545 018",
  email: "info@lishailabs.com",
  address: "Gibcon House, 4th & 5th Floor, Nakuru - Kenya",
  hours: "Monday - Friday: 8:00 AM - 6:00 PM (EAT)"
};

const contactMethods = [
  {
    icon: Phone,
    title: "Phone Support",
    description: "Speak directly with our team",
    contact: contactInfo.phone,
    action: "Call Now",
    href: `tel:${contactInfo.phone}`
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Get detailed responses via email",
    contact: contactInfo.email,
    action: "Send Email",
    href: `mailto:${contactInfo.email}`
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Chat with us in real-time",
    contact: "Available 24/7",
    action: "Start Chat",
    href: "#"
  }
];

const quickLinks = [
  {
    title: "Training Programs",
    description: "Explore our AI training courses",
    icon: BookOpen,
    href: "/trainings"
  },
  {
    title: "Upcoming Sessions",
    description: "View scheduled training sessions",
    icon: Calendar,
    href: "/trainings/upcoming"
  },
  {
    title: "About Us",
    description: "Learn more about our mission",
    icon: Users,
    href: "/about"
  }
];

const faqs = [
  {
    question: "What training programs do you offer?",
    answer: "We offer comprehensive AI training programs including AI Fundamentals, Machine Learning, Deep Learning, Data Science, and specialized courses for youth and entrepreneurs."
  },
  {
    question: "Are the training sessions online or in-person?",
    answer: "We offer both online and in-person training options. Most of our programs are available online with live instructor support, while some specialized courses may be conducted in-person."
  },
  {
    question: "What are the prerequisites for your courses?",
    answer: "Prerequisites vary by course. Basic courses require no prior experience, while advanced courses may require some programming knowledge or relevant experience. Check individual course pages for specific requirements."
  },
  {
    question: "Do you provide certificates upon completion?",
    answer: "Yes, we provide industry-recognized certificates upon successful completion of our training programs. These certificates can enhance your professional profile and career prospects."
  },
  {
    question: "What is your refund policy?",
    answer: "We offer a 7-day money-back guarantee for all our training programs. If you're not satisfied with the course content or delivery, you can request a full refund within 7 days of enrollment."
  },
  {
    question: "How can I stay updated on new courses?",
    answer: "Subscribe to our newsletter, follow us on social media, or regularly check our website for updates on new courses and training programs."
  }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    interest: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        interest: ""
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6">
              Get in <span className="text-gradient-primary">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Have questions about our AI training programs? We're here to help you start your AI journey.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <Headphones className="h-4 w-4 mr-2" />
                24/7 Support
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <Zap className="h-4 w-4 mr-2" />
                Quick Response
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <Star className="h-4 w-4 mr-2" />
                Expert Guidance
              </Badge>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-lg hover-lift text-center">
                  <CardHeader>
                    <div className="p-3 bg-gradient-primary rounded-lg w-fit mx-auto mb-4">
                      <method.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold">{method.title}</CardTitle>
                    <CardDescription>{method.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-primary font-semibold mb-4">{method.contact}</p>
                    <Button asChild className="w-full">
                      <a href={method.href}>
                        {method.action}
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold flex items-center">
                    <Send className="h-8 w-8 mr-3 text-primary" />
                    Send us a Message
                  </CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8"
                    >
                      <div className="p-4 bg-green-100 rounded-full w-fit mx-auto mb-4">
                        <CheckCircle className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-bold text-green-600 mb-2">Message Sent Successfully!</h3>
                      <p className="text-muted-foreground">We'll get back to you soon.</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="mt-1"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="interest">Training Interest</Label>
                          <select
                            id="interest"
                            name="interest"
                            value={formData.interest}
                            onChange={handleInputChange}
                            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          >
                            <option value="">Select Interest</option>
                            <option value="ai-fundamentals">AI Fundamentals</option>
                            <option value="machine-learning">Machine Learning</option>
                            <option value="deep-learning">Deep Learning</option>
                            <option value="data-science">Data Science</option>
                            <option value="ai-entrepreneurship">AI Entrepreneurship</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="message">Message *</Label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={4}
                          className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>

                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Contact Details */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold flex items-center">
                    <MapPin className="h-6 w-6 mr-3 text-primary" />
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

                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-primary rounded-lg">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Business Hours</p>
                      <p className="text-muted-foreground">{contactInfo.hours}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Links */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">Quick Links</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {quickLinks.map((link, index) => (
                      <Link
                        key={link.title}
                        href={link.href}
                        className="flex items-center p-3 rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <link.icon className="h-5 w-5 text-primary mr-3" />
                        <div>
                          <p className="font-medium">{link.title}</p>
                          <p className="text-sm text-muted-foreground">{link.description}</p>
                        </div>
                        <ArrowRight className="h-4 w-4 text-muted-foreground ml-auto" />
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Frequently Asked <span className="text-gradient-primary">Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find answers to common questions about our AI training programs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Ready to Start Learning?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Join our community of AI professionals and transform your career today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/trainings">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Browse Trainings
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-primary" asChild>
                <Link href="/trainings/upcoming">
                  <Calendar className="h-5 w-5 mr-2" />
                  View Schedule
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
