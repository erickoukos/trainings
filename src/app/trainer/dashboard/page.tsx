"use client"

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Logo } from "@/components/ui/logo";
import { 
  BookOpen,
  Users,
  Calendar,
  TrendingUp,
  Award,
  MessageCircle,
  Settings,
  Bell,
  Plus,
  Eye,
  Edit,
  MoreHorizontal,
  Clock,
  Star,
  CheckCircle,
  AlertCircle,
  Target,
  Activity,
  DollarSign,
  GraduationCap,
  FileText,
  Upload,
  Download,
  ArrowRight,
  Play,
  Pause,
  BarChart3
} from "lucide-react";
import Link from "next/link";
import { getClientSession } from "@/lib/client-session";

// Mock data - in real app, this would come from API
const trainerStats = {
  totalTrainings: 8,
  activeTrainings: 5,
  totalStudents: 156,
  completedSessions: 42,
  upcomingSessions: 6,
  averageRating: 4.8,
  totalEarnings: 12500,
  thisMonthEarnings: 3200
};

const myTrainings = [
  {
    id: "1",
    title: "Advanced AI & Machine Learning",
    status: "ACTIVE",
    students: 25,
    nextSession: "2024-01-20T10:00:00Z",
    rating: 4.9,
    progress: 75,
    type: "Online"
  },
  {
    id: "2",
    title: "Data Science Fundamentals",
    status: "ACTIVE",
    students: 18,
    nextSession: "2024-01-22T14:00:00Z",
    rating: 4.7,
    progress: 60,
    type: "Physical"
  },
  {
    id: "3",
    title: "Cloud DevOps Engineering",
    status: "COMPLETED",
    students: 30,
    nextSession: null,
    rating: 4.8,
    progress: 100,
    type: "Online"
  }
];

const upcomingSessions = [
  {
    id: "1",
    title: "Advanced AI & Machine Learning",
    date: "2024-01-20T10:00:00Z",
    duration: "2 hours",
    students: 25,
    type: "Online",
    meetingLink: "https://meet.google.com/abc-def-ghi"
  },
  {
    id: "2",
    title: "Data Science Fundamentals",
    date: "2024-01-22T14:00:00Z",
    duration: "3 hours",
    students: 18,
    type: "Physical",
    location: "Tech Hub, Room 101"
  },
  {
    id: "3",
    title: "Machine Learning Workshop",
    date: "2024-01-25T09:00:00Z",
    duration: "4 hours",
    students: 12,
    type: "Online",
    meetingLink: "https://zoom.us/j/123456789"
  }
];

const recentApplications = [
  {
    id: "1",
    studentName: "John Doe",
    training: "Advanced AI & Machine Learning",
    appliedDate: "2024-01-15",
    status: "PENDING",
    motivation: "Eager to learn advanced AI techniques for my career in tech."
  },
  {
    id: "2",
    studentName: "Jane Smith",
    training: "Data Science Fundamentals",
    appliedDate: "2024-01-14",
    status: "APPROVED",
    motivation: "Want to transition into data science role."
  },
  {
    id: "3",
    studentName: "Mike Johnson",
    training: "Advanced AI & Machine Learning",
    appliedDate: "2024-01-13",
    status: "PENDING",
    motivation: "Looking to enhance my ML skills for current projects."
  }
];

const performanceMetrics = [
  { metric: "Completion Rate", value: "87%", trend: "+5%" },
  { metric: "Student Satisfaction", value: "4.8/5", trend: "+0.2" },
  { metric: "On-time Delivery", value: "95%", trend: "+2%" },
  { metric: "Repeat Students", value: "23%", trend: "+8%" }
];

