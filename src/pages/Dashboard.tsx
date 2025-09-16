import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  MessageSquare, 
  Mail, 
  TrendingUp, 
  Activity,
  Eye,
  Calendar,
  BarChart3
} from "lucide-react";

const Dashboard = () => {
  const metrics = [
    {
      title: "Total Contacts",
      value: "2,847",
      change: "+12.5%",
      trend: "up",
      icon: Users,
      description: "Active contacts in database",
    },
    {
      title: "Quote Requests",
      value: "127",
      change: "+8.2%",
      trend: "up",
      icon: MessageSquare,
      description: "New requests this month",
    },
    {
      title: "Newsletter Sent",
      value: "15,892",
      change: "+23.1%",
      trend: "up",
      icon: Mail,
      description: "Emails delivered successfully",
    },
    {
      title: "Conversion Rate",
      value: "3.24%",
      change: "-2.1%",
      trend: "down",
      icon: TrendingUp,
      description: "Quote to customer conversion",
    },
  ];

  const recentQuotes = [
    {
      id: "QR-001",
      client: "Acme Corp",
      service: "Web Development",
      status: "pending",
      value: "$5,200",
      date: "2 hours ago",
    },
    {
      id: "QR-002",
      client: "TechStart Inc",
      service: "Mobile App",
      status: "approved",
      value: "$12,500",
      date: "5 hours ago",
    },
    {
      id: "QR-003",
      client: "Global Solutions",
      service: "Consulting",
      status: "reviewing",
      value: "$3,800",
      date: "1 day ago",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "bg-success text-success-foreground";
      case "pending":
        return "bg-warning text-warning-foreground";
      case "reviewing":
        return "bg-accent text-accent-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Welcome back! Here's what's happening with your business.
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm">
            <Eye className="w-4 h-4 mr-2" />
            View Reports
          </Button>
          <Button className="bg-gradient-primary hover:shadow-glow transition-smooth">
            <Calendar className="w-4 h-4 mr-2" />
            Schedule Meeting
          </Button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <Card key={metric.title} className="bg-gradient-card shadow-custom-md hover:shadow-custom-lg transition-smooth">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {metric.title}
              </CardTitle>
              <metric.icon className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{metric.value}</div>
              <div className="flex items-center space-x-2 mt-1">
                <Badge 
                  variant={metric.trend === "up" ? "default" : "secondary"}
                  className={metric.trend === "up" ? "bg-success text-success-foreground" : ""}
                >
                  {metric.change}
                </Badge>
                <p className="text-xs text-muted-foreground">{metric.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Quote Requests */}
        <Card className="lg:col-span-2 shadow-custom-md">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-lg">Recent Quote Requests</CardTitle>
                <CardDescription>Latest inquiries from potential clients</CardDescription>
              </div>
              <Button variant="outline" size="sm">
                <BarChart3 className="w-4 h-4 mr-2" />
                View All
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentQuotes.map((quote) => (
                <div key={quote.id} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div>
                      <p className="font-medium text-foreground">{quote.client}</p>
                      <p className="text-sm text-muted-foreground">{quote.service}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Badge className={getStatusColor(quote.status)}>
                      {quote.status}
                    </Badge>
                    <div className="text-right">
                      <p className="font-medium text-foreground">{quote.value}</p>
                      <p className="text-xs text-muted-foreground">{quote.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="shadow-custom-md">
          <CardHeader>
            <CardTitle className="text-lg">Quick Actions</CardTitle>
            <CardDescription>Common administrative tasks</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
              <Button
                className="w-full justify-start bg-gradient-primary hover:shadow-glow transition-smooth"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                New Quote Request
              </Button>
            <Button variant="outline" className="w-full justify-start">
              <Users className="w-4 h-4 mr-2" />
              Add Contact
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Mail className="w-4 h-4 mr-2" />
              Send Newsletter
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Activity className="w-4 h-4 mr-2" />
              View Analytics
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;