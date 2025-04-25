
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

const Business = () => {
  const [showAgent, setShowAgent] = useState(false);

  const handleCardClick = () => {
    setShowAgent(true);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Business Development & Operations Department
      </h1>

      {!showAgent ? (
        <Card 
          className="cursor-pointer hover:shadow-lg transition-shadow"
          onClick={handleCardClick}
        >
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 text-primary"
              >
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
            </div>
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
