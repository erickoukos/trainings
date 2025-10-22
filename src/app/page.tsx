import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  Users, 
  BookOpen, 
  Award, 
  Calendar,
  MapPin,
  Clock,
  Star,
  ArrowRight,
  Shield,
  TrendingUp
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-indigo-600 rounded-lg">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">TrainingHub</h1>
                <p className="text-sm text-gray-600">Professional Development Platform</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/trainings">
                <Button variant="outline" className="hidden sm:flex">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Browse Trainings
                </Button>
              </Link>
              <Link href="/auth/signin">
                <Button className="bg-indigo-600 hover:bg-indigo-700">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-indigo-100 text-indigo-800 border-indigo-200">
              🚀 Professional Training Platform
            </Badge>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Advance Your Career with
              <span className="text-indigo-600"> Expert Training</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Join thousands of professionals who have enhanced their skills through our comprehensive training programs. 
              From technical skills to leadership development, we have the perfect program for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/trainings">
                <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-lg px-8 py-4">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Explore Trainings
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
              <Link href="/trainings?type=free">
                <Button size="lg" variant="outline" className="text-lg px-8 py-4">
                  <Award className="h-5 w-5 mr-2" />
                  Free Programs
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">500+</div>
              <div className="text-sm text-gray-600">Training Programs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">10K+</div>
              <div className="text-sm text-gray-600">Professionals Trained</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">50+</div>
              <div className="text-sm text-gray-600">Expert Trainers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">95%</div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardHeader>
                <div className="p-3 bg-blue-100 rounded-lg w-fit mb-4">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Expert-Led Training</CardTitle>
                <CardDescription>
                  Learn from industry professionals with years of real-world experience and proven track records.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardHeader>
                <div className="p-3 bg-green-100 rounded-lg w-fit mb-4">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">Interactive Learning</CardTitle>
                <CardDescription>
                  Engage with peers and instructors through hands-on projects, group discussions, and collaborative exercises.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardHeader>
                <div className="p-3 bg-purple-100 rounded-lg w-fit mb-4">
                  <Award className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Industry Certificates</CardTitle>
                <CardDescription>
                  Earn recognized certificates that validate your skills and boost your career prospects.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardHeader>
                <div className="p-3 bg-orange-100 rounded-lg w-fit mb-4">
                  <Calendar className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Flexible Scheduling</CardTitle>
                <CardDescription>
                  Choose from online, in-person, or hybrid formats that fit your schedule and learning preferences.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardHeader>
                <div className="p-3 bg-red-100 rounded-lg w-fit mb-4">
                  <TrendingUp className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle className="text-xl">Career Growth</CardTitle>
                <CardDescription>
                  Our programs are designed to accelerate your career with practical skills employers value.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardHeader>
                <div className="p-3 bg-indigo-100 rounded-lg w-fit mb-4">
                  <Shield className="h-6 w-6 text-indigo-600" />
                </div>
                <CardTitle className="text-xl">Quality Assurance</CardTitle>
                <CardDescription>
                  All our programs undergo rigorous quality checks to ensure the highest standards of education.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Popular Trainings Preview */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Popular Training Programs</h3>
              <p className="text-gray-600">Discover our most sought-after training programs</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Badge className="w-fit bg-green-100 text-green-800">Free</Badge>
                  <CardTitle>Web Development Fundamentals</CardTitle>
                  <CardDescription>Learn HTML, CSS, and JavaScript from scratch</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-gray-600 mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>2 weeks</span>
                    <MapPin className="h-4 w-4 ml-4 mr-2" />
                    <span>Online</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                      <span className="text-sm font-medium">4.8</span>
                      <span className="text-sm text-gray-500 ml-1">(124 reviews)</span>
                    </div>
                    <Button size="sm">View Details</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Badge className="w-fit bg-blue-100 text-blue-800">Premium</Badge>
                  <CardTitle>Project Management Professional</CardTitle>
                  <CardDescription>Master project management methodologies and tools</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-gray-600 mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>4 weeks</span>
                    <MapPin className="h-4 w-4 ml-4 mr-2" />
                    <span>Hybrid</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                      <span className="text-sm font-medium">4.9</span>
                      <span className="text-sm text-gray-500 ml-1">(89 reviews)</span>
                    </div>
                    <Button size="sm">View Details</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Badge className="w-fit bg-purple-100 text-purple-800">Certified</Badge>
                  <CardTitle>Data Science & Analytics</CardTitle>
                  <CardDescription>Advanced data analysis and machine learning techniques</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-gray-600 mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>6 weeks</span>
                    <MapPin className="h-4 w-4 ml-4 mr-2" />
                    <span>In-Person</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                      <span className="text-sm font-medium">4.7</span>
                      <span className="text-sm text-gray-500 ml-1">(156 reviews)</span>
                    </div>
                    <Button size="sm">View Details</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Learning Journey?</h3>
            <p className="text-xl mb-6 opacity-90">
              Join thousands of professionals who have transformed their careers with our training programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/trainings">
                <Button size="lg" variant="secondary" className="bg-white text-indigo-600 hover:bg-gray-100">
                  Browse All Programs
                </Button>
              </Link>
              <Link href="/auth/signin">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-600">
                  Get Started Today
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <GraduationCap className="h-6 w-6" />
                <span className="text-xl font-bold">TrainingHub</span>
              </div>
              <p className="text-gray-400">
                Empowering professionals through world-class training programs.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Programs</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white">Web Development</Link></li>
                <li><Link href="#" className="hover:text-white">Data Science</Link></li>
                <li><Link href="#" className="hover:text-white">Project Management</Link></li>
                <li><Link href="#" className="hover:text-white">Leadership</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white">Help Center</Link></li>
                <li><Link href="#" className="hover:text-white">Contact Us</Link></li>
                <li><Link href="#" className="hover:text-white">FAQ</Link></li>
                <li><Link href="#" className="hover:text-white">Community</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white">About Us</Link></li>
                <li><Link href="#" className="hover:text-white">Careers</Link></li>
                <li><Link href="#" className="hover:text-white">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-white">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TrainingHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}