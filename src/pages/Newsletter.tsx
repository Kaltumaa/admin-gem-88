import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Mail, 
  Send, 
  Users, 
  Calendar, 
  FileText,
  Eye,
  Settings,
  Upload,
  Image as ImageIcon,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [selectedAudience, setSelectedAudience] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const audiences = [
    { id: "all", name: "All Contacts", count: 2847 },
    { id: "active", name: "Active Customers", count: 1843 },
    { id: "prospects", name: "Prospects", count: 542 },
    { id: "vip", name: "VIP Clients", count: 89 },
  ];

  const recentCampaigns = [
    {
      id: 1,
      subject: "Monthly Product Updates",
      sent: "2024-01-10",
      recipients: 2847,
      openRate: "24.5%",
      clickRate: "3.2%",
      status: "delivered",
    },
    {
      id: 2,
      subject: "Special Holiday Offers",
      sent: "2024-01-05",
      recipients: 1843,
      openRate: "31.8%",
      clickRate: "5.7%",
      status: "delivered",
    },
    {
      id: 3,
      subject: "Welcome to Our Services",
      sent: "2024-01-03",
      recipients: 542,
      openRate: "42.1%",
      clickRate: "8.9%",
      status: "delivered",
    },
  ];

  const handleSend = async () => {
    if (!subject || !content || !selectedAudience) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate sending newsletter
    setTimeout(() => {
      const audience = audiences.find(a => a.id === selectedAudience);
      toast({
        title: "Newsletter Sent Successfully!",
        description: `Your email has been sent to ${audience?.count} recipients.`,
      });
      setIsLoading(false);
      
      // Reset form
      setSubject("");
      setContent("");
      setSelectedAudience("");
    }, 2000);
  };

  const getSelectedAudience = () => {
    return audiences.find(a => a.id === selectedAudience);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Newsletter Broadcast</h1>
          <p className="text-muted-foreground mt-1">
            Create and send newsletters to your contact list
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm">
            <Eye className="w-4 h-4 mr-2" />
            Preview
          </Button>
          <Button variant="outline" size="sm">
            <Settings className="w-4 h-4 mr-2" />
            Templates
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-card shadow-custom-md">
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5 text-primary" />
              <div>
                <p className="text-2xl font-bold">47</p>
                <p className="text-sm text-muted-foreground">Campaigns Sent</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card shadow-custom-md">
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-success" />
              <div>
                <p className="text-2xl font-bold">28.4%</p>
                <p className="text-sm text-muted-foreground">Avg Open Rate</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card shadow-custom-md">
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <Send className="h-5 w-5 text-accent" />
              <div>
                <p className="text-2xl font-bold">4.8%</p>
                <p className="text-sm text-muted-foreground">Avg Click Rate</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card shadow-custom-md">
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-warning" />
              <div>
                <p className="text-2xl font-bold">3</p>
                <p className="text-sm text-muted-foreground">Scheduled</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Newsletter Form */}
        <Card className="lg:col-span-2 shadow-custom-md">
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <FileText className="w-5 h-5 mr-2" />
              Compose Newsletter
            </CardTitle>
            <CardDescription>
              Create and send newsletters to your selected audience
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Subject Line */}
            <div className="space-y-2">
              <Label htmlFor="subject">Subject Line</Label>
              <Input
                id="subject"
                placeholder="Enter your newsletter subject..."
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="transition-smooth focus:shadow-custom-md"
              />
            </div>

            {/* Audience Selection */}
            <div className="space-y-2">
              <Label>Target Audience</Label>
              <Select value={selectedAudience} onValueChange={setSelectedAudience}>
                <SelectTrigger className="transition-smooth focus:shadow-custom-md">
                  <SelectValue placeholder="Select your audience" />
                </SelectTrigger>
                <SelectContent>
                  {audiences.map((audience) => (
                    <SelectItem key={audience.id} value={audience.id}>
                      <div className="flex items-center justify-between w-full">
                        <span>{audience.name}</span>
                        <Badge variant="outline" className="ml-2">
                          {audience.count.toLocaleString()}
                        </Badge>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {selectedAudience && (
                <p className="text-sm text-muted-foreground">
                  This newsletter will be sent to {getSelectedAudience()?.count.toLocaleString()} recipients
                </p>
              )}
            </div>

            {/* Content */}
            <div className="space-y-2">
              <Label htmlFor="content">Newsletter Content</Label>
              <Textarea
                id="content"
                placeholder="Write your newsletter content here..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={12}
                className="transition-smooth focus:shadow-custom-md resize-none"
              />
            </div>

            {/* Media Upload */}
            <div className="space-y-2">
              <Label>Attachments & Media</Label>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  <Upload className="w-4 h-4 mr-2" />
                  Upload File
                </Button>
                <Button variant="outline" size="sm">
                  <ImageIcon className="w-4 h-4 mr-2" />
                  Add Image
                </Button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between pt-4 border-t">
              <div className="flex items-center space-x-2">
                <Button variant="outline">
                  Save Draft
                </Button>
                <Button variant="outline">
                  <Eye className="w-4 h-4 mr-2" />
                  Preview
                </Button>
              </div>
              <Button
                onClick={handleSend}
                disabled={isLoading}
                className="bg-gradient-primary hover:shadow-glow transition-smooth"
              >
                {isLoading ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </div>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Newsletter
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Recent Campaigns */}
        <Card className="shadow-custom-md">
          <CardHeader>
            <CardTitle className="text-lg">Recent Campaigns</CardTitle>
            <CardDescription>Your latest newsletter performance</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentCampaigns.map((campaign) => (
              <div key={campaign.id} className="p-4 bg-muted/30 rounded-lg space-y-2">
                <div>
                  <p className="font-medium text-sm">{campaign.subject}</p>
                  <p className="text-xs text-muted-foreground">
                    Sent to {campaign.recipients.toLocaleString()} recipients
                  </p>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-3">
                    <div>
                      <p className="text-muted-foreground">Open Rate</p>
                      <p className="font-medium text-success">{campaign.openRate}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Click Rate</p>
                      <p className="font-medium text-accent">{campaign.clickRate}</p>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">{campaign.sent}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Newsletter;