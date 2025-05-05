
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Home, RefreshCcw, ExternalLink, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Business = () => {
  const [showAgent1, setShowAgent1] = useState(false);
  const [showAgent2, setShowAgent2] = useState(false);
  const [showAgent3, setShowAgent3] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [isLovableEnvironment, setIsLovableEnvironment] = useState(false);

  // Check if running in Lovable environment
  useEffect(() => {
    const isLovable = window.location.hostname.includes('lovable');
    setIsLovableEnvironment(isLovable);
  }, []);

  // Reset iframe loaded state when closing any agent
  useEffect(() => {
    if (!showAgent1 && !showAgent2 && !showAgent3) {
      setIframeLoaded(false);
    }
  }, [showAgent1, showAgent2, showAgent3]);

  const handleIframeLoad = () => {
    setIframeLoaded(true);
  };

  const handleIframeError = () => {
    setIframeLoaded(false);
  };

  // Construct iframe URL with HTTPS
  const chatbotUrl = "https://dify.dadicoach.com/chatbot/gpLJt7BI8VN1xb01";

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
            title="Internal AI-Chatbot (Dadi Franchise Business)"
          />
        </div>
      )}

      {/* Agent 3 - Dify chatbot with improved error handling */}
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
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setIframeLoaded(false);
                  setTimeout(() => setIframeLoaded(true), 100);
                }}
                className="text-gray-600 hover:text-primary flex items-center gap-1"
              >
                <RefreshCcw className="h-4 w-4" />
                <span>Reload</span>
              </button>
              <button 
                onClick={() => setShowAgent3(false)}
                className="text-gray-600 hover:text-primary ml-2"
              >
                Close
              </button>
            </div>
          </div>
          <div className="relative" style={{ minHeight: '700px' }}>
            {isLovableEnvironment ? (
              <div className="p-6 bg-white">
                <Alert className="mb-6 border-amber-200 bg-amber-50">
                  <AlertTriangle className="h-5 w-5 text-amber-500" />
                  <AlertTitle className="text-amber-700">Cannot load external chatbot in preview</AlertTitle>
                  <AlertDescription className="text-amber-600">
                    The Dadi Business Chatbot cannot be displayed in the Lovable preview environment due to security restrictions.
                    The chatbot will work when your app is deployed or running locally.
                  </AlertDescription>
                </Alert>
                
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <div className="bg-primary/10 p-4 rounded-full mb-4">
                    <img
                      src="/lovable-uploads/8396e346-a650-4c23-8183-77878816d11b.png"
                      alt="Dadi Coach"
                      className="h-24"
                    />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Dadi Business Chatbot</h3>
                  <p className="text-gray-600 mb-6 max-w-md">
                    This chatbot provides information about Dadi franchise business opportunities and operations.
                  </p>
                  
                  <a 
                    href={chatbotUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Open Chatbot in New Tab</span>
                  </a>
                </div>
              </div>
            ) : (
              <>
                <iframe
                  src={chatbotUrl}
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    minHeight: '700px',
                    display: iframeLoaded ? 'block' : 'none'
                  }}
                  frameBorder="0"
                  allow="microphone"
                  title="Dadi Business Chatbot"
                  onLoad={handleIframeLoad}
                  onError={handleIframeError}
                />
                
                {!iframeLoaded && (
                  <div 
                    className="absolute inset-0 bg-gray-50 flex flex-col items-center justify-center text-gray-500"
                    style={{ minHeight: '700px' }}
                  >
                    <div className="mb-4 animate-pulse">
                      <svg className="w-16 h-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                      </svg>
                    </div>
                    <p className="text-center font-medium">Connection to chatbot failed</p>
                    <p className="text-sm text-center mt-2 max-w-md">The connection to dify.dadicoach.com could not be established. Please check your network connection and try again.</p>
                    <button 
                      onClick={() => {
                        setIframeLoaded(false);
                        setTimeout(() => setIframeLoaded(true), 500);
                      }}
                      className="mt-4 px-4 py-2 bg-primary text-white rounded-md flex items-center gap-2 hover:bg-primary/90 transition-colors"
                    >
                      <RefreshCcw className="w-4 h-4" />
                      <span>Try Again</span>
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Business;
