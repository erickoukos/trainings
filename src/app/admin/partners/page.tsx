"use client"

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Logo } from "@/components/ui/logo";
import { 
  Plus,
  Edit,
  Trash2,
  Search,
  Filter,
  ArrowLeft,
  Save,
  X,
  Upload,
  ExternalLink,
  Building2,
  Users,
  Globe,
  Phone,
  Mail,
  MapPin
} from "lucide-react";
import Link from "next/link";
import { getSession } from "@/lib/session";

// Mock data - in real app, this would come from API
const partners = [
  {
    id: "1",
    name: "SIMBA AI",
    description: "AI Innovation Partner",
    website: "https://simbaai.com",
    logo: "/partners/simba-ai.png",
    contact: {
      email: "info@simbaai.com",
      phone: "+254 700 000 000"
    },
    status: "ACTIVE",
    partnershipType: "Technology",
    startDate: "2024-01-15",
    projects: 5
  },
  {
    id: "2", 
    name: "Google",
    description: "Technology Partner",
    website: "https://google.com",
    logo: "/partners/google.png",
    contact: {
      email: "partnerships@google.com",
      phone: "+1 650 253 0000"
    },
    status: "ACTIVE",
    partnershipType: "Technology",
    startDate: "2024-02-01",
    projects: 12
  },
  {
    id: "3",
    name: "Safaricom",
    description: "Telecommunications Partner", 
    website: "https://safaricom.co.ke",
    logo: "/partners/safaricom.png",
    contact: {
      email: "partnerships@safaricom.co.ke",
      phone: "+254 722 000 000"
    },
    status: "ACTIVE",
    partnershipType: "Telecommunications",
    startDate: "2024-01-20",
    projects: 8
  },
  {
    id: "4",
    name: "ACAT Africa Center For Advanced Technology",
    description: "Technology Development Partner",
    website: "https://acat.africa",
    logo: "/partners/acat.png",
    contact: {
      email: "info@acat.africa",
      phone: "+254 20 243 5017"
    },
    status: "ACTIVE",
    partnershipType: "Research",
    startDate: "2024-01-10",
    projects: 15
  }
];

const partnershipTypes = [
  "Technology",
  "Telecommunications", 
  "Research",
  "Education",
  "Government",
  "NGO",
  "Corporate"
];

export default function PartnersPage() {
  const [user, setUser] = useState<{name?: string; email?: string; role?: string} | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("All");
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingPartner, setEditingPartner] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchSession = async () => {
      const session = await getSession();
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
          <p className="text-muted-foreground">Loading partners...</p>
        </div>
      </div>
    );
  }

  const filteredPartners = partners.filter(partner => {
    const matchesSearch = partner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        partner.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === "All" || partner.partnershipType === filterType;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <Link href="/admin/dashboard" className="flex items-center gap-2">
                <ArrowLeft className="h-5 w-5 text-muted-foreground" />
                <Logo size="sm" />
              </Link>
              <div>
                <h1 className="text-xl font-bold text-foreground">Partners Management</h1>
                <p className="text-sm text-muted-foreground">Manage your business partners and collaborations</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button onClick={handleSignOut} variant="outline" className="text-red-600 hover:text-red-700">
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
        >
          <Card className="hover-lift border-0 shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Partners</CardTitle>
              <Building2 className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{partners.length}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+2</span> this month
              </p>
            </CardContent>
          </Card>

          <Card className="hover-lift border-0 shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Active Partners</CardTitle>
              <Users className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">
                {partners.filter(p => p.status === "ACTIVE").length}
              </div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">100%</span> active rate
              </p>
            </CardContent>
          </Card>

          <Card className="hover-lift border-0 shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Projects</CardTitle>
              <Globe className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">
                {partners.reduce((sum, p) => sum + p.projects, 0)}
              </div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+5</span> this month
              </p>
            </CardContent>
          </Card>

          <Card className="hover-lift border-0 shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Partnership Types</CardTitle>
              <Filter className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{partnershipTypes.length}</div>
              <p className="text-xs text-muted-foreground">
                Diverse categories
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Filters and Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <Card className="border-0 shadow-md">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="flex flex-col md:flex-row gap-4 flex-1">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Search partners..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <select
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value)}
                    className="px-3 py-2 border rounded-lg bg-background"
                  >
                    <option value="All">All Types</option>
                    {partnershipTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <Button 
                  onClick={() => setShowAddForm(true)}
                  className="bg-gradient-primary hover:opacity-90 text-white"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Partner
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Partners Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredPartners.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="hover-lift border-0 shadow-md">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {partner.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" onClick={() => setEditingPartner(partner)}>
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-semibold">{partner.name}</CardTitle>
                  <CardDescription>{partner.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge 
                      variant={partner.status === "ACTIVE" ? "default" : "secondary"}
                      className={partner.status === "ACTIVE" ? "bg-green-100 text-green-800" : ""}
                    >
                      {partner.status}
                    </Badge>
                    <Badge variant="outline">{partner.partnershipType}</Badge>
                  </div>

                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4" />
                      <a href={partner.website} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        {partner.website}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      <span>{partner.contact.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      <span>{partner.contact.phone}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Projects:</span>
                      <span className="font-medium">{partner.projects}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Since:</span>
                      <span className="font-medium">{new Date(partner.startDate).toLocaleDateString()}</span>
                    </div>
                  </div>

                  <div className="flex gap-2 pt-4">
                    <Button variant="outline" size="sm" className="flex-1">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                    <Button size="sm" className="flex-1 bg-gradient-primary hover:opacity-90 text-white">
                      <Edit className="h-4 w-4 mr-2" />
                      Edit
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Add Partner Form Modal */}
        {showAddForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-background rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-foreground">Add New Partner</h2>
                  <Button variant="ghost" size="sm" onClick={() => setShowAddForm(false)}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Partner Name</Label>
                      <Input id="name" placeholder="Enter partner name" />
                    </div>
                    <div>
                      <Label htmlFor="type">Partnership Type</Label>
                      <select className="w-full px-3 py-2 border rounded-lg bg-background">
                        {partnershipTypes.map(type => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="description">Description</Label>
                    <Input id="description" placeholder="Brief description of the partnership" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Contact Email</Label>
                      <Input id="email" type="email" placeholder="partner@example.com" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Contact Phone</Label>
                      <Input id="phone" placeholder="+254 700 000 000" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="website">Website</Label>
                    <Input id="website" placeholder="https://partner-website.com" />
                  </div>

                  <div className="flex justify-end gap-4">
                    <Button variant="outline" onClick={() => setShowAddForm(false)}>
                      Cancel
                    </Button>
                    <Button className="bg-gradient-primary hover:opacity-90 text-white">
                      <Save className="h-4 w-4 mr-2" />
                      Add Partner
                    </Button>
                  </div>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </main>
    </div>
  );
}
