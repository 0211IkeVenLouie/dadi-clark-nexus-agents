
import { Building, Book, Users, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const departments = [
    {
      name: "Business Development & Operations",
      icon: <Building className="h-8 w-8" />,
      description: "Strategic growth and operational excellence",
      path: "/business",
    },
    {
      name: "Dadi Academy",
      icon: <Book className="h-8 w-8" />,
      description: "Education and skill development programs",
      path: "/academy",
    },
    {
      name: "Administrative Logistics & Web AI",
      icon: <FileText className="h-8 w-8" />,
      description: "Administrative operations and AI solutions",
      path: "/admin",
    },
    {
      name: "Common Support",
      icon: <Users className="h-8 w-8" />,
      description: "Essential assistance and resources",
      path: "/support",
    },
  ];

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <img
          src="/lovable-uploads/28bd9d67-77ab-4ca8-a950-5a23d2a3bc6b.png"
          alt="Dadi Clark Logo"
          className="h-24 mx-auto mb-6"
        />
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Dadi Clark - AI Agents</h1>
        <p className="text-lg text-gray-600 mb-8">
          Welcome to our AI-powered platform, developed by Dadi Clark AI Officers to empower and streamline your operations.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {departments.map((dept) => (
          <Link
            key={dept.path}
            to={dept.path}
            className="block bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="text-primary">{dept.icon}</div>
              <h2 className="text-xl font-semibold text-gray-900">{dept.name}</h2>
            </div>
            <p className="text-gray-600">{dept.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Index;
