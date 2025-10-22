"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Logo } from "@/components/ui/logo";
import { 
  ArrowLeft, 
  Eye, 
  EyeOff, 
  Mail, 
  Lock,
  User,
  CheckCircle,
  Sparkles,
  Brain,
  Users,
  Award,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    if (!formData.agreeToTerms) {
      setError("Please agree to the terms and conditions");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (data.success) {
        router.push('/auth/signin?message=Account created successfully. Please sign in.');
      } else {
        setError(data.error || "An error occurred. Please try again.");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const features = [
    { icon: Brain, text: "AI-Powered Learning" },
    { icon: Users, text: "Expert Instructors" },
    { icon: Award, text: "Industry Certifications" }
  ];

  const steps = [
    { number: 1, title: "Personal Info", description: "Tell us about yourself" },
    { number: 2, title: "Account Setup", description: "Create your credentials" },
    { number: 3, title: "Get Started", description: "Complete your profile" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-10 p-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <ArrowLeft className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Back to Home</span>
          </Link>
          <Logo size="sm" />
        </div>
      </div>

      <div className="flex min-h-screen">
        {/* Left Side - Form */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-md"
          >
            <Card className="border-0 shadow-xl">
              <CardHeader className="text-center pb-8">
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <Logo size="lg" className="mx-auto mb-4" />
                </motion.div>
                <CardTitle className="text-2xl font-display font-bold text-foreground">
                  Create Your Account
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Join thousands of professionals advancing their AI skills
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                {/* Progress Steps */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="mb-8"
                >
                  <div className="flex items-center justify-between">
                    {steps.map((step, index) => (
                      <div key={step.number} className="flex items-center">
                        <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium ${
                          currentStep >= step.number 
                            ? 'bg-primary text-white' 
                            : 'bg-muted text-muted-foreground'
                        }`}>
                          {currentStep > step.number ? <CheckCircle className="h-4 w-4" /> : step.number}
                        </div>
                        {index < steps.length - 1 && (
                          <div className={`flex-1 h-0.5 mx-4 ${
                            currentStep > step.number ? 'bg-primary' : 'bg-muted'
                          }`} />
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>

                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6"
                  >
                    <Alert variant="destructive">
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Step 1: Personal Information */}
                  {currentStep === 1 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      className="space-y-4"
                    >
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName" className="text-sm font-medium">
                            First Name
                          </Label>
                          <div className="relative mt-2">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                              id="firstName"
                              name="firstName"
                              type="text"
                              placeholder="John"
                              value={formData.firstName}
                              onChange={handleInputChange}
                              className="pl-10"
                              required
                            />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="lastName" className="text-sm font-medium">
                            Last Name
                          </Label>
                          <div className="relative mt-2">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                              id="lastName"
                              name="lastName"
                              type="text"
                              placeholder="Doe"
                              value={formData.lastName}
                              onChange={handleInputChange}
                              className="pl-10"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Account Setup */}
                  {currentStep === 2 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      className="space-y-4"
                    >
                      <div>
                        <Label htmlFor="email" className="text-sm font-medium">
                          Email Address
                        </Label>
                        <div className="relative mt-2">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="password" className="text-sm font-medium">
                          Password
                        </Label>
                        <div className="relative mt-2">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="password"
                            name="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Create a strong password"
                            value={formData.password}
                            onChange={handleInputChange}
                            className="pl-10 pr-10"
                            required
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                          >
                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </button>
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="confirmPassword" className="text-sm font-medium">
                          Confirm Password
                        </Label>
                        <div className="relative mt-2">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="confirmPassword"
                            name="confirmPassword"
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Confirm your password"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            className="pl-10 pr-10"
                            required
                          />
                          <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                          >
                            {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Terms and Conditions */}
                  {currentStep === 3 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      className="space-y-4"
                    >
                      <div className="flex items-start space-x-3">
                        <input
                          id="agreeToTerms"
                          name="agreeToTerms"
                          type="checkbox"
                          checked={formData.agreeToTerms}
                          onChange={handleInputChange}
                          className="mt-1 h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                          required
                        />
                        <div className="text-sm text-muted-foreground">
                          <Label htmlFor="agreeToTerms" className="cursor-pointer">
                            I agree to the{" "}
                            <Link href="/terms" className="text-primary hover:underline">
                              Terms of Service
                            </Link>{" "}
                            and{" "}
                            <Link href="/privacy" className="text-primary hover:underline">
                              Privacy Policy
                            </Link>
                          </Label>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex justify-between">
                    {currentStep > 1 && (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setCurrentStep(currentStep - 1)}
                      >
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Previous
                      </Button>
                    )}
                    
                    {currentStep < 3 ? (
                      <Button
                        type="button"
                        onClick={() => setCurrentStep(currentStep + 1)}
                        className="ml-auto bg-gradient-primary hover:opacity-90 text-white"
                      >
                        Next
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    ) : (
                      <Button
                        type="submit"
                        className="ml-auto bg-gradient-primary hover:opacity-90 text-white"
                        disabled={loading}
                      >
                        {loading ? "Creating Account..." : "Create Account"}
                      </Button>
                    )}
                  </div>
                </form>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                  className="mt-6 text-center"
                >
                  <p className="text-sm text-muted-foreground">
                    Already have an account?{" "}
                    <Link href="/auth/signin" className="text-primary hover:underline font-medium">
                      Sign in
                    </Link>
                  </p>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Right Side - Branding */}
        <div className="hidden lg:flex lg:flex-1 bg-gradient-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10 flex flex-col justify-center px-12 text-white">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl font-display font-bold mb-6">
                Start Your AI Journey
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Join our community of AI professionals and unlock your potential 
                with world-class training programs and industry certifications.
              </p>
              
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.text}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <feature.icon className="h-4 w-4" />
                    </div>
                    <span className="text-white/90">{feature.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              className="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-xl"
              animate={{
                y: [0, -20, 0],
                x: [0, 10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-20 left-20 w-24 h-24 bg-white/10 rounded-full blur-xl"
              animate={{
                y: [0, 20, 0],
                x: [0, -10, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
