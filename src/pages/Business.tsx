
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const Business = () => {
  const [showAgent1, setShowAgent1] = useState(false);
  const [showAgent2, setShowAgent2] = useState(false);
  const [showAgent3, setShowAgent3] = useState(false);

  return (
    <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6 border-b pb-4 border-gray-200">
        <h1 className="text-3xl font-bold text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
          Business Development & Operations Department
        </h1>
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary/90 transition-all shadow-md hover:shadow-lg"
        >
          <Home className="w-4 h-4" />
          <span>Home</span>
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8 hover:shadow-lg transition-all border border-gray-100">
        <h2 className="text-xl font-semibold text-primary mb-4">Overview</h2>
        <p className="text-gray-600">
          The Business and Development refers to the combined activities of creating, growing, and managing 
          an organization with the goal of achieving sustainable success.
        </p>
      </div>

      {/* Agent 1*/}
      {!showAgent1 ? (
        <Card 
          className="cursor-pointer hover:shadow-lg transition-all mb-6 border border-gray-100 transform hover:-translate-y-1"
          onClick={() => setShowAgent1(true)}
        >
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="bg-primary/10 p-2 rounded-full">
              <img
                src="/lovable-uploads/8396e346-a650-4c23-8183-77878816d11b.png"
                alt="Dadi Coach"
                className="h-12"
              />
            </div>
            <CardTitle className="text-gray-800">Discover Campus Partnership Leads</CardTitle>
          </CardHeader>
        </Card>
      ) : (
        <div className="rounded-lg overflow-hidden shadow-md mb-6 border border-gray-200" style={{ minHeight: '700px' }}>
          <div className="bg-primary/10 p-3 flex justify-between items-center">
            <h3 className="font-medium text-gray-800">Discover Campus Partnership Leads</h3>
            <button 
              onClick={() => setShowAgent1(false)}
              className="text-gray-600 hover:text-primary"
            >
              Close
            </button>
          </div>
          <iframe
            src="https://udify.app/chat/m75K1BaMwITSJQ7i"
            style={{ width: '100%', height: '100%', minHeight: '700px' }}
            frameBorder="0"
            allow="microphone"
            title="Discover Campus Partnership Leads"
          />
        </div>
      )}

      {/* Agent 2*/}
      {!showAgent2 ? (
        <Card 
          className="cursor-pointer hover:shadow-lg transition-all mb-6 border border-gray-100 transform hover:-translate-y-1"
          onClick={() => setShowAgent2(true)}
        >
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="bg-primary/10 p-2 rounded-full">
              <img
                src="/lovable-uploads/8396e346-a650-4c23-8183-77878816d11b.png"
                alt="Dadi Coach"
                className="h-12"
              />
            </div>
            <CardTitle className="text-gray-800">Internal AI-Chatbot (Dadi Franchise Business)</CardTitle>
          </CardHeader>
        </Card>
      ) : (
        <div className="rounded-lg overflow-hidden shadow-md mb-6 border border-gray-200" style={{ minHeight: '700px' }}>
          <div className="bg-primary/10 p-3 flex justify-between items-center">
            <h3 className="font-medium text-gray-800">Internal AI-Chatbot (Dadi Franchise Business)</h3>
            <button 
              onClick={() => setShowAgent2(false)}
              className="text-gray-600 hover:text-primary"
            >
              Close
            </button>
          </div>
          <iframe
            src="https://udify.app/chatbot/d8Q4atqOvJ4sysoP"
            style={{ width: '100%', height: '100%', minHeight: '700px' }}
            frameBorder="0"
            allow="microphone"
            title="Discover Campus Partnership Leads"
          />
        </div>
      )}

      {/* Agent 3 - Newly added Dify iframe */}
      {!showAgent3 ? (
        <Card 
          className="cursor-pointer hover:shadow-lg transition-all mb-6 border border-gray-100 transform hover:-translate-y-1"
          onClick={() => setShowAgent3(true)}
        >
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="bg-primary/10 p-2 rounded-full">
              <img
                src="/lovable-uploads/8396e346-a650-4c23-8183-77878816d11b.png"
                alt="Dadi Coach"
                className="h-12"
              />
            </div>
            <CardTitle className="text-gray-800">Dadi Business Chatbot</CardTitle>
          </CardHeader>
        </Card>
      ) : (
        <div className="rounded-lg overflow-hidden shadow-md mb-6 border border-gray-200" style={{ minHeight: '700px' }}>
          <div className="bg-primary/10 p-3 flex justify-between items-center">
            <h3 className="font-medium text-gray-800">Dadi Business Chatbot</h3>
            <button 
              onClick={() => setShowAgent3(false)}
              className="text-gray-600 hover:text-primary"
            >
              Close
            </button>
          </div>
          <iframe
            src="http://dify.dadicoach.com/chatbot/gpLJt7BI8VN1xb01"
            style={{ width: '100%', height: '100%', minHeight: '700px' }}
            frameBorder="0"
            allow="microphone"
            title="Dadi Business Chatbot"
          />
        </div>
      )}
    </div>
  );
};

export default Business;
