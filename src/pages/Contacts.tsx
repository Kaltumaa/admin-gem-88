import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
  Mail, 
  Phone, 
  MoreHorizontal,
  Plus,
  Users,
  UserPlus,
} from "lucide-react";

const Contacts = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const contacts = [
    {
      id: "1",
      name: "John Smith",
      email: "john.smith@acme.com",
      phone: "+1 (555) 123-4567",
      company: "Acme Corporation",
      position: "CEO",
      status: "active",
      tags: ["VIP", "Enterprise"],
      lastContact: "2024-01-15",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
    },
    {
      id: "2",
      name: "Sarah Johnson",
      email: "sarah@techstart.com",
      phone: "+1 (555) 234-5678",
      company: "TechStart Inc",
      position: "CTO",
      status: "active",
      tags: ["Tech", "Startup"],
      lastContact: "2024-01-14",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face",
    },
    {
      id: "3",
      name: "Michael Chen",
      email: "m.chen@global.com",
      phone: "+1 (555) 345-6789",
      company: "Global Solutions",
      position: "Marketing Director",
      status: "inactive",
      tags: ["Marketing"],
      lastContact: "2024-01-10",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face",
    },
    {
      id: "4",
      name: "Emily Davis",
      email: "emily@innovation.com",
      phone: "+1 (555) 456-7890",
      company: "Innovation Labs", 
      position: "Product Manager",
      status: "prospect",
      tags: ["Innovation", "SaaS"],
      lastContact: "2024-01-12",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face",
    },
    {
      id: "5",
      name: "Robert Wilson",
      email: "robert@future.com",
      phone: "+1 (555) 567-8901",
      company: "Future Enterprises",
      position: "VP Engineering",
      status: "active",
      tags: ["Enterprise", "Cloud"],
      lastContact: "2024-01-11",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-success text-success-foreground";
      case "inactive":
        return "bg-muted text-muted-foreground";
      case "prospect":
        return "bg-accent text-accent-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Contacts</h1>
          <p className="text-muted-foreground mt-1">
            Manage your business contacts and relationships
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button variant="outline" size="sm">
            <UserPlus className="w-4 h-4 mr-2" />
            Import
          </Button>
          <Button className="bg-gradient-primary hover:shadow-glow transition-smooth">
            <Plus className="w-4 h-4 mr-2" />
            Add Contact
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-card shadow-custom-md">
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-primary" />
              <div>
                <p className="text-2xl font-bold">2,847</p>
                <p className="text-sm text-muted-foreground">Total Contacts</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card shadow-custom-md">
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-success rounded-full"></div>
              <div>
                <p className="text-2xl font-bold">1,843</p>
                <p className="text-sm text-muted-foreground">Active</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card shadow-custom-md">
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-accent rounded-full"></div>
              <div>
                <p className="text-2xl font-bold">542</p>
                <p className="text-sm text-muted-foreground">Prospects</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card shadow-custom-md">
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-muted rounded-full"></div>
              <div>
                <p className="text-2xl font-bold">462</p>
                <p className="text-sm text-muted-foreground">Inactive</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card className="shadow-custom-md">
        <CardHeader>
          <CardTitle className="text-lg">Search & Filter</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search contacts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Contacts Table */}
      <Card className="shadow-custom-md">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-lg">All Contacts</CardTitle>
              <CardDescription>
                {filteredContacts.length} of {contacts.length} contacts displayed
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Contact</TableHead>
                <TableHead>Company & Position</TableHead>
                <TableHead>Contact Info</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Tags</TableHead>
                <TableHead>Last Contact</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredContacts.map((contact) => (
                <TableRow key={contact.id} className="hover:bg-muted/50 transition-smooth">
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={contact.avatar} alt={contact.name} />
                        <AvatarFallback>{contact.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{contact.name}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <p className="font-medium">{contact.company}</p>
                      <p className="text-sm text-muted-foreground">{contact.position}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2 text-sm">
                        <Mail className="h-3 w-3 text-muted-foreground" />
                        <span>{contact.email}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <Phone className="h-3 w-3 text-muted-foreground" />
                        <span>{contact.phone}</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(contact.status)}>
                      {contact.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {contact.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell className="text-muted-foreground text-sm">
                    {contact.lastContact}
                  </TableCell>
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
                          <Mail className="mr-2 h-4 w-4" />
                          Send Email
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Phone className="mr-2 h-4 w-4" />
                          Call Contact
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          Edit Contact
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                          Delete Contact
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

export default Contacts;