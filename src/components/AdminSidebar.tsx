import { NavLink, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { 
  LayoutDashboard, 
  MessageSquare, 
  Users, 
  Mail, 
  Settings,
  Shield
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
    badge: null,
  },
  {
    title: "Quote Requests",
    url: "/quotes",
    icon: MessageSquare,
    badge: "12",
  },
  {
    title: "Contacts",
    url: "/contacts",
    icon: Users,
    badge: null,
  },
  {
    title: "Newsletter",
    url: "/newsletter",
    icon: Mail,
    badge: null,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
    badge: null,
  },
];

export function AdminSidebar() {
  const { state } = useSidebar();
  const location = useLocation();

  const isCollapsed = state === "collapsed";

  return (
    <Sidebar className={`bg-gradient-sidebar ${isCollapsed ? "w-16" : "w-64"} border-r border-white/10`}>
      <SidebarContent className="text-white">
        {/* Logo */}
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
              <Shield className="h-6 w-6 text-white" />
            </div>
            {!isCollapsed && (
              <div>
                <h2 className="font-bold text-lg">Admin Panel</h2>
                <p className="text-xs text-white/60">Management System</p>
              </div>
            )}
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className="text-white/60 text-xs uppercase tracking-wider font-medium px-6 py-3">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="px-3">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      className={({ isActive }) =>
                        `flex items-center px-3 py-2.5 rounded-lg transition-smooth group ${
                          isActive
                            ? "bg-white/10 text-white shadow-custom-md"
                            : "text-white/70 hover:bg-white/5 hover:text-white"
                        }`
                      }
                    >
                      <item.icon className={`h-5 w-5 ${isCollapsed ? "" : "mr-3"}`} />
                      {!isCollapsed && (
                        <>
                          <span className="font-medium">{item.title}</span>
                          {item.badge && (
                            <span className="ml-auto bg-accent text-accent-foreground text-xs px-2 py-1 rounded-full">
                              {item.badge}
                            </span>
                          )}
                        </>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* User section */}
        <div className="mt-auto p-4 border-t border-white/10">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
              <span className="text-sm font-medium text-white">A</span>
            </div>
            {!isCollapsed && (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white truncate">Admin User</p>
                <p className="text-xs text-white/60 truncate">admin@company.com</p>
              </div>
            )}
          </div>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}