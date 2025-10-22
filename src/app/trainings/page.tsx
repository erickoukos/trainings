"use client"

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
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
  ArrowRight,
  Grid3X3,
  List,
  SlidersHorizontal,
  TrendingUp,
  Sparkles
} from "lucide-react";
import Link from "next/link";

// Mock data - in real app, this would come from API
const trainings = [
  {
    id: "1",
    title: "Advanced AI & Machine Learning",
    description: "Master cutting-edge AI and ML techniques for real-world applications. Learn from industry experts and build production-ready models.",
    beginDate: "2024-02-01",
    endDate: "2024-02-14",
    trainingType: "ONLINE",
    isPaid: true,
    price: 1200,
    seatsLimit: 25,
    seatsTaken: 12,
    category: { name: "AI & ML" },
    trainer: { name: "Dr. Sarah Chen", avatar: "/avatars/sarah.jpg" },
    rating: 4.9,
    reviews: 250,
    duration: "2 weeks",
    level: "Advanced",
    trending: true,
    new: false,
    image: "/trainings/ai-ml.jpg"
  },
  {
    id: "2",
    title: "Cloud DevOps Engineering",
    description: "Build and deploy scalable applications on AWS, Azure, and GCP. Master containerization, orchestration, and CI/CD pipelines.",
    beginDate: "2024-02-15",
    endDate: "2024-02-22",
    trainingType: "PHYSICAL",
    isPaid: true,
    price: 950,
    seatsLimit: 30,
    seatsTaken: 8,
    category: { name: "Cloud Computing" },
    trainer: { name: "Mike Johnson", avatar: "/avatars/mike.jpg" },
    rating: 4.8,
    reviews: 180,
    duration: "1 week",
    level: "Intermediate",
    trending: false,
    new: true,
    image: "/trainings/cloud-devops.jpg"
  },
  {
    id: "3",
    title: "Full-Stack Web Development",
    description: "Become a versatile developer with our MERN stack bootcamp. Build modern web applications from frontend to backend.",
    beginDate: "2024-03-01",
    endDate: "2024-03-08",
    trainingType: "ONLINE",
    isPaid: true,
    price: 1500,
    seatsLimit: null,
    seatsTaken: 0,
    category: { name: "Web Development" },
    trainer: { name: "Emily Rodriguez", avatar: "/avatars/emily.jpg" },
    rating: 4.7,
    reviews: 300,
    duration: "1 week",
    level: "Beginner",
    trending: true,
    new: false,
    image: "/trainings/fullstack.jpg"
  },
  {
    id: "4",
    title: "Data Science Fundamentals",
    description: "Learn data analysis, visualization, and machine learning with Python. Perfect for beginners starting their data science journey.",
    beginDate: "2024-03-15",
    endDate: "2024-03-22",
    trainingType: "ONLINE",
    isPaid: false,
    price: null,
    seatsLimit: 50,
    seatsTaken: 23,
    category: { name: "Data Science" },
    trainer: { name: "Dr. Alex Kumar", avatar: "/avatars/alex.jpg" },
    rating: 4.6,
    reviews: 98,
    duration: "1 week",
    level: "Beginner",
    trending: false,
    new: true,
    image: "/trainings/data-science.jpg"
  },
  {
    id: "5",
    title: "Cybersecurity Fundamentals",
    description: "Essential cybersecurity concepts, threat analysis, and security best practices for organizations.",
    beginDate: "2024-04-01",
    endDate: "2024-04-15",
    trainingType: "PHYSICAL",
    isPaid: true,
    price: 2000,
    seatsLimit: 20,
    seatsTaken: 5,
    category: { name: "Cybersecurity" },
    trainer: { name: "David Lee", avatar: "/avatars/david.jpg" },
    rating: 4.9,
    reviews: 75,
    duration: "2 weeks",
    level: "Intermediate",
    trending: false,
    new: false,
    image: "/trainings/cybersecurity.jpg"
  },
  {
    id: "6",
    title: "Advanced JavaScript & React",
    description: "Deep dive into modern JavaScript, React hooks, context API, and performance optimization techniques.",
    beginDate: "2024-04-20",
    endDate: "2024-05-05",
    trainingType: "ONLINE",
    isPaid: true,
    price: 1000,
    seatsLimit: 40,
    seatsTaken: 30,
    category: { name: "Web Development" },
    trainer: { name: "Sarah Wilson", avatar: "/avatars/sarah-w.jpg" },
    rating: 4.8,
    reviews: 110,
    duration: "2.5 weeks",
    level: "Advanced",
    trending: true,
    new: false,
    image: "/trainings/javascript-react.jpg"
  }
];

