"use client"

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Brain, 
  Users, 
  Award, 
  Calendar, 
  TrendingUp, 
  Shield,
  Zap,
  Globe,
  BarChart3,
  CheckCircle
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Learning",
    description: "Personalized learning paths powered by advanced AI algorithms that adapt to your pace and learning style.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Users,
    title: "Expert Instructors",
    description: "Learn from industry leaders and AI researchers with years of real-world experience.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Award,
    title: "Industry Certifications",
    description: "Earn recognized certificates that validate your AI skills and boost your career prospects.",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: Calendar,
    title: "Flexible Scheduling",
    description: "Choose from self-paced, live sessions, or hybrid formats that fit your schedule.",
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description: "Our programs are designed to accelerate your career with practical AI skills employers value.",
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "All programs undergo rigorous quality checks to ensure the highest standards of education.",
    gradient: "from-teal-500 to-blue-500"
  },
  {
    icon: Zap,
    title: "Real-time Collaboration",
    description: "Work on projects with peers and get instant feedback from instructors and AI assistants.",
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    icon: Globe,
    title: "Global Community",
    description: "Join a worldwide network of AI professionals, researchers, and enthusiasts.",
    gradient: "from-pink-500 to-rose-500"
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Track your progress with detailed analytics and performance insights powered by AI.",
    gradient: "from-violet-500 to-purple-500"
  }
];

export function Features() {
  return (
    <section className="py-20 bg-gradient-to-b from-transparent to-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Why Choose{" "}
            <span className="text-gradient-primary">Lish AI Labs</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the future of AI education with cutting-edge technology, 
            expert instruction, and industry-leading certification programs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group hover-lift border-0 shadow-md hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${feature.gradient} mb-4`}
                  >
                    <feature.icon className="h-6 w-6 text-white" />
                  </motion.div>
                  <CardTitle className="text-xl font-semibold group-hover:text-gradient-primary transition-all duration-300">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators - Partner Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-semibold text-foreground mb-8">
            Trusted by Leading Organizations
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            {/* Partner Logos */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center w-24 h-16 bg-white rounded-lg shadow-sm p-2"
            >
              <img src="/google.png" alt="Google" className="max-h-12 object-contain" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center w-24 h-16 bg-white rounded-lg shadow-sm p-2"
            >
              <img src="/SAF-MAIN-LOGO.png" alt="Safaricom" className="max-h-12 object-contain" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center w-24 h-16 bg-white rounded-lg shadow-sm p-2"
            >
              <img src="/SimbaAI.jpg" alt="Simba AI" className="max-h-12 object-contain" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center w-24 h-16 bg-white rounded-lg shadow-sm p-2"
            >
              <img src="/ACAT-logo2.png" alt="ACAT" className="max-h-12 object-contain" />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center w-24 h-16 bg-white rounded-lg shadow-sm p-2"
            >
              <img src="/lish_ai_logo.jpg" alt="Lish AI Labs" className="max-h-12 object-contain" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
