"use client"

import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Calendar,
  MapPin,
  Users,
  Clock,
  Star,
  ArrowRight,
  BookOpen,
  GraduationCap,
  CheckCircle,
  Play,
  Download,
  Share2,
  Heart,
  TrendingUp,
  Sparkles,
  Award,
  User,
  MessageCircle,
  ThumbsUp
} from "lucide-react";
import Link from "next/link";

// Mock data - in real app, this would come from API
const training = {
  id: "1",
  title: "Advanced AI & Machine Learning",
  description: "Master cutting-edge AI and ML techniques for real-world applications. Learn from industry experts and build production-ready models that solve complex business problems.",
  longDescription: "This comprehensive program covers the latest developments in artificial intelligence and machine learning. You'll learn advanced techniques including deep learning, neural networks, natural language processing, computer vision, and reinforcement learning. The course includes hands-on projects, real-world case studies, and industry best practices.",
  beginDate: "2024-02-01",
  endDate: "2024-02-14",
  trainingType: "ONLINE",
  isPaid: true,
  price: 1200,
  seatsLimit: 25,
  seatsTaken: 12,
  category: { name: "AI & ML" },
  trainer: { 
    name: "Dr. Sarah Chen", 
    avatar: "/avatars/sarah.jpg",
    bio: "Senior AI Researcher with 10+ years experience at leading tech companies",
    rating: 4.9,
    students: 2500
  },
  rating: 4.9,
  reviews: 250,
  duration: "2 weeks",
  level: "Advanced",
  trending: true,
  new: false,
  image: "/trainings/ai-ml.jpg",
  curriculum: [
    { week: 1, title: "Introduction to AI & ML", topics: ["AI Fundamentals", "ML Algorithms", "Data Preprocessing"] },
    { week: 2, title: "Deep Learning", topics: ["Neural Networks", "CNN", "RNN", "Transformers"] },
    { week: 3, title: "Advanced Topics", topics: ["NLP", "Computer Vision", "Reinforcement Learning"] },
    { week: 4, title: "Real-world Projects", topics: ["Capstone Project", "Model Deployment", "Performance Optimization"] }
  ],
  requirements: [
    "Basic programming knowledge (Python recommended)",
    "Understanding of statistics and linear algebra",
    "Laptop with Python 3.7+ installed",
    "Basic understanding of data structures"
  ],
  whatYouWillLearn: [
    "Build and train neural networks from scratch",
    "Implement advanced ML algorithms",
    "Work with real-world datasets",
    "Deploy ML models to production",
    "Optimize model performance",
    "Apply AI to solve business problems"
  ],
  relatedTrainings: [
    {
      id: "2",
      title: "Data Science Fundamentals",
      price: 800,
      rating: 4.6,
      image: "/trainings/data-science.jpg"
    },
    {
      id: "3",
      title: "Deep Learning Specialization",
      price: 1500,
      rating: 4.8,
      image: "/trainings/deep-learning.jpg"
    }
  ]
};

const reviews = [
  {
    id: 1,
    user: "John Doe",
    rating: 5,
    comment: "Excellent course! The instructor is very knowledgeable and the content is up-to-date with industry standards.",
    date: "2024-01-15",
    helpful: 12
  },
  {
    id: 2,
    user: "Jane Smith",
    rating: 5,
    comment: "This course transformed my understanding of AI. The hands-on projects were incredibly valuable.",
    date: "2024-01-10",
    helpful: 8
  },
  {
    id: 3,
    user: "Mike Johnson",
    rating: 4,
    comment: "Great content and structure. Would recommend to anyone serious about learning AI.",
    date: "2024-01-05",
    helpful: 5
  }
];