const categories = [
  "All Categories",
  "AI & ML", 
  "Web Development", 
  "Data Science", 
  "Cloud Computing", 
  "Cybersecurity",
  "Mobile Development",
  "DevOps"
];

const levels = ["All Levels", "Beginner", "Intermediate", "Advanced"];
const formats = ["All Formats", "Online", "Physical", "Hybrid"];
const sortOptions = ["Popular", "Newest", "Price: Low to High", "Price: High to Low", "Rating"];

export default function TrainingsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedLevel, setSelectedLevel] = useState("All Levels");
  const [selectedFormat, setSelectedFormat] = useState("All Formats");
  const [sortBy, setSortBy] = useState("Popular");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);
  const [filteredTrainings, setFilteredTrainings] = useState(trainings);

  useEffect(() => {
    let filtered = trainings;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(training =>
        training.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        training.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        training.category.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory !== "All Categories") {
      filtered = filtered.filter(training => training.category.name === selectedCategory);
    }

    // Level filter
    if (selectedLevel !== "All Levels") {
      filtered = filtered.filter(training => training.level === selectedLevel);
    }

    // Format filter
    if (selectedFormat !== "All Formats") {
      filtered = filtered.filter(training => training.trainingType === selectedFormat.toUpperCase());
    }

    // Sort
    switch (sortBy) {
      case "Newest":
        filtered.sort((a, b) => new Date(b.beginDate).getTime() - new Date(a.beginDate).getTime());
        break;
      case "Price: Low to High":
        filtered.sort((a, b) => (a.price || 0) - (b.price || 0));
        break;
      case "Price: High to Low":
        filtered.sort((a, b) => (b.price || 0) - (a.price || 0));
        break;
      case "Rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default: // Popular
        filtered.sort((a, b) => b.reviews - a.reviews);
    }

    setFilteredTrainings(filtered);
  }, [searchTerm, selectedCategory, selectedLevel, selectedFormat, sortBy]);

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
              Discover Your Next
              <br />
              <span className="text-gradient-secondary">AI Training</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Explore our comprehensive collection of AI and technology training programs 
              designed by industry experts to accelerate your career.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search for trainings, instructors, or topics..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 text-lg rounded-full border-0 focus:ring-2 focus:ring-white/20"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters and Controls */}
      <section className="py-8 bg-muted/30 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-4">
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category ? "bg-primary text-white" : ""}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              {/* View Mode Toggle */}
              <div className="flex border rounded-lg">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="rounded-r-none"
                >
                  <Grid3X3 className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="rounded-l-none"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>

              {/* Sort Dropdown */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border rounded-lg bg-background"
              >
                {sortOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>

              {/* Advanced Filters */}
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2"
              >
                <SlidersHorizontal className="h-4 w-4" />
                Filters
              </Button>
            </div>
          </div>

          {/* Advanced Filters Panel */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-6 p-6 bg-background rounded-lg border"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Level</label>
                  <select
                    value={selectedLevel}
                    onChange={(e) => setSelectedLevel(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg bg-background"
                  >
                    {levels.map((level) => (
                      <option key={level} value={level}>
                        {level}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Format</label>
                  <select
                    value={selectedFormat}
                    onChange={(e) => setSelectedFormat(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg bg-background"
                  >
                    {formats.map((format) => (
                      <option key={format} value={format}>
                        {format}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Price Range</label>
                  <div className="flex gap-2">
                    <Input type="number" placeholder="Min" className="flex-1" />
                    <Input type="number" placeholder="Max" className="flex-1" />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Trainings Grid */}
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-foreground">
            {filteredTrainings.length} Training{filteredTrainings.length !== 1 ? 's' : ''} Found
          </h2>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <TrendingUp className="h-4 w-4" />
            <span>Showing {filteredTrainings.length} results</span>
          </div>
        </div>

        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTrainings.map((training, index) => (
              <motion.div
                key={training.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="group hover-lift border-0 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                  {/* Training Image */}
                  <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
                    <div className="absolute top-4 left-4 flex gap-2">
                      {training.trending && (
                        <Badge className="bg-orange-500 text-white">
                          <TrendingUp className="h-3 w-3 mr-1" />
                          Trending
                        </Badge>
                      )}
                      {training.new && (
                        <Badge className="bg-green-500 text-white">
                          <Sparkles className="h-3 w-3 mr-1" />
                          New
                        </Badge>
                      )}
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-white/90 text-foreground">
                        {training.trainingType}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 right-4 flex items-center gap-1 text-white">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="text-sm font-medium">{training.rating}</span>
                    </div>
                  </div>

                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-xs">
                        {training.category.name}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {training.level}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-semibold group-hover:text-gradient-primary transition-colors duration-300">
                      {training.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2">
                      {training.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Trainer Info */}
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-medium">
                          {training.trainer.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-medium">{training.trainer.name}</p>
                        <p className="text-xs text-muted-foreground">Instructor</p>
                      </div>
                    </div>

                    {/* Training Details */}
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(training.beginDate).toLocaleDateString()} - {new Date(training.endDate).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{training.duration}</span>
                      </div>
                      {training.trainingType === "PHYSICAL" && (
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>Physical Location</span>
                        </div>
                      )}
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        <span>{training.seatsTaken}/{training.seatsLimit || "∞"} enrolled</span>
                      </div>
                    </div>

                    {/* Rating and Reviews */}
                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(training.rating)
                                ? "text-yellow-400 fill-current"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {training.rating} ({training.reviews} reviews)
                      </span>
                    </div>

                    {/* Price and CTA */}
                    <div className="flex items-center justify-between pt-4 border-t">
                      <div>
                        <span className="text-2xl font-bold text-gradient-primary">
                          {training.isPaid ? `$${training.price?.toLocaleString()}` : "Free"}
                        </span>
                      </div>
                      <Link href={`/trainings/${training.id}`}>
                        <Button className="bg-gradient-primary hover:opacity-90 text-white">
                          View Details
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {filteredTrainings.map((training, index) => (
              <motion.div
                key={training.id}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="hover-lift border-0 shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col md:flex-row">
                    {/* Image */}
                    <div className="md:w-64 h-48 md:h-auto bg-gradient-to-br from-primary/20 to-secondary/20 relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
                      <div className="absolute top-4 left-4 flex gap-2">
                        {training.trending && (
                          <Badge className="bg-orange-500 text-white">
                            <TrendingUp className="h-3 w-3 mr-1" />
                            Trending
                          </Badge>
                        )}
                        {training.new && (
                          <Badge className="bg-green-500 text-white">
                            <Sparkles className="h-3 w-3 mr-1" />
                            New
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-6">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline">{training.category.name}</Badge>
                            <Badge variant="outline">{training.level}</Badge>
                            <Badge variant="secondary">{training.trainingType}</Badge>
                          </div>
                          <h3 className="text-xl font-semibold mb-2">{training.title}</h3>
                          <p className="text-muted-foreground mb-4 line-clamp-2">{training.description}</p>
                          
                          <div className="flex items-center gap-6 text-sm text-muted-foreground mb-4">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4" />
                              <span>{new Date(training.beginDate).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4" />
                              <span>{training.duration}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Users className="h-4 w-4" />
                              <span>{training.seatsTaken}/{training.seatsLimit || "∞"}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Star className="h-4 w-4 text-yellow-400 fill-current" />
                              <span>{training.rating} ({training.reviews})</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col items-end gap-4">
                          <div className="text-right">
                            <div className="text-2xl font-bold text-gradient-primary">
                              {training.isPaid ? `$${training.price?.toLocaleString()}` : "Free"}
                            </div>
                          </div>
                          <Link href={`/trainings/${training.id}`}>
                            <Button className="bg-gradient-primary hover:opacity-90 text-white">
                              View Details
                              <ArrowRight className="h-4 w-4 ml-2" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}