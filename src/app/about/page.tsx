"use client"

import { motion } from "framer-motion";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Target, 
  Award, 
  Globe, 
  Lightbulb, 
  TrendingUp,
  BookOpen,
  GraduationCap,
  Star,
  CheckCircle,
  ArrowRight,
  Heart,
  Zap,
  Shield,
  Sparkles
} from "lucide-react";
import Link from "next/link";

const stats = [
  { label: "Students Trained", value: "500+", icon: Users },
  { label: "Training Programs", value: "15+", icon: BookOpen },
  { label: "Success Rate", value: "95%", icon: TrendingUp },
  { label: "Countries Reached", value: "12+", icon: Globe }
];

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace cutting-edge AI technologies and methodologies to deliver the most relevant and forward-thinking training programs."
  },
  {
    icon: Heart,
    title: "Empowerment",
    description: "We believe in empowering individuals and organizations with AI skills that transform careers and drive meaningful impact."
  },
  {
    icon: Shield,
    title: "Excellence",
    description: "We maintain the highest standards in curriculum design, instruction quality, and student outcomes."
  },
  {
    icon: Globe,
    title: "Accessibility",
    description: "We make AI education accessible to everyone, regardless of background, through flexible learning formats and affordable pricing."
  }
];

const team = [
  {
    name: "Erick Ouko N.",
    role: "Chief Technology Officer",
    experience: "7 years",
    expertise: "AI & Machine Learning, Software Architecture",
    description: "Leading AI expert with extensive experience in developing cutting-edge AI solutions and training programs."
  },
  {
    name: "Collins Emmanuel",
    role: "Lead AI Trainer",
    experience: "5 years",
    expertise: "Deep Learning, Computer Vision",
    description: "Passionate educator specializing in practical AI applications and hands-on learning experiences."
  },
  {
    name: "Sheila Chebii",
    role: "AI Education Specialist",
    experience: "4 years",
    expertise: "Natural Language Processing, AI Ethics",
    description: "Dedicated to making AI education accessible and inclusive for learners from all backgrounds."
  }
];

const achievements = [
  {
    icon: Award,
    title: "Industry Recognition",
    description: "Recognized by leading tech companies and educational institutions for our innovative AI training programs."
  },
  {
    icon: Users,
    title: "Global Community",
    description: "Building a worldwide network of AI professionals, researchers, and enthusiasts across 12+ countries."
  },
  {
    icon: TrendingUp,
    title: "Career Impact",
    description: "95% of our graduates report significant career advancement within 6 months of completing our programs."
  },
  {
    icon: Star,
    title: "Student Satisfaction",
    description: "Consistently high ratings and positive feedback from students across all our training programs."
  }
];

export default function AboutPage() {
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
              About{" "}
              <span className="text-gradient-primary">Lish AI Labs</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Empowering the next generation of AI professionals through world-class training, 
              cutting-edge technology, and expert mentorship.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <Sparkles className="h-4 w-4 mr-2" />
                AI Innovation
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <Globe className="h-4 w-4 mr-2" />
                Global Reach
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <Award className="h-4 w-4 mr-2" />
                Industry Recognized
              </Badge>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="p-4 bg-gradient-primary rounded-lg w-fit mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-2">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="p-3 bg-gradient-primary rounded-lg w-fit mb-4">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-3xl font-bold">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To democratize AI education and empower individuals and organizations 
                    with the knowledge and skills needed to thrive in the AI-driven future. 
                    We believe that everyone should have access to world-class AI training, 
                    regardless of their background or location.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="p-3 bg-gradient-secondary rounded-lg w-fit mb-4">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-3xl font-bold">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To become the leading AI education platform in Africa and beyond, 
                    creating a global community of skilled AI professionals who drive 
                    innovation and positive change in their respective fields and communities.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our <span className="text-gradient-primary">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do at Lish AI Labs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-lg hover-lift h-full">
                  <CardHeader className="text-center">
                    <div className="p-3 bg-gradient-primary rounded-lg w-fit mx-auto mb-4">
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Meet Our <span className="text-gradient-primary">Expert Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Industry-leading AI professionals dedicated to your success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-lg hover-lift">
                  <CardHeader className="text-center">
                    <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <CardTitle className="text-xl font-bold">{member.name}</CardTitle>
                    <CardDescription className="text-primary font-semibold">{member.role}</CardDescription>
                    <Badge variant="secondary" className="w-fit mx-auto">
                      {member.experience} Experience
                    </Badge>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm text-muted-foreground mb-4 font-medium">{member.expertise}</p>
                    <p className="text-muted-foreground text-sm">{member.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Our <span className="text-gradient-primary">Achievements</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Recognition and impact that drives us forward
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-lg hover-lift h-full">
                  <CardHeader className="text-center">
                    <div className="p-3 bg-gradient-primary rounded-lg w-fit mx-auto mb-4">
                      <achievement.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-lg font-bold">{achievement.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center text-sm">{achievement.description}</p>
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
              Ready to Start Your AI Journey?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Join thousands of professionals who have transformed their careers with our AI training programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/trainings">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Explore Trainings
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-primary" asChild>
                <Link href="/contact">
                  <ArrowRight className="h-5 w-5 mr-2" />
                  Get in Touch
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
