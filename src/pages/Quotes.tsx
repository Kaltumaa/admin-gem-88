import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { 
  Search, 
  Filter, 
  Download, 
  Eye, 
  Edit, 
  MoreHorizontal,
  Plus,
  Calendar,
} from "lucide-react";

const Quotes = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const quotes = [
    {
      id: "QR-001",
      client: "Acme Corporation",
      email: "contact@acme.com",
      service: "Web Development",
      description: "Complete e-commerce website with payment integration",
      value: "$5,200",
      status: "pending",
      date: "2024-01-15",
      priority: "high",
    },
    {
      id: "QR-002",
      client: "TechStart Inc",
      email: "hello@techstart.com",
      service: "Mobile Application",
      description: "iOS and Android app for food delivery service",
      value: "$12,500",
      status: "approved",
      date: "2024-01-14",
      priority: "medium",
    },
    {
      id: "QR-003",
      client: "Global Solutions",
      email: "info@globalsolutions.com",
      service: "Digital Marketing",
      description: "SEO optimization and social media management",
      value: "$3,800",
      status: "reviewing",
      date: "2024-01-13",
      priority: "low",
    },
    {
      id: "QR-004",
      client: "Innovation Labs",
      email: "team@innovationlabs.com",
      service: "UI/UX Design",
      description: "Complete redesign of SaaS dashboard interface",
      value: "$7,900",
      status: "rejected",
      date: "2024-01-12",
      priority: "medium",
    },
    {
      id: "QR-005",
      client: "Future Enterprises",
      email: "contact@future.com",
      service: "Cloud Migration",
      description: "Migrate legacy systems to AWS cloud infrastructure",
      value: "$15,600",
      status: "approved",
      date: "2024-01-11",
      priority: "high",
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
      case "rejected":
        return "bg-destructive text-destructive-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-destructive/10 text-destructive border-destructive/20";
      case "medium":
        return "bg-warning/10 text-warning border-warning/20";
      case "low":
        return "bg-success/10 text-success border-success/20";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const filteredQuotes = quotes.filter(quote =>
    quote.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
    quote.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
    quote.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Quote Requests</h1>
          <p className="text-muted-foreground mt-1">
            Manage and track all customer quote requests
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button className="bg-gradient-primary hover:shadow-glow transition-smooth">
            <Plus className="w-4 h-4 mr-2" />
            New Quote
          </Button>
        </div>
      </div>

      {/* Filters */}
      <Card className="shadow-custom-md">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">Filter Quotes</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search quotes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" size="sm">
              <Calendar className="w-4 h-4 mr-2" />
              Date Range
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Quotes Table */}
      <Card className="shadow-custom-md">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-lg">All Quote Requests</CardTitle>
              <CardDescription>
                {filteredQuotes.length} of {quotes.length} quotes displayed
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Quote ID</TableHead>
                <TableHead>Client</TableHead>
                <TableHead>Service</TableHead>
                <TableHead>Value</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredQuotes.map((quote) => (
                <TableRow key={quote.id} className="hover:bg-muted/50 transition-smooth">
                  <TableCell className="font-medium">{quote.id}</TableCell>
                  <TableCell>
                    <div>
                      <p className="font-medium">{quote.client}</p>
                      <p className="text-sm text-muted-foreground">{quote.email}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <p className="font-medium">{quote.service}</p>
                      <p className="text-sm text-muted-foreground truncate max-w-xs">
                        {quote.description}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">{quote.value}</TableCell>
                  <TableCell>
                    <Badge className={getPriorityColor(quote.priority)}>
                      {quote.priority}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(quote.status)}>
                      {quote.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{quote.date}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <Eye className="mr-2 h-4 w-4" />
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="mr-2 h-4 w-4" />
                          Edit Quote
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">
                          Delete Quote
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Quotes;