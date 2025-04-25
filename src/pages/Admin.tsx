import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const Admin = () => {
  const [showAgent1, setShowAgent1] = useState(false);
  const [showAgent2, setShowAgent2] = useState(false);

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">
          Administrative Logistics & Web AI Block
        </h1>
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors"
        >
          <Home className="w-4 h-4" />
          <span>Home</span>
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold text-primary mb-4">Overview</h2>
        <p className="text-gray-600">
          This department handles administrative operations and web-based AI solutions,
          streamlining processes and implementing cutting-edge technologies.
        </p>
      </div>

      {/* Agent 1 */}
      {!showAgent1 ? (
        <Card 
          className="cursor-pointer hover:shadow-lg transition-shadow mb-6"
          onClick={() => setShowAgent1(true)}
        >
          <CardHeader className="flex flex-row items-center gap-4">
            <img
              src="/lovable-uploads/agent1-logo.png"
              alt="Admin Agent 1"
              className="h-12"
            />
            <CardTitle>Administrative Workflow Optimizer</CardTitle>
          </CardHeader>
        </Card>
      ) : (
        <div className="rounded-lg overflow-hidden shadow-md mb-6" style={{ minHeight: '700px' }}>
          <iframe
            src="https://udify.app/chat/hJEOBTD1sVNlsNuo"
            style={{ width: '100%', height: '100%', minHeight: '700px' }}
            frameBorder="0"
            allow="microphone"
            title="Administrative Workflow Optimizer"
          />
        </div>
      )}

      {/* Agent 2 */}
      {!showAgent2 ? (
        <Card 
          className="cursor-pointer hover:shadow-lg transition-shadow"
          onClick={() => setShowAgent2(true)}
        >
          <CardHeader className="flex flex-row items-center gap-4">
            <img
              src="/lovable-uploads/agent2-logo.png"
              alt="Admin Agent 2"
              className="h-12"
            />
            <CardTitle>Web AI Integration Assistant</CardTitle>
          </CardHeader>
        </Card>
      ) : (
        <div className="rounded-lg overflow-hidden shadow-md" style={{ minHeight: '700px' }}>
          <iframe
            src="https://udify.app/chat/YEsPYzzdX3UARKKZ"
            style={{ width: '100%', height: '100%', minHeight: '700px' }}
            frameBorder="0"
            allow="microphone"
            title="Web AI Integration Assistant"
          />
        </div>
      )}
    </div>
  );
};

export default Admin;
