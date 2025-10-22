"use client"

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, Sparkles, Zap, Brain, Cpu, CircuitBoard, BarChart3, TrendingUp, Database, Bot, CpuIcon } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced AI Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* AI Circuit Board Pattern */}
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" viewBox="0 0 1000 1000" fill="none">
            {/* Circuit Lines */}
            <motion.path
              d="M100,200 L300,200 L300,400 L500,400 L500,600 L700,600 L700,300 L900,300"
              stroke="url(#circuitGradient)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
            />
            <motion.path
              d="M200,100 L200,300 L400,300 L400,500 L600,500 L600,700 L800,700"
              stroke="url(#circuitGradient2)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", delay: 1 }}
            />
            <defs>
              <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="circuitGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#ec4899" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.6" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Animated AI Elements */}
        <div className="absolute inset-0">
          {/* Neural Network Nodes */}
          <motion.div
            className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-xl opacity-60"
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-xl opacity-40"
            animate={{
              y: [0, 20, 0],
              x: [0, -10, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 left-1/4 w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-xl opacity-50"
            animate={{
              y: [0, -15, 0],
              x: [0, 15, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* AI Circuit Patterns */}
          <motion.div
            className="absolute top-1/4 right-1/4 w-24 h-24 border-2 border-cyan-400/30 rounded-lg rotate-45"
            animate={{
              rotate: [45, 405, 45],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute bottom-1/3 left-1/3 w-20 h-20 border-2 border-purple-400/30 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Robotics Elements */}
          <motion.div
            className="absolute top-1/3 left-1/4 w-16 h-16"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Bot className="w-full h-full text-cyan-400/40" />
          </motion.div>

          <motion.div
            className="absolute bottom-1/4 right-1/3 w-12 h-12"
            animate={{
              y: [0, -10, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Cpu className="w-full h-full text-purple-400/40" />
          </motion.div>

          {/* Data Science Charts */}
          <motion.div
            className="absolute top-1/2 right-1/4 w-20 h-20"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <BarChart3 className="w-full h-full text-green-400/40" />
          </motion.div>

          <motion.div
            className="absolute bottom-1/2 left-1/5 w-14 h-14"
            animate={{
              rotate: [0, 90, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <TrendingUp className="w-full h-full text-yellow-400/40" />
          </motion.div>

          <motion.div
            className="absolute top-1/5 right-1/5 w-18 h-18"
            animate={{
              y: [0, -15, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Database className="w-full h-full text-pink-400/40" />
          </motion.div>

          {/* Circuit Board Elements */}
          <motion.div
            className="absolute top-1/6 left-1/6 w-24 h-16 border border-cyan-400/20 rounded"
            animate={{
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="w-full h-full bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded flex items-center justify-center">
              <CircuitBoard className="w-8 h-8 text-cyan-400/30" />
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-1/6 right-1/6 w-20 h-12 border border-purple-400/20 rounded"
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          >
            <div className="w-full h-full bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded flex items-center justify-center">
              <CpuIcon className="w-6 h-6 text-purple-400/30" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Badge className="mb-6 glass text-sm px-4 py-2">
            <Sparkles className="h-4 w-4 mr-2" />
            AI-Powered Learning Platform
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight"
        >
          Master AI & Machine Learning with
          <br />
          <span className="text-gradient-secondary bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Expert-Led Training
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed"
        >
          Transform your career with cutting-edge AI training programs from Lish AI Labs. 
          Learn from industry experts, build real-world projects, and earn industry-recognized certifications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
        >
          <Link href="/trainings">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg px-10 py-4 rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105">
              <Brain className="h-6 w-6 mr-3" />
              Explore AI Programs
              <ArrowRight className="h-6 w-6 ml-3" />
            </Button>
          </Link>
          <Link href="/trainings/upcoming">
            <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 text-lg px-10 py-4 rounded-full backdrop-blur-sm transition-all duration-300">
              <Zap className="h-6 w-6 mr-3" />
              Upcoming Trainings
            </Button>
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
        >
          {[
            { number: "5+", label: "AI Training Programs", icon: Brain },
            { number: "100K+", label: "Expected Trainees", icon: Zap },
            { number: "10+", label: "Expert Instructors", icon: Sparkles },
            { number: "98%", label: "Success Rate", icon: ArrowRight },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              className="text-center glass p-6 rounded-2xl backdrop-blur-sm border border-white/20"
            >
              <stat.icon className="h-8 w-8 text-cyan-400 mx-auto mb-3" />
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-white/80 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