export default function TrainerDashboard() {
  const [user, setUser] = useState<{name?: string; email?: string; role?: string} | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchSession = async () => {
      const session = await getClientSession();
      if (!session || session.user.role !== "TRAINER") {
        router.push("/auth/signin");
      } else {
        setUser(session.user);
        setLoading(false);
      }
    };
    fetchSession();
  }, [router]);

  const handleSignOut = async () => {
    await fetch("/api/auth/signout", { method: "POST" });
    router.push("/auth/signin");
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Trainer Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <Logo size="md" />
              <div>
                <h1 className="text-xl font-bold text-foreground">Trainer Dashboard</h1>
                <p className="text-sm text-muted-foreground">Welcome back, {user?.name || user?.email}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
              </Button>
              <Button onClick={handleSignOut} variant="outline" className="text-red-600 hover:text-red-700">
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          <Card className="hover-lift border-0 shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">My Trainings</CardTitle>
              <BookOpen className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{trainerStats.totalTrainings}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">{trainerStats.activeTrainings}</span> active
              </p>
            </CardContent>
          </Card>

          <Card className="hover-lift border-0 shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Students</CardTitle>
              <Users className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{trainerStats.totalStudents}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+12</span> this month
              </p>
            </CardContent>
          </Card>

          <Card className="hover-lift border-0 shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Average Rating</CardTitle>
              <Star className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{trainerStats.averageRating}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+0.2</span> this month
              </p>
            </CardContent>
          </Card>

          <Card className="hover-lift border-0 shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Earnings</CardTitle>
              <DollarSign className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">${trainerStats.totalEarnings.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">${trainerStats.thisMonthEarnings.toLocaleString()}</span> this month
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Performance Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <Card className="border-0 shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-primary" />
                Performance Metrics
              </CardTitle>
              <CardDescription>Your training performance indicators</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {performanceMetrics.map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-foreground mb-1">{metric.value}</div>
                    <div className="text-sm text-muted-foreground mb-1">{metric.metric}</div>
                    <div className="text-xs text-green-600">{metric.trend}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* My Trainings & Upcoming Sessions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* My Trainings */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="border-0 shadow-md">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>My Trainings</CardTitle>
                  <CardDescription>Your training programs and their status</CardDescription>
                </div>
                <Link href="/trainer/trainings/create">
                  <Button size="sm" className="bg-gradient-primary hover:opacity-90 text-white">
                    <Plus className="h-4 w-4 mr-2" />
                    Create New
                  </Button>
                </Link>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {myTrainings.map((training) => (
                    <div key={training.id} className="p-4 bg-muted/50 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-medium">{training.title}</h4>
                        <Badge 
                          variant={training.status === "ACTIVE" ? "default" : "secondary"}
                          className={
                            training.status === "ACTIVE" 
                              ? "bg-green-100 text-green-800" 
                              : "bg-gray-100 text-gray-800"
                          }
                        >
                          {training.status}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          <span>{training.students} students</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Star className="h-4 w-4" />
                          <span>{training.rating} rating</span>
                        </div>
                      </div>
                      <div className="mb-3">
                        <div className="flex justify-between text-sm mb-1">
                          <span>Progress</span>
                          <span>{training.progress}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className="bg-gradient-primary h-2 rounded-full transition-all duration-500"
                            style={{ width: `${training.progress}%` }}
                          />
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Link href={`/trainer/trainings/${training.id}`}>
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-2" />
                            View
                          </Button>
                        </Link>
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4 mr-2" />
                          Edit
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Upcoming Sessions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Card className="border-0 shadow-md">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Upcoming Sessions</CardTitle>
                  <CardDescription>Your scheduled training sessions</CardDescription>
                </div>
                <Link href="/trainer/schedule">
                  <Button variant="outline" size="sm">
                    View Calendar
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingSessions.map((session) => (
                    <div key={session.id} className="p-4 bg-muted/50 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-medium">{session.title}</h4>
                        <Badge variant="outline" className="text-xs">
                          {session.type}
                        </Badge>
                      </div>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(session.date).toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>{session.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          <span>{session.students} students</span>
                        </div>
                        {session.type === "Online" && session.meetingLink && (
                          <div className="flex items-center gap-2">
                            <Play className="h-4 w-4" />
                            <a href={session.meetingLink} className="text-primary hover:underline">
                              Join Meeting
                            </a>
                          </div>
                        )}
                        {session.type === "Physical" && session.location && (
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            <span>{session.location}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Recent Applications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Card className="border-0 shadow-md">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Recent Applications</CardTitle>
                <CardDescription>Student applications for your trainings</CardDescription>
              </div>
              <Link href="/trainer/applications">
                <Button variant="outline" size="sm">
                  View All
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentApplications.map((app) => (
                  <div key={app.id} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-white text-sm font-medium">
                          {app.studentName.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <h4 className="font-medium">{app.studentName}</h4>
                          <p className="text-sm text-muted-foreground">{app.training}</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{app.motivation}</p>
                      <p className="text-xs text-muted-foreground">
                        Applied on {new Date(app.appliedDate).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge 
                        variant={app.status === "PENDING" ? "secondary" : "default"}
                        className={
                          app.status === "PENDING" 
                            ? "bg-yellow-100 text-yellow-800" 
                            : "bg-green-100 text-green-800"
                        }
                      >
                        {app.status}
                      </Badge>
                      <div className="flex gap-1">
                        <Button variant="ghost" size="sm">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <XCircle className="h-4 w-4 text-red-600" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-8"
        >
          <Card className="border-0 shadow-md">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Common trainer tasks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link href="/trainer/trainings/create">
                  <Button className="w-full bg-gradient-primary hover:opacity-90 text-white py-6 text-lg">
                    <Plus className="h-6 w-6 mr-3" />
                    Create Training
                  </Button>
                </Link>
                <Link href="/trainer/applications">
                  <Button className="w-full bg-gradient-secondary hover:opacity-90 text-white py-6 text-lg">
                    <MessageCircle className="h-6 w-6 mr-3" />
                    Review Applications
                  </Button>
                </Link>
                <Link href="/trainer/resources">
                  <Button className="w-full bg-gradient-accent hover:opacity-90 text-white py-6 text-lg">
                    <Upload className="h-6 w-6 mr-3" />
                    Upload Resources
                  </Button>
                </Link>
                <Link href="/trainer/schedule">
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 text-white py-6 text-lg">
                    <Calendar className="h-6 w-6 mr-3" />
                    Manage Schedule
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </main>
    </div>
  );
}
