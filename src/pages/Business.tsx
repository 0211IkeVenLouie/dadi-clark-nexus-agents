
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const Business = () => {
  const [showAgent, setShowAgent] = useState(false);

  const handleCardClick = () => {
    setShowAgent(true);
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">
          Business Development & Operations Department
        </h1>
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors"
        >
          <Home className="w-4 h-4" />
          <span>Home</span>
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold text-primary mb-4">Overview</h2>
        <p className="text-gray-600">
          The Business and Development refers to the combined activities of creating, growing, and managing 
          an organization with the goal of achieving sustainable success.
        </p>
      </div>

      {/* Agent 1 */}
      {!showAgent1 ? (
        <Card 
          className="cursor-pointer hover:shadow-lg transition-all mb-6 border border-gray-100 transform hover:-translate-y-1"
          onClick={() => setShowAgent(true)}
        >
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="bg-primary/10 p-2 rounded-full">
              <img
                src="/lovable-uploads/8396e346-a650-4c23-8183-77878816d11b.png"
                alt="Admin Agent 1"
                className="h-12"
              />
            </div>
            <CardTitle className="text-gray-800">AI Interview Screening</CardTitle>
          </CardHeader>
        </Card>
      ) : (
        <div className="rounded-lg overflow-hidden shadow-md mb-6 border border-gray-200" style={{ minHeight: '700px' }}>
          <div className="bg-primary/10 p-3 flex justify-between items-center">
            <h3 className="font-medium text-gray-800">Discover Campus Partnership Leads</h3>
            <button 
              onClick={() => setShowAgent(false)}
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
            title="Administrative Workflow Optimizer"
          />
        </div>
      )}
    </div>
  );
};

export default Business;
