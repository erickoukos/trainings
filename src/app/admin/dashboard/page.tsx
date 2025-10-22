"use client"

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Logo } from "@/components/ui/logo";
import { 
  Users,
  BookOpen,
  FileText,
  TrendingUp,
  Calendar,
  DollarSign,
  GraduationCap,
  UserCheck,
  BarChart3,
  Settings,
  Bell,
  Search,
  ArrowRight,
  Plus,
  Download,
  Filter,
  Eye,
  Edit,
  Trash2,
  MoreHorizontal,
  Activity,
  Target,
  Award,
  Clock,
  Star,
  AlertCircle,
  CheckCircle,
  XCircle
} from "lucide-react";
import Link from "next/link";
import { getClientSession } from "@/lib/client-session";

// Mock data - in real app, this would come from API
const stats = {
  totalTrainings: 24,
  activeTrainings: 18,
  totalUsers: 156,
  totalApplications: 89,
  pendingApplications: 12,
  completedTrainings: 6,
  totalRevenue: 450000,
  thisMonthRevenue: 125000,
  growthRate: 15.3,
  completionRate: 87.5
};

const recentApplications = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    training: "Advanced AI & Machine Learning",
    status: "PENDING",
    date: "2024-01-15",
    phone: "+234 801 234 5678",
    avatar: "JD"
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    training: "Cloud DevOps Engineering",
    status: "APPROVED",
    date: "2024-01-14",
    phone: "+234 802 345 6789",
    avatar: "JS"
  },
  {
    id: "3",
    name: "Mike Johnson",
    email: "mike@example.com",
    training: "Data Science Fundamentals",
    status: "PENDING",
    date: "2024-01-13",
    phone: "+234 803 456 7890",
    avatar: "MJ"
  },
  {
    id: "4",
    name: "Sarah Wilson",
    email: "sarah@example.com",
    training: "Full-Stack Web Development",
    status: "APPROVED",
    date: "2024-01-12",
    phone: "+234 804 567 8901",
    avatar: "SW"
  }
];

const upcomingTrainings = [
  {
    id: "1",
    title: "Advanced AI & Machine Learning",
    date: "Tomorrow, 10:00 AM",
    participants: 25,
    type: "Online",
    instructor: "Dr. Sarah Chen"
  },
  {
    id: "2",
    title: "Cloud DevOps Engineering",
    date: "Friday, 2:00 PM",
    participants: 18,
    type: "Physical",
    instructor: "Mike Johnson"
  },
  {
    id: "3",
    title: "Data Science Bootcamp",
    date: "Next Monday, 9:00 AM",
    participants: 30,
    type: "Online",
    instructor: "Dr. Alex Kumar"
  }
];

const revenueData = [
  { month: "Jan", revenue: 45000 },
  { month: "Feb", revenue: 52000 },
  { month: "Mar", revenue: 48000 },
  { month: "Apr", revenue: 61000 },
  { month: "May", revenue: 55000 },
  { month: "Jun", revenue: 67000 }
];

const applicationStatusData = [
  { status: "Approved", count: 45, percentage: 50.6 },
  { status: "Pending", count: 28, percentage: 31.5 },
  { status: "Rejected", count: 16, percentage: 18.0 }
];

