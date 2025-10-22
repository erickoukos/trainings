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
  XCircle,
  Zap,
  Brain,
  Globe,
  Shield,
  TrendingDown,
  ArrowUp,
  ArrowDown,
  RefreshCw
} from "lucide-react";
import Link from "next/link";
import { getClientSession } from "@/lib/client-session";

// Enhanced mock data with realistic Lish AI Labs metrics
const stats = {
  totalTrainings: 5,
  activeTrainings: 4,
  totalUsers: 500,
  totalApplications: 89,
  pendingApplications: 12,
  completedTrainings: 6,
  totalRevenue: 450000,
  thisMonthRevenue: 125000,
  growthRate: 15.3,
  completionRate: 98.5,
  averageRating: 4.8,
  newUsersThisMonth: 45
};

const recentApplications = [
  {
    id: "1",
    name: "John Mwangi",
    email: "john@example.com",
    training: "AI-4-YOUTH TRAINING",
    status: "PENDING",
    date: "2024-01-15",
    phone: "+254 701 234 567",
    avatar: "JM",
    amount: 1500
  },
  {
    id: "2",
    name: "Jane Wanjiku",
    email: "jane@example.com",
    training: "AI-4-BODABODA TRAINING",
    status: "APPROVED",
    date: "2024-01-14",
    phone: "+254 702 345 678",
    avatar: "JW",
    amount: 500
  },
  {
    id: "3",
    name: "Mike Otieno",
    email: "mike@example.com",
    training: "AI Masterclass",
    status: "PENDING",
    date: "2024-01-13",
    phone: "+254 703 456 789",
    avatar: "MO",
    amount: 0
  },
  {
    id: "4",
    name: "Sarah Akinyi",
    email: "sarah@example.com",
    training: "Data Science Fundamentals",
    status: "APPROVED",
    date: "2024-01-12",
    phone: "+254 704 567 890",
    avatar: "SA",
    amount: 0
  }
];

const upcomingTrainings = [
  {
    id: "1",
    title: "AI-4-YOUTH TRAINING",
    date: "2024-11-10",
    participants: 25,
    maxParticipants: 50,
    status: "ACTIVE",
    revenue: 37500
  },
  {
    id: "2",
    title: "AI-4-BODABODA TRAINING",
    date: "2024-11-10",
    participants: 15,
    maxParticipants: 30,
    status: "ACTIVE",
    revenue: 7500
  },
  {
    id: "3",
    title: "AI Masterclass",
    date: "2024-11-03",
    participants: 8,
    maxParticipants: 25,
    status: "ACTIVE",
    revenue: 0
  }
];

const quickActions = [
  { title: "Create Training", icon: Plus, href: "/admin/trainings/create", color: "bg-blue-500" },
  { title: "View Applications", icon: FileText, href: "/admin/applications", color: "bg-green-500" },
  { title: "Manage Users", icon: Users, href: "/admin/users", color: "bg-purple-500" },
  { title: "Generate Report", icon: BarChart3, href: "/admin/reports", color: "bg-orange-500" },
  { title: "Manage Partners", icon: Globe, href: "/admin/partners", color: "bg-cyan-500" },
  { title: "Settings", icon: Settings, href: "/admin/settings", color: "bg-gray-500" }
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
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Logo />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
                <p className="text-sm text-gray-600">Welcome back, {user?.name || user?.email}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="h-5 w-5" />
              </Button>
              <Button onClick={handleSignOut} variant="outline" size="sm">
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm font-medium">Total Revenue</p>
                  <p className="text-3xl font-bold">KSH {stats.totalRevenue.toLocaleString()}</p>
                  <div className="flex items-center mt-2">
                    <ArrowUp className="h-4 w-4 text-green-300 mr-1" />
                    <span className="text-green-300 text-sm">+{stats.growthRate}%</span>
                  </div>
                </div>
                <DollarSign className="h-12 w-12 text-blue-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100 text-sm font-medium">Active Trainings</p>
                  <p className="text-3xl font-bold">{stats.activeTrainings}</p>
                  <div className="flex items-center mt-2">
                    <Activity className="h-4 w-4 text-green-300 mr-1" />
                    <span className="text-green-300 text-sm">Running</span>
                  </div>
                </div>
                <BookOpen className="h-12 w-12 text-green-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100 text-sm font-medium">Total Users</p>
                  <p className="text-3xl font-bold">{stats.totalUsers}</p>
                  <div className="flex items-center mt-2">
                    <Users className="h-4 w-4 text-purple-300 mr-1" />
                    <span className="text-purple-300 text-sm">+{stats.newUsersThisMonth} this month</span>
                  </div>
                </div>
                <Users className="h-12 w-12 text-purple-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-100 text-sm font-medium">Applications</p>
                  <p className="text-3xl font-bold">{stats.totalApplications}</p>
                  <div className="flex items-center mt-2">
                    <AlertCircle className="h-4 w-4 text-orange-300 mr-1" />
                    <span className="text-orange-300 text-sm">{stats.pendingApplications} pending</span>
                  </div>
                </div>
                <FileText className="h-12 w-12 text-orange-200" />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="h-5 w-5 mr-2 text-blue-600" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {quickActions.map((action, index) => (
                  <Link key={action.title} href={action.href}>
                    <motion.div
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-all duration-200 cursor-pointer"
                    >
                      <div className={`p-2 rounded-lg ${action.color} text-white mr-3`}>
                        <action.icon className="h-4 w-4" />
                      </div>
                      <span className="font-medium text-gray-700">{action.title}</span>
                      <ArrowRight className="h-4 w-4 ml-auto text-gray-400" />
                    </motion.div>
                  </Link>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Recent Applications */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <Card className="shadow-lg border-0">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center">
                    <FileText className="h-5 w-5 mr-2 text-green-600" />
                    Recent Applications
                  </CardTitle>
                  <Link href="/admin/applications">
                    <Button variant="outline" size="sm">
                      View All
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </Link>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentApplications.map((application, index) => (
                    <motion.div
                      key={application.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                          {application.avatar}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{application.name}</p>
                          <p className="text-sm text-gray-600">{application.training}</p>
                          <p className="text-xs text-gray-500">{application.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge 
                          variant={application.status === "APPROVED" ? "default" : "secondary"}
                          className={application.status === "APPROVED" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}
                        >
                          {application.status}
                        </Badge>
                        <div className="text-right">
                          <p className="text-sm font-medium text-gray-900">
                            {application.amount > 0 ? `KSH ${application.amount}` : "Contact for pricing"}
                          </p>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Upcoming Trainings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8"
        >
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-blue-600" />
                Upcoming Trainings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {upcomingTrainings.map((training, index) => (
                  <motion.div
                    key={training.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="p-6 bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-gray-900">{training.title}</h3>
                      <Badge className="bg-green-100 text-green-800">
                        {training.status}
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="h-4 w-4 mr-2" />
                        {new Date(training.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Users className="h-4 w-4 mr-2" />
                        {training.participants}/{training.maxParticipants} participants
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <DollarSign className="h-4 w-4 mr-2" />
                        Revenue: KSH {training.revenue.toLocaleString()}
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${(training.participants / training.maxParticipants) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}