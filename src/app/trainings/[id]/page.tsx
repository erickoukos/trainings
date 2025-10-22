"use client"

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Calendar,
  Clock,
  Users,
  MapPin,
  Star,
  ArrowLeft,
  CheckCircle,
  AlertCircle,
  CreditCard,
  Smartphone,
  Mail,
  Phone,
  User,
  FileText,
  Shield,
  Award,
  BookOpen,
  GraduationCap,
  Zap,
  Brain
} from "lucide-react";
import Link from "next/link";

// Mock training data - in production, this would come from API
const trainingData = {
  "ai-4-youth": {
    id: "ai-4-youth",
    title: "AI-4-YOUTH TRAINING",
    description: "Youth Empowerment in Artificial Intelligence (AI) Skills for Entrepreneurship. Learn how to leverage AI to start, market, run, and grow your business.",
    beginDate: "2024-11-10",
    endDate: "2024-11-14",
    trainingType: "ONLINE",
    isPaid: true,
    price: 1500,
    seatsLimit: 50,
    seatsTaken: 0,
    category: { name: "AI & Entrepreneurship" },
    trainer: { name: "Collins Emmanuel & Sheila Chebii", avatar: "/avatars/collins-sheila.jpg" },
    rating: 0,
    reviews: 0,
    duration: "5 Days",
    level: "Beginner",
    trending: true,
    new: true,
    image: "/trainings/ai-4-youth.jpg",
    curriculum: [
      "Day 1: AI to Start a Business",
      "Day 2: AI to Market a Business", 
      "Day 3: AI to Run a Business",
      "Day 4: AI to Grow a Business",
      "Day 5: AI Agents for Business"
    ],
    requirements: [
      "Basic computer skills",
      "Internet connection",
      "Laptop or smartphone",
      "Passion for entrepreneurship"
    ],
    benefits: [
      "Hands-on AI tools training",
      "Business case studies",
      "Entrepreneurship mentorship",
      "Certificate of completion",
      "Networking opportunities"
    ]
  },
  "ai-4-bodaboda": {
    id: "ai-4-bodaboda",
    title: "AI-4-BODABODA TRAINING",
    description: "Bodaboda Empowerment in Artificial Intelligence (AI) Skills for Entrepreneurship. Specialized training for bodaboda operators to learn AI skills for business growth.",
    beginDate: "2024-11-10",
    endDate: "2024-11-14",
    trainingType: "ONLINE",
    isPaid: true,
    price: 500,
    seatsLimit: 30,
    seatsTaken: 0,
    category: { name: "AI & Entrepreneurship" },
    trainer: { name: "Kenneth Muchiri & Michael Kimani", avatar: "/avatars/kenneth-michael.jpg" },
    rating: 0,
    reviews: 0,
    duration: "5 Days",
    level: "Beginner",
    trending: true,
    new: true,
    image: "/trainings/ai-4-bodaboda.jpg",
    curriculum: [
      "Day 1: AI to Start a Business",
      "Day 2: AI to Market a Business",
      "Day 3: AI to Run a Business", 
      "Day 4: AI to Grow a Business",
      "Day 5: AI Agents for Business"
    ],
    requirements: [
      "Mobile phone with internet",
      "Basic smartphone skills",
      "Bodaboda operator experience",
      "Interest in business growth"
    ],
    benefits: [
      "Mobile-friendly learning",
      "Practical business applications",
      "Digital marketing with AI",
      "Financial management tools",
      "Community support network"
    ]
  },
  "ai-masterclass": {
    id: "ai-masterclass",
    title: "AI Masterclass",
    description: "From FOUNDATIONAL PRINCIPLES to PROFESSIONAL MASTERY. Comprehensive AI masterclass covering foundational principles to professional mastery.",
    beginDate: "2024-11-03",
    endDate: "2024-11-10",
    trainingType: "ONLINE",
    isPaid: true,
    price: 0, // Contact for pricing
    seatsLimit: 25,
    seatsTaken: 0,
    category: { name: "AI & Machine Learning" },
    trainer: { name: "Ron Moen & Rukia Hassan", avatar: "/avatars/ron-rukia.jpg" },
    rating: 0,
    reviews: 0,
    duration: "Intensive Program",
    level: "Advanced",
    trending: true,
    new: true,
    image: "/trainings/ai-masterclass.jpg",
    curriculum: [
      "Design effective prompts to guide AI tone and output",
      "Provide context to ensure factual accuracy",
      "Use iterative steps to improve AI results",
      "Apply AI skills in professional tasks",
      "Review AI output for bias and accuracy",
      "Practice ethical and responsible AI use"
    ],
    requirements: [
      "Professional experience",
      "Basic understanding of AI concepts",
      "Laptop with stable internet",
      "Commitment to intensive learning"
    ],
    benefits: [
      "Advanced AI techniques",
      "Professional certification",
      "Industry networking",
      "Career advancement",
      "Expert mentorship"
    ]
  },
  "data-science": {
    id: "data-science",
    title: "Data Science Fundamentals",
    description: "Comprehensive data analysis and machine learning with Python. Master data science fundamentals with hands-on programming.",
    beginDate: "2024-12-01",
    endDate: "2024-12-28",
    trainingType: "HYBRID",
    isPaid: true,
    price: null, // TBD
    seatsLimit: 20,
    seatsTaken: 0,
    category: { name: "Data Science" },
    trainer: { name: "Erick Ouko N. (CTO) & Collins Emmanuel", avatar: "/avatars/erick-collins.jpg" },
    rating: 0,
    reviews: 0,
    duration: "4 Weeks",
    level: "Intermediate",
    trending: false,
    new: true,
    image: "/trainings/data-science.jpg",
    curriculum: [
      "Python for Data Science",
      "Statistical Analysis",
      "Machine Learning Algorithms",
      "Data Visualization",
      "Big Data Processing",
      "Real-world Projects"
    ],
    requirements: [
      "Basic programming knowledge",
      "Laptop with Python installed",
      "Mathematical background",
      "4-week commitment"
    ],
    benefits: [
      "Industry-relevant skills",
      "Portfolio projects",
      "Mentorship from CTO",
      "Career guidance",
      "Certificate of completion"
    ]
  },
  "dahua-surveillance": {
    id: "dahua-surveillance",
    title: "Dahua Surveillance Technology",
    description: "Professional surveillance systems and security technology training. Comprehensive training on Dahua surveillance technology.",
    beginDate: "2024-12-15",
    endDate: "2024-12-29",
    trainingType: "PHYSICAL",
    isPaid: true,
    price: null, // TBD
    seatsLimit: 15,
    seatsTaken: 0,
    category: { name: "Security Technology" },
    trainer: { name: "Erick Ouko N. (CTO)", avatar: "/avatars/erick.jpg" },
    rating: 0,
    reviews: 0,
    duration: "2 Weeks",
    level: "Intermediate",
    trending: false,
    new: true,
    image: "/trainings/dahua-surveillance.jpg",
    curriculum: [
      "Dahua Camera Systems",
      "Network Configuration",
      "Remote Monitoring",
      "Security Protocols",
      "System Integration",
      "Maintenance & Troubleshooting"
    ],
    requirements: [
      "Technical background preferred",
      "Physical attendance required",
      "Basic networking knowledge",
      "2-week commitment"
    ],
    benefits: [
      "Hands-on equipment training",
      "Industry certification",
      "Professional networking",
      "Career opportunities",
      "Expert instruction"
    ]
  }
};

