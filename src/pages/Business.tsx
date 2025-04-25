
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Business = () => {
  const [showAgent, setShowAgent] = useState(false);
  const navigate = useNavigate();

  const handleCardClick = () => {
    setShowAgent(true);
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">
          Business Development & Operations Department
        </h1>
      </div>

      {!showAgent ? (
        <Card 
          className="cursor-pointer hover:shadow-lg transition-shadow"
          onClick={handleCardClick}
        >
          <CardHeader className="flex flex-row items-center gap-4">
            <img
              src="/lovable-uploads/8396e346-a650-4c23-8183-77878816d11b.png"
              alt="Dadi Coach"
              className="h-12 cursor-pointer"
              onClick={handleLogoClick}
            />
            <CardTitle>Discover Campus Partnership Leads</CardTitle>
          </CardHeader>
        </Card>
      ) : (
        <div className="rounded-lg overflow-hidden shadow-md" style={{ minHeight: '700px' }}>
          <iframe
            src="https://udify.app/chat/m75K1BaMwITSJQ7i"
            style={{ width: '100%', height: '100%', minHeight: '700px' }}
            frameBorder="0"
            allow="microphone"
            title="Discover Campus Partnership Leads"
          />
        </div>
      )}
    </div>
  );
};

export default Business;
