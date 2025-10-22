import { Suspense } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Calendar, 
  MapPin, 
  Users, 
  DollarSign, 
  Clock, 
  Star,
  Search,
  Filter,
  BookOpen,
  GraduationCap,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

// Mock data - in real app, this would come from API
const trainings = [
  {
    id: "1",
    title: "Laravel Web Development Masterclass",
    description: "Complete course on Laravel framework for modern web development. Learn from basics to advanced concepts.",
    beginDate: "2024-02-01",
    endDate: "2024-02-14",
    trainingType: "ONLINE",
    isPaid: false,
    price: null,
    seatsLimit: 25,
    seatsTaken: 12,
    category: { name: "Web Development" },
    trainer: { name: "John Doe" },
    rating: 4.8,
    reviews: 124,
    duration: "2 weeks"
  },
  {
    id: "2",
    title: "Project Management Professional (PMP)",
    description: "Master project management methodologies, tools, and best practices for successful project delivery.",
    beginDate: "2024-02-15",
    endDate: "2024-02-22",
    trainingType: "PHYSICAL",
    isPaid: true,
    price: 15000,
    seatsLimit: 30,
    seatsTaken: 8,
    category: { name: "Management" },
    trainer: { name: "Jane Smith" },
    rating: 4.9,
    reviews: 89,
    duration: "1 week"
  },
  {
    id: "3",
    title: "Data Science & Machine Learning",
    description: "Comprehensive data analysis course using Python, pandas, and machine learning algorithms.",
    beginDate: "2024-03-01",
    endDate: "2024-03-08",
    trainingType: "ONLINE",
    isPaid: true,
    price: 12000,
    seatsLimit: null,
    seatsTaken: 0,
    category: { name: "Data Science" },
    trainer: { name: "Mike Johnson" },
    rating: 4.7,
    reviews: 156,
    duration: "1 week"
  },
  {
    id: "4",
    title: "Digital Marketing Strategy",
    description: "Learn modern digital marketing techniques, SEO, social media marketing, and analytics.",
    beginDate: "2024-03-15",
    endDate: "2024-03-22",
    trainingType: "ONLINE",
    isPaid: false,
    price: null,
    seatsLimit: 50,
    seatsTaken: 23,
    category: { name: "Marketing" },
    trainer: { name: "Sarah Wilson" },
    rating: 4.6,
    reviews: 98,
    duration: "1 week"
  },
  {
    id: "5",
    title: "Cybersecurity Fundamentals",
    description: "Essential cybersecurity concepts, threat analysis, and security best practices for organizations.",
    beginDate: "2024-04-01",
    endDate: "2024-04-15",
    trainingType: "PHYSICAL",
    isPaid: true,
    price: 20000,
    seatsLimit: 20,
    seatsTaken: 15,
    category: { name: "Security" },
    trainer: { name: "David Brown" },
    rating: 4.9,
    reviews: 67,
    duration: "2 weeks"
  },
  {
    id: "6",
    title: "Leadership & Team Management",
    description: "Develop leadership skills, team building, conflict resolution, and effective communication.",
    beginDate: "2024-04-20",
    endDate: "2024-04-27",
    trainingType: "ONLINE",
    isPaid: true,
    price: 8000,
    seatsLimit: 40,
    seatsTaken: 18,
    category: { name: "Leadership" },
    trainer: { name: "Lisa Chen" },
    rating: 4.8,
    reviews: 112,
    duration: "1 week"
  }
];

export default function TrainingsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-indigo-600 rounded-lg">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">TrainingHub</h1>
                <p className="text-sm text-gray-600">Professional Development</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <Link href="/">
                <Button variant="outline">Home</Button>
              </Link>
              <Link href="/auth/signin">
                <Button className="bg-indigo-600 hover:bg-indigo-700">Sign In</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Training Programs</h1>
          <p className="text-xl text-gray-600">Discover comprehensive training programs designed to advance your career</p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search training programs..."
                className="pl-10 h-11"
              />
            </div>
            <Button variant="outline" className="h-11">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm">All Programs</Button>
            <Button variant="outline" size="sm">Online</Button>
            <Button variant="outline" size="sm">In-Person</Button>
            <Button variant="outline" size="sm">Free</Button>
            <Button variant="outline" size="sm">Paid</Button>
            <Button variant="outline" size="sm">Certified</Button>
          </div>
        </div>

        {/* Trainings Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trainings.map((training) => (
            <Card key={training.id} className="hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-3">
                  <Badge 
                    variant={training.trainingType === "ONLINE" ? "default" : "secondary"}
                    className="text-xs"
                  >
                    {training.trainingType}
                  </Badge>
                  <Badge 
                    variant={training.isPaid ? "destructive" : "outline"}
                    className="text-xs"
                  >
                    {training.isPaid ? "Paid" : "Free"}
                  </Badge>
                </div>
                <CardTitle className="text-lg leading-tight">{training.title}</CardTitle>
                <CardDescription className="text-sm line-clamp-2">
                  {training.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                    <span>{new Date(training.beginDate).toLocaleDateString()} - {new Date(training.endDate).toLocaleDateString()}</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-2 text-gray-400" />
                    <span>{training.duration}</span>
                  </div>

                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                    <span>{training.trainingType === "ONLINE" ? "Online" : "Physical Location"}</span>
                  </div>

                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-2 text-gray-400" />
                    <span>{training.seatsLimit ? `${training.seatsTaken}/${training.seatsLimit} seats` : "Unlimited seats"}</span>
                  </div>

                  {training.isPaid && (
                    <div className="flex items-center text-sm text-gray-600">
                      <DollarSign className="h-4 w-4 mr-2 text-gray-400" />
                      <span className="font-semibold">₦{training.price?.toLocaleString()}</span>
                    </div>
                  )}

                  <div className="flex items-center text-sm text-gray-600">
                    <BookOpen className="h-4 w-4 mr-2 text-gray-400" />
                    <span>{training.category.name}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                    <span className="text-sm font-medium">{training.rating}</span>
                    <span className="text-xs text-gray-500 ml-1">({training.reviews} reviews)</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link href={`/trainings/${training.id}`}>
                    <Button className="w-full">
                      View Details
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Programs
          </Button>
        </div>
      </main>
    </div>
  );
}