export default function AdminDashboard() {
  const [user, setUser] = useState<{name?: string; email?: string; role?: string} | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchSession = async () => {
      const session = await getClientSession();
      if (!session || session.user.role !== "ADMIN") {
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
      {/* Admin Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <Logo size="md" />
              <div>
                <h1 className="text-xl font-bold text-foreground">Admin Dashboard</h1>
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
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Trainings</CardTitle>
              <BookOpen className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stats.totalTrainings}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+{stats.activeTrainings}</span> active
              </p>
            </CardContent>
          </Card>

          <Card className="hover-lift border-0 shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Users</CardTitle>
              <Users className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stats.totalUsers}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+{stats.growthRate}%</span> this month
              </p>
            </CardContent>
          </Card>

          <Card className="hover-lift border-0 shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Applications</CardTitle>
              <FileText className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stats.totalApplications}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-yellow-600">{stats.pendingApplications}</span> pending
              </p>
            </CardContent>
          </Card>

          <Card className="hover-lift border-0 shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">${stats.totalRevenue.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">${stats.thisMonthRevenue.toLocaleString()}</span> this month
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Charts and Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Revenue Chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Revenue Trends
                </CardTitle>
                <CardDescription>Monthly revenue over the last 6 months</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-end justify-between space-x-2">
                  {revenueData.map((data, index) => (
                    <div key={data.month} className="flex flex-col items-center space-y-2">
                      <div 
                        className="bg-gradient-primary rounded-t w-8 transition-all duration-500 hover:opacity-80"
                        style={{ height: `${(data.revenue / 70000) * 200}px` }}
                      />
                      <span className="text-xs text-muted-foreground">{data.month}</span>
                      <span className="text-xs font-medium">${(data.revenue / 1000).toFixed(0)}k</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Application Status Chart */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  Application Status
                </CardTitle>
                <CardDescription>Distribution of application statuses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {applicationStatusData.map((item, index) => (
                    <div key={item.status} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${
                          item.status === 'Approved' ? 'bg-green-500' :
                          item.status === 'Pending' ? 'bg-yellow-500' : 'bg-red-500'
                        }`} />
                        <span className="text-sm font-medium">{item.status}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">{item.count}</span>
                        <span className="text-sm font-medium">{item.percentage}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Recent Applications & Upcoming Trainings */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Recent Applications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Card className="border-0 shadow-md">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Recent Applications</CardTitle>
                  <CardDescription>Latest applications for your training programs</CardDescription>
                </div>
                <Link href="/admin/applications">
                  <Button variant="outline" size="sm">
                    View All
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentApplications.map((app) => (
                    <div key={app.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-white text-sm font-medium">
                          {app.avatar}
                        </div>
                        <div>
                          <p className="font-medium text-sm">{app.name}</p>
                          <p className="text-xs text-muted-foreground">{app.training}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge 
                          variant={app.status === "PENDING" ? "secondary" : "default"} 
                          className={
                            app.status === "PENDING" 
                              ? "bg-yellow-100 text-yellow-800" 
                              : app.status === "APPROVED"
                              ? "bg-green-100 text-green-800"
                              : "bg-red-100 text-red-800"
                          }
                        >
                          {app.status === "PENDING" && <Clock className="h-3 w-3 mr-1" />}
                          {app.status === "APPROVED" && <CheckCircle className="h-3 w-3 mr-1" />}
                          {app.status === "REJECTED" && <XCircle className="h-3 w-3 mr-1" />}
                          {app.status}
                        </Badge>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Upcoming Trainings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Card className="border-0 shadow-md">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Upcoming Trainings</CardTitle>
                  <CardDescription>Trainings scheduled for the near future</CardDescription>
                </div>
                <Link href="/admin/trainings">
                  <Button variant="outline" size="sm">
                    View All
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingTrainings.map((training) => (
                    <div key={training.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-secondary rounded-full flex items-center justify-center text-white">
                          <GraduationCap className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-medium text-sm">{training.title}</p>
                          <p className="text-xs text-muted-foreground">
                            <Calendar className="h-3 w-3 inline mr-1" />
                            {training.date}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">
                          {training.type}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          {training.participants} enrolled
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <Card className="border-0 shadow-md">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Common administrative tasks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link href="/admin/trainings/create">
                  <Button className="w-full bg-gradient-primary hover:opacity-90 text-white py-6 text-lg">
                    <Plus className="h-6 w-6 mr-3" />
                    Create Training
                  </Button>
                </Link>
                <Link href="/admin/applications">
                  <Button className="w-full bg-gradient-secondary hover:opacity-90 text-white py-6 text-lg">
                    <UserCheck className="h-6 w-6 mr-3" />
                    Review Applications
                  </Button>
                </Link>
                <Link href="/admin/reports">
                  <Button className="w-full bg-gradient-accent hover:opacity-90 text-white py-6 text-lg">
                    <BarChart3 className="h-6 w-6 mr-3" />
                    View Reports
                  </Button>
                </Link>
                <Link href="/admin/partners">
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 text-white py-6 text-lg">
                    <Users className="h-6 w-6 mr-3" />
                    Manage Partners
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