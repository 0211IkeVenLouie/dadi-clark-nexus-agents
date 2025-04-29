
import React from 'react';
import { Link } from 'react-router-dom';
import { Building, Book, Users, FileText, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import Logo from '@/components/Logo';

const departments = [
  {
    name: "Business Development & Operations",
    icon: <Building className="h-8 w-8" />,
    description: "Strategic growth and operational excellence",
    path: "/business",
    color: "from-green-100 to-green-200",
  },
  {
    name: "Dadi Academy",
    icon: <Book className="h-8 w-8" />,
    description: "Education and skill development programs",
    path: "/academy",
    color: "from-yellow-100 to-yellow-200",
  },
  {
    name: "Administrative Logistics & Web AI",
    icon: <FileText className="h-8 w-8" />,
    description: "Administrative operations and AI solutions",
    path: "/admin",
    color: "from-blue-100 to-blue-200",
  },
  {
    name: "Common Support",
    icon: <Users className="h-8 w-8" />,
    description: "Essential assistance and resources",
    path: "/support",
    color: "from-purple-100 to-purple-200",
  },
];

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-green-50 to-green-100 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in">
                Dadi Clark AI Platform
              </h1>
              <p className="text-lg text-gray-700 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                Welcome to our AI-powered platform, developed by Dadi Clark AI Officers to empower and streamline your operations.
              </p>
              <Link to="/dashboard">
                <Button className="bg-primary hover:bg-primary/90 text-white animate-fade-in" style={{ animationDelay: "0.4s" }}>
                  Explore Dashboard <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="md:w-1/2 flex justify-center animate-scale-in" style={{ animationDelay: "0.3s" }}>
              <img
                src="/lovable-uploads/28bd9d67-77ab-4ca8-a950-5a23d2a3bc6b.png"
                alt="Dadi Clark Logo"
                className="h-48 md:h-64"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Menu for Departments */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <NavigationMenu className="mx-auto">
            <NavigationMenuList className="space-x-4">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-primary/10 hover:text-primary">AI Agents</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid grid-cols-2 gap-3 p-4 w-[500px]">
                    {departments.map((dept) => (
                      <Link
                        key={dept.path}
                        to={dept.path}
                        className={`flex flex-col gap-2 rounded-md p-3 hover:bg-slate-100 bg-gradient-to-br ${dept.color}`}
                      >
                        <div className="flex items-center gap-2">
                          <div className="text-primary">{dept.icon}</div>
                          <div className="text-sm font-medium">{dept.name}</div>
                        </div>
                        <div className="text-xs text-gray-500">{dept.description}</div>
                      </Link>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/dashboard" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Dashboard
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </section>

      {/* Department Cards Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our AI Departments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept) => (
              <Link
                key={dept.path}
                to={dept.path}
                className={`flex flex-col p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 bg-gradient-to-br ${dept.color} hover:-translate-y-1`}
              >
                <div className="bg-white rounded-full p-4 w-16 h-16 mb-4 flex items-center justify-center text-primary">
                  {dept.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{dept.name}</h3>
                <p className="text-gray-600 mb-4">{dept.description}</p>
                <div className="mt-auto flex items-center text-primary font-medium">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-100 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <Logo />
          <p className="mt-4">Dadi Clark AI Officers Platform © 2025</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
