import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const Support = () => {
  const [showAgent1, setShowAgent1] = useState(false);
  const [showAgent2, setShowAgent2] = useState(false);

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">
          Common Support Block
        </h1>
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors"
        >
          <Home className="w-4 h-4" />
          <span>Home</span>
        </Link>
      </div>

      {/* Agent 1 */}
      {!showAgent1 ? (
        <Card 
          className="cursor-pointer hover:shadow-lg transition-shadow mb-6"
          onClick={() => setShowAgent1(true)}
        >
          <CardHeader className="flex flex-row items-center gap-4">
            <img
              src="/lovable-uploads/8396e346-a650-4c23-8183-77878816d11b.png"
              alt="Dadi Coach"
              className="h-12"
            />
            <CardTitle>Generate Daily / Weekly / Monthly Task Lists</CardTitle>
          </CardHeader>
        </Card>
      ) : (
        <div className="rounded-lg overflow-hidden shadow-md mb-6" style={{ minHeight: '700px' }}>
          <iframe
            src="https://udify.app/chat/gKWiq22DtCoJ3g7u"
            style={{ width: '100%', height: '100%', minHeight: '700px' }}
            frameBorder="0"
            allow="microphone"
            title="Internal Coordination Assistant"
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
              src="/lovable-uploads/8396e346-a650-4c23-8183-77878816d11b.png"
              alt="Dadi Coach"
              className="h-12"
            />
            <CardTitle>AI Data Analyst</CardTitle>
          </CardHeader>
        </Card>
      ) : (
        <div className="rounded-lg overflow-hidden shadow-md" style={{ minHeight: '700px' }}>
          <iframe
            src="https://udify.app/chat/Ooy98rWl7p82mxCp"
            style={{ width: '100%', height: '100%', minHeight: '700px' }}
            frameBorder="0"
            allow="microphone"
            title="Interdepartmental Support Agent"
          />
        </div>
      )}
    </div>
  );
};

export default Support;
