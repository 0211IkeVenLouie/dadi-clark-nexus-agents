
import { Link, useLocation } from "react-router-dom";
import { Building, Book, Users, FileText } from "lucide-react";
import Logo from "./Logo";

const Sidebar = () => {
  const location = useLocation();
  
  const departments = [
    {
      name: "Business Development & Operations",
      icon: <Building className="h-5 w-5" />,
      path: "/business",
    },
    {
      name: "Dadi Academy",
      icon: <Book className="h-5 w-5" />,
      path: "/academy",
    },
    {
      name: "Administrative Logistics & Web AI",
      icon: <FileText className="h-5 w-5" />,
      path: "/admin",
    },
    {
      name: "Common Support",
      icon: <Users className="h-5 w-5" />,
      path: "/support",
    },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white shadow-lg border-r border-gray-100">
      <div className="p-4">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className="mt-8 flex flex-col gap-1">
        {departments.map((dept) => {
          const isActive = location.pathname === dept.path;
          return (
            <Link
              key={dept.path}
              to={dept.path}
              className={`flex items-center gap-3 mx-2 px-4 py-3 rounded-lg transition-all ${
                isActive 
                  ? "bg-primary/10 text-primary font-medium" 
                  : "text-gray-600 hover:bg-gray-50 hover:text-primary"
              }`}
            >
              {dept.icon}
              <span className="text-sm">{dept.name}</span>
              {isActive && <div className="w-1 h-6 bg-primary rounded-full ml-auto"></div>}
            </Link>
          );
        })}
      </div>
      <div className="absolute bottom-4 left-0 right-0 px-4">
        <div className="bg-gray-50 p-3 rounded-lg text-xs text-gray-500 text-center">
          Dadi Clark AI Officers Platform
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
