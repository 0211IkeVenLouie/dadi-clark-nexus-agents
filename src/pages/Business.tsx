import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Home, ExternalLink, RefreshCw } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";

const Business = () => {
  const [showAgent1, setShowAgent1] = useState(false);
  const [showAgent2, setShowAgent2] = useState(false);
  const [showExternalAgent, setShowExternalAgent] = useState(false);
  const [showExternalLink, setShowExternalLink] = useState(true);
  const [iframeLoading, setIframeLoading] = useState(true);
  const [iframeError, setIframeError] = useState(false);
  const { toast } = useToast();

  const handleIframeLoad = () => {
    setIframeLoading(false);
    setIframeError(false);
  };

  const handleIframeError = () => {
    setIframeLoading(false);
    setIframeError(true);
    toast({
      title: "Chatbot Loading Error",
      description: "The external chatbot couldn't be loaded. Please try opening it in a new tab or refreshing.",
      variant: "destructive",
    });
  };

  const openInNewTab = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleExternalLinkClick = () => {
    setShowExternalLink(false);
    setShowExternalAgent(true);
    setIframeLoading(true);
    setIframeError(false);
  };

  // When showing the external agent, set a timeout to auto-trigger error state
  // if loading takes too long (helps prevent endless loading spinner)
  useEffect(() => {
    let timeoutId: number;
    
    if (showExternalAgent && iframeLoading) {
      timeoutId = window.setTimeout(() => {
        if (iframeLoading) {
          handleIframeError();
        }
      }, 5000); // 5 seconds timeout
    }
    
    return () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [showExternalAgent, iframeLoading]);

  const refreshIframe = () => {
    setIframeLoading(true);
    setIframeError(false);
    // Get the iframe and properly cast it to HTMLIFrameElement
    const iframe = document.getElementById('externalChatbot') as HTMLIFrameElement;
    if (iframe) {
      // Add timestamp to URL to force reload and avoid cache
      iframe.src = `https://dify.dadicoach.com/chat/4deBb7XRBt89SBrW?t=${Date.now()}`;
    }
  };

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

      {/* External Dify Chatbot Link */}
      {showExternalLink && (
        <Card 
          className="cursor-pointer hover:shadow-lg transition-all mb-6 border border-gray-100 transform hover:-translate-y-1"
        >
          <CardHeader className="flex flex-row items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-primary/10 p-2 rounded-full">
                <img
                  src="/lovable-uploads/8396e346-a650-4c23-8183-77878816d11b.png"
                  alt="Dadi Coach"
                  className="h-12"
                />
              </div>
              <CardTitle className="text-gray-800">External Dify Chatbot</CardTitle>
            </div>
            <Button 
              onClick={handleExternalLinkClick}
              className="bg-primary text-white hover:bg-primary/90"
            >
              Click here to open chatbot
            </Button>
          </CardHeader>
        </Card>
      )}

      {/* External Dify Chatbot */}
      {showExternalAgent && (
        <div className="rounded-lg overflow-hidden shadow-md mb-6 border border-gray-200" style={{ minHeight: '700px' }}>
          <div className="bg-primary/10 p-3 flex justify-between items-center">
            <h3 className="font-medium text-gray-800">External Dify Chatbot</h3>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => openInNewTab("https://dify.dadicoach.com/chat/4deBb7XRBt89SBrW")}
                className="text-gray-600 hover:text-primary flex items-center gap-1"
                title="Open in new tab"
              >
                <ExternalLink className="h-4 w-4" />
              </button>
              {(iframeLoading || iframeError) && (
                <button 
                  onClick={refreshIframe}
                  className="text-gray-600 hover:text-primary flex items-center gap-1"
                  title="Try to reload"
                >
                  <RefreshCw className="h-4 w-4" />
                </button>
              )}
              <button 
                onClick={() => {
                  setShowExternalAgent(false);
                  setShowExternalLink(true);
                }}
                className="text-gray-600 hover:text-primary"
              >
                Close
              </button>
            </div>
          </div>
          {iframeLoading && (
            <div className="flex items-center justify-center bg-gray-50" style={{ minHeight: '650px' }}>
              <div className="text-center w-full max-w-md p-8">
                <div className="relative h-12 w-12 mx-auto mb-4">
                  <Skeleton className="h-12 w-12 rounded-full" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-8 w-8 rounded-full border-t-2 border-primary animate-spin"></div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">Loading chatbot...</p>
                <p className="text-gray-500 text-sm">
                  This may take a moment. If loading continues for too long, try using the "Open in new tab" button.
                </p>
              </div>
            </div>
          )}
          {iframeError && (
            <div className="flex items-center justify-center p-10 bg-gray-50" style={{ minHeight: '650px' }}>
              <div className="text-center max-w-md">
                <div className="text-red-500 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Unable to load the chatbot</h3>
                <p className="text-gray-600 mb-4">
                  The external chatbot couldn't be loaded. This may be due to security restrictions in the preview environment.
                </p>
                <div className="flex flex-col gap-2">
                  <button 
                    onClick={refreshIframe}
                    className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 inline-flex items-center justify-center gap-2 mb-2"
                  >
                    <RefreshCw className="h-4 w-4" />
                    Try again
                  </button>
                  <button 
                    onClick={() => openInNewTab("https://dify.dadicoach.com/chat/4deBb7XRBt89SBrW")}
                    className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 inline-flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Open in new tab
                  </button>
                </div>
              </div>
            </div>
          )}
          <iframe
            id="externalChatbot"
            src={`https://dify.dadicoach.com/chat/4deBb7XRBt89SBrW?t=${Date.now()}`}
            style={{ 
              width: '100%', 
              height: '700px', 
              border: 'none',
              display: iframeLoading || iframeError ? 'none' : 'block'
            }}
            onLoad={handleIframeLoad}
            onError={handleIframeError}
            allow="microphone"
            title="External Dify Chatbot"
          />
        </div>
      )}

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
    </div>
  );
};

export default Business;