export default function TrainingDetailPage({ params }: { params: { id: string } }) {
  const [training, setTraining] = useState<any>(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [applicationData, setApplicationData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    paymentMethod: "mpesa",
    transactionCode: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const trainingInfo = trainingData[params.id as keyof typeof trainingData];
    if (trainingInfo) {
      setTraining(trainingInfo);
    }
  }, [params.id]);

  const handleApplicationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch('/api/applications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          trainingId: training.id,
          ...applicationData
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSuccess(true);
        setShowApplicationForm(false);
      } else {
        setError(data.error || "Application failed. Please try again.");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!training) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading training details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8">
            <Link href="/trainings" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Trainings
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Training Header */}
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <Badge className="mb-4 bg-blue-100 text-blue-800">
                        {training.category.name}
                      </Badge>
                      <h1 className="text-3xl font-bold text-gray-900 mb-4">{training.title}</h1>
                      <p className="text-lg text-gray-700 mb-6">{training.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-blue-600 mb-2">
                        {training.isPaid ? (training.price === null ? "TBD - To be decided" : `KES ${training.price?.toLocaleString()}`) : "Free"}
                      </div>
                      <div className="text-sm text-gray-600">
                        {training.seatsLimit - training.seatsTaken} seats remaining
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-5 w-5 mr-2 text-blue-600" />
                      <div>
                        <div className="text-sm font-medium">Start Date</div>
                        <div className="text-sm">{new Date(training.beginDate).toLocaleDateString()}</div>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-5 w-5 mr-2 text-blue-600" />
                      <div>
                        <div className="text-sm font-medium">Duration</div>
                        <div className="text-sm">{training.duration}</div>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="h-5 w-5 mr-2 text-blue-600" />
                      <div>
                        <div className="text-sm font-medium">Format</div>
                        <div className="text-sm">{training.trainingType}</div>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Award className="h-5 w-5 mr-2 text-blue-600" />
                      <div>
                        <div className="text-sm font-medium">Level</div>
                        <div className="text-sm">{training.level}</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <Button 
                      onClick={() => setShowApplicationForm(true)}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3"
                    >
                      <FileText className="h-5 w-5 mr-2" />
                      Apply Now
                    </Button>
                    <Button variant="outline" className="px-8 py-3">
                      <Mail className="h-5 w-5 mr-2" />
                      Contact Trainer
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Curriculum */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="h-5 w-5 mr-2 text-blue-600" />
                    Curriculum
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {training.curriculum.map((item: string, index: number) => (
                      <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Requirements */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="h-5 w-5 mr-2 text-blue-600" />
                    Requirements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {training.requirements.map((item: string, index: number) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Benefits */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <GraduationCap className="h-5 w-5 mr-2 text-blue-600" />
                    What You'll Learn
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {training.benefits.map((item: string, index: number) => (
                      <div key={index} className="flex items-center p-3 bg-green-50 rounded-lg">
                        <Zap className="h-5 w-5 text-green-600 mr-3" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Trainer Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <User className="h-5 w-5 mr-2 text-blue-600" />
                    Trainer
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                      {training.trainer.name.split(' ').map((n: string) => n[0]).join('')}
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{training.trainer.name}</h3>
                    <p className="text-sm text-gray-600 mb-4">Expert Instructor</p>
                    <Button variant="outline" size="sm" className="w-full">
                      <Mail className="h-4 w-4 mr-2" />
                      Contact
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Info */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Info</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Seats Available:</span>
                    <span className="font-semibold">{training.seatsLimit - training.seatsTaken}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Seats:</span>
                    <span className="font-semibold">{training.seatsLimit}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Format:</span>
                    <span className="font-semibold">{training.trainingType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Level:</span>
                    <span className="font-semibold">{training.level}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Application Modal */}
      {showApplicationForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Apply for Training</h2>
                <button
                  onClick={() => setShowApplicationForm(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ×
                </button>
              </div>

              {success ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Application Submitted!</h3>
                  <p className="text-gray-600 mb-4">
                    Your application has been submitted successfully. We'll review it and get back to you soon.
                  </p>
                  <Button onClick={() => setShowApplicationForm(false)} className="w-full">
                    Close
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleApplicationSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-sm font-semibold text-gray-700">Full Name *</Label>
                      <Input
                        id="name"
                        value={applicationData.name}
                        onChange={(e) => setApplicationData({...applicationData, name: e.target.value})}
                        placeholder="Enter your full name"
                        className="mt-1"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-sm font-semibold text-gray-700">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={applicationData.email}
                        onChange={(e) => setApplicationData({...applicationData, email: e.target.value})}
                        placeholder="your.email@example.com"
                        className="mt-1"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-sm font-semibold text-gray-700">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={applicationData.phone}
                      onChange={(e) => setApplicationData({...applicationData, phone: e.target.value})}
                      placeholder="+254 700 000 000"
                      className="mt-1"
                      required
                    />
                    <p className="text-xs text-gray-500 mt-1">Include country code (e.g., +254 for Kenya)</p>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm font-semibold text-gray-700">Additional Information</Label>
                    <textarea
                      id="message"
                      value={applicationData.message}
                      onChange={(e) => setApplicationData({...applicationData, message: e.target.value})}
                      rows={4}
                      placeholder="Tell us about your background, experience, or any specific questions you have about this training..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mt-1"
                    />
                    <p className="text-xs text-gray-500 mt-1">Optional: Share your background or any questions about the training</p>
                  </div>

                  {training.isPaid && training.price !== null && (
                    <div className="bg-gray-50 p-4 rounded-lg border">
                      <Label className="text-sm font-semibold text-gray-700">Payment Method *</Label>
                      <div className="space-y-3 mt-3">
                        <label className="flex items-center p-3 bg-white rounded-lg border border-gray-200 hover:border-green-300 cursor-pointer transition-colors">
                          <input
                            type="radio"
                            name="paymentMethod"
                            value="mpesa"
                            checked={applicationData.paymentMethod === "mpesa"}
                            onChange={(e) => setApplicationData({...applicationData, paymentMethod: e.target.value})}
                            className="mr-3 text-green-600 focus:ring-green-500"
                          />
                          <div className="flex items-center">
                            <Smartphone className="h-5 w-5 mr-2 text-green-600" />
                            <span className="font-medium">MPESA</span>
                          </div>
                        </label>
                        <label className="flex items-center p-3 bg-white rounded-lg border border-gray-200 hover:border-blue-300 cursor-pointer transition-colors">
                          <input
                            type="radio"
                            name="paymentMethod"
                            value="bank"
                            checked={applicationData.paymentMethod === "bank"}
                            onChange={(e) => setApplicationData({...applicationData, paymentMethod: e.target.value})}
                            className="mr-3 text-blue-600 focus:ring-blue-500"
                          />
                          <div className="flex items-center">
                            <CreditCard className="h-5 w-5 mr-2 text-blue-600" />
                            <span className="font-medium">Bank Transfer</span>
                          </div>
                        </label>
                      </div>
                    </div>
                  )}

                  {training.isPaid && training.price === null && (
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <div className="flex items-center">
                        <AlertCircle className="h-5 w-5 text-blue-600 mr-2" />
                        <div>
                          <h4 className="font-semibold text-blue-900">Pricing To Be Determined</h4>
                          <p className="text-sm text-blue-700 mt-1">
                            The pricing for this training is still being finalized. We'll contact you with payment details once your application is approved.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {applicationData.paymentMethod === "mpesa" && training.isPaid && training.price !== null && (
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <Label htmlFor="transactionCode" className="text-sm font-semibold text-gray-700">MPESA Transaction Code *</Label>
                      <Input
                        id="transactionCode"
                        value={applicationData.transactionCode}
                        onChange={(e) => setApplicationData({...applicationData, transactionCode: e.target.value})}
                        placeholder="e.g., QGH123456789"
                        className="mt-2"
                        required
                      />
                      <div className="mt-2 p-3 bg-white rounded border border-green-200">
                        <p className="text-sm text-gray-700 font-medium">Payment Instructions:</p>
                        <ol className="text-sm text-gray-600 mt-1 list-decimal list-inside space-y-1">
                          <li>Go to M-PESA menu on your phone</li>
                          <li>Select "Pay Bill"</li>
                          <li>Enter Business Number: <span className="font-mono font-bold">687 37 37</span></li>
                          <li>Enter Amount: <span className="font-bold">KES {training.price}</span></li>
                          <li>Enter your phone number as account number</li>
                          <li>Enter the transaction code above</li>
                        </ol>
                      </div>
                    </div>
                  )}

                  {error && (
                    <Alert>
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}

                  <div className="flex gap-3">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setShowApplicationForm(false)}
                      className="flex-1"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      disabled={loading}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    >
                      {loading ? "Submitting Application..." : "Apply Now"}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}

      <Footer />
    </div>
  );
}