export default function TrainingDetailPage({ params }: { params: { id: string } }) {
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);

  const handleEnroll = () => {
    setIsEnrolled(true);
    // In real app, this would redirect to payment or enrollment process
  };

  const handleShare = () => {
    // In real app, this would implement sharing functionality
    navigator.clipboard.writeText(window.location.href);
  };

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
          >
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <Badge className="bg-white/20 text-white">
                    {training.category.name}
                  </Badge>
                  <Badge className="bg-white/20 text-white">
                    {training.level}
                  </Badge>
                  {training.trending && (
                    <Badge className="bg-orange-500 text-white">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      Trending
                    </Badge>
                  )}
                </div>
                
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                  {training.title}
                </h1>
                
                <p className="text-xl text-white/90 mb-8 max-w-3xl">
                  {training.description}
                </p>

                <div className="flex flex-wrap gap-6 text-white/90 mb-8">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    <span>{new Date(training.beginDate).toLocaleDateString()} - {new Date(training.endDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    <span>{training.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    <span>{training.seatsTaken}/{training.seatsLimit} enrolled</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 fill-current" />
                    <span>{training.rating} ({training.reviews} reviews)</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button 
                    size="lg" 
                    className="bg-white text-primary hover:bg-white/90"
                    onClick={handleEnroll}
                    disabled={isEnrolled}
                  >
                    {isEnrolled ? "Enrolled" : "Enroll Now"}
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-white text-white hover:bg-white/10"
                  >
                    <Play className="h-5 w-5 mr-2" />
                    Preview
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-white text-white hover:bg-white/10"
                    onClick={() => setIsFavorited(!isFavorited)}
                  >
                    <Heart className={`h-5 w-5 mr-2 ${isFavorited ? "fill-current" : ""}`} />
                    {isFavorited ? "Favorited" : "Add to Favorites"}
                  </Button>
                </div>
              </div>

              {/* Enrollment Card */}
              <div className="lg:w-80">
                <Card className="glass border-white/20">
                  <CardHeader>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-2">
                        {training.isPaid ? `$${training.price?.toLocaleString()}` : "Free"}
                      </div>
                      <p className="text-white/80">One-time payment</p>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2 text-sm text-white/90">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4" />
                        <span>Lifetime access</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4" />
                        <span>Certificate of completion</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4" />
                        <span>30-day money-back guarantee</span>
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full bg-white text-primary hover:bg-white/90"
                      onClick={handleEnroll}
                      disabled={isEnrolled}
                    >
                      {isEnrolled ? "Enrolled" : "Enroll Now"}
                    </Button>
                    
                    <div className="text-center">
                      <Button variant="ghost" className="text-white/80 hover:text-white">
                        <Share2 className="h-4 w-4 mr-2" />
                        Share
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="instructor">Instructor</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              {/* Overview Tab */}
              <TabsContent value="overview" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>About This Training</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {training.longDescription}
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>What You'll Learn</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {training.whatYouWillLearn.map((item, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Requirements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {training.requirements.map((req, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Curriculum Tab */}
              <TabsContent value="curriculum" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Training Curriculum</CardTitle>
                    <CardDescription>
                      {training.curriculum.length} weeks of comprehensive learning
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {training.curriculum.map((week, index) => (
                        <div key={index} className="border-l-2 border-primary/20 pl-6">
                          <h4 className="font-semibold text-lg mb-2">
                            Week {week.week}: {week.title}
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                            {week.topics.map((topic, topicIndex) => (
                              <div key={topicIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                                <BookOpen className="h-4 w-4" />
                                <span>{topic}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Instructor Tab */}
              <TabsContent value="instructor" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Meet Your Instructor</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center text-white text-2xl font-bold">
                        {training.trainer.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold mb-2">{training.trainer.name}</h3>
                        <p className="text-muted-foreground mb-4">{training.trainer.bio}</p>
                        <div className="flex items-center gap-6 text-sm">
                          <div className="flex items-center gap-2">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span>{training.trainer.rating} Instructor Rating</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4" />
                            <span>{training.trainer.students.toLocaleString()} Students</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Reviews Tab */}
              <TabsContent value="reviews" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Student Reviews</CardTitle>
                    <CardDescription>
                      {training.reviews} reviews with {training.rating} average rating
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {reviews.map((review) => (
                        <div key={review.id} className="border-b pb-6 last:border-b-0">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-white text-sm font-medium">
                                {review.user.split(' ').map(n => n[0]).join('')}
                              </div>
                              <div>
                                <h4 className="font-medium">{review.user}</h4>
                                <div className="flex items-center gap-1">
                                  {[...Array(5)].map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`h-4 w-4 ${
                                        i < review.rating
                                          ? "text-yellow-400 fill-current"
                                          : "text-gray-300"
                                      }`}
                                    />
                                  ))}
                                </div>
                              </div>
                            </div>
                            <span className="text-sm text-muted-foreground">
                              {new Date(review.date).toLocaleDateString()}
                            </span>
                          </div>
                          <p className="text-muted-foreground mb-3">{review.comment}</p>
                          <div className="flex items-center gap-4 text-sm">
                            <Button variant="ghost" size="sm" className="text-muted-foreground">
                              <ThumbsUp className="h-4 w-4 mr-1" />
                              Helpful ({review.helpful})
                            </Button>
                            <Button variant="ghost" size="sm" className="text-muted-foreground">
                              <MessageCircle className="h-4 w-4 mr-1" />
                              Reply
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Related Trainings */}
            <Card>
              <CardHeader>
                <CardTitle>Related Trainings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {training.relatedTrainings.map((related) => (
                  <div key={related.id} className="flex gap-3">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-sm mb-1">{related.title}</h4>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Star className="h-3 w-3 text-yellow-400 fill-current" />
                        <span>{related.rating}</span>
                        <span>•</span>
                        <span>${related.price}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-sm mb-1">Can I get a refund?</h4>
                  <p className="text-xs text-muted-foreground">
                    Yes, we offer a 30-day money-back guarantee.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-sm mb-1">Is there a certificate?</h4>
                  <p className="text-xs text-muted-foreground">
                    Yes, you'll receive a certificate upon completion.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-sm mb-1">Can I access materials later?</h4>
                  <p className="text-xs text-muted-foreground">
                    Yes, you have lifetime access to all materials.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
