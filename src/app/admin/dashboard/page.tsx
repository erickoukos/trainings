"use client"

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
  Search
} from "lucide-react";
import Link from "next/link";

// Mock data - in real app, this would come from API
const stats = {
  totalTrainings: 24,
  activeTrainings: 18,
  totalUsers: 156,
  totalApplications: 89,
  pendingApplications: 12,
  completedTrainings: 6,
  totalRevenue: 450000,
  thisMonthRevenue: 125000
};

const recentApplications = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    training: "Laravel Web Development",
    status: "PENDING",
    date: "2024-01-15",
    phone: "+234 801 234 5678"
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    training: "Project Management",
    status: "APPROVED",
    date: "2024-01-14",
    phone: "+234 802 345 6789"
  },
  {
    id: "3",
    name: "Mike Johnson",
    email: "mike@example.com",
    training: "Data Analysis",
    status: "PENDING",
    date: "2024-01-13",
    phone: "+234 803 456 7890"
  },
  {
    id: "4",
    name: "Sarah Wilson",
    email: "sarah@example.com",
    training: "Digital Marketing",
    status: "APPROVED",
    date: "2024-01-12",
    phone: "+234 804 567 8901"
  }
];

const upcomingTrainings = [
  {
    id: "1",
    title: "Laravel Workshop",
    date: "Tomorrow, 10:00 AM",
    participants: 25,
    type: "Online"
  },
  {
    id: "2",
    title: "Project Management",
    date: "Friday, 2:00 PM",
    participants: 18,
    type: "Physical"
  },
  {
    id: "3",
    title: "Data Science Bootcamp",
    date: "Next Monday, 9:00 AM",
    participants: 30,
    type: "Online"
  }
];

export default function AdminDashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check for session
    const checkSession = async () => {
      try {
        const response = await fetch('/api/auth/me');
        if (response.ok) {
          const data = await response.json();
          if (data.user.role === 'ADMIN') {
            setUser(data.user);
          } else {
            router.push('/auth/signin');
          }
        } else {
          router.push('/auth/signin');
        }
      } catch {
        router.push('/auth/signin');
      } finally {
        setLoading(false);
      }
    };

    checkSession();
  }, [router]);

  const handleSignOut = async () => {
    await fetch('/api/auth/signout', { method: 'POST' });
    router.push('/');
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

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
                <h1 className="text-xl font-bold text-gray-900">TrainingHub Admin</h1>
                <p className="text-sm text-gray-600">Administrative Dashboard</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Bell className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4" />
              </Button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-indigo-600">
                    {user.name?.charAt(0)}
                  </span>
                </div>
                <span className="text-sm text-gray-600">{user.name}</span>
              </div>
              <Button 
                variant="outline" 
                size="sm"
                onClick={handleSignOut}
              >
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard Overview</h1>
          <p className="text-gray-600">Welcome back! Here's what's happening with your training programs.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Trainings</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalTrainings}</div>
              <p className="text-xs text-muted-foreground">
                {stats.activeTrainings} active programs
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalUsers}</div>
              <p className="text-xs text-muted-foreground">
                +12% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Applications</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalApplications}</div>
              <p className="text-xs text-muted-foreground">
                {stats.pendingApplications} pending review
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₦{stats.totalRevenue.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                ₦{stats.thisMonthRevenue.toLocaleString()} this month
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <Card className="lg:col-span-1 border-0 shadow-md">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Common administrative tasks</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Link href="/admin/trainings">
                <Button className="w-full justify-start">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Manage Trainings
                </Button>
              </Link>
              <Link href="/admin/applications">
                <Button className="w-full justify-start" variant="outline">
                  <FileText className="h-4 w-4 mr-2" />
                  View Applications
                </Button>
              </Link>
              <Link href="/admin/users">
                <Button className="w-full justify-start" variant="outline">
                  <Users className="h-4 w-4 mr-2" />
                  Manage Users
                </Button>
              </Link>
              <Link href="/admin/reports">
                <Button className="w-full justify-start" variant="outline">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  View Reports
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Recent Applications */}
          <Card className="lg:col-span-2 border-0 shadow-md">
            <CardHeader>
              <CardTitle>Recent Applications</CardTitle>
              <CardDescription>Latest training applications requiring attention</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentApplications.map((application) => (
                  <div key={application.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                          <span className="text-sm font-medium text-indigo-600">
                            {application.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <h4 className="font-medium">{application.name}</h4>
                          <p className="text-sm text-gray-600">{application.email}</p>
                          <p className="text-sm text-gray-500">{application.training}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge variant={application.status === "APPROVED" ? "default" : "secondary"}>
                        {application.status}
                      </Badge>
                      <span className="text-xs text-gray-500">{application.date}</span>
                      <Button size="sm" variant="outline">
                        View
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Upcoming Trainings */}
        <Card className="mt-8 border-0 shadow-md">
          <CardHeader>
            <CardTitle>Upcoming Trainings</CardTitle>
            <CardDescription>Scheduled training sessions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              {upcomingTrainings.map((training) => (
                <div key={training.id} className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">{training.title}</h4>
                  <div className="space-y-1 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{training.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      <span>{training.participants} participants</span>
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="h-4 w-4 mr-2" />
                      <span>{training.type}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}