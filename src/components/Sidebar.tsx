
import { Link } from "react-router-dom";
import { Building, Book, Users, FileText } from "lucide-react";

const Sidebar = () => {
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
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white shadow-lg">
      <div className="p-4">
        <Logo />
      </div>
      <nav className="mt-8">
        {departments.map((dept) => (
          <Link
            key={dept.path}
            to={dept.path}
            className="flex items-center gap-3 px-6 py-3 text-gray-600 hover:bg-primary hover:bg-opacity-10 hover:text-primary transition-colors"
          >
            {dept.icon}
            <span className="text-sm">{dept.name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
