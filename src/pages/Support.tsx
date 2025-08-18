
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const Support = () => {
  const [showAgent1, setShowAgent1] = useState(false);
  const [showAgent2, setShowAgent2] = useState(false);
  const [showAgent3, setShowAgent3] = useState(false);
  const [showAgent4, setShowAgent4] = useState(false);
  const [showAgent5, setShowAgent5] = useState(false);


  return (
    <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6 border-b pb-4 border-gray-200">
        <h1 className="text-3xl font-bold text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
          Common Support Block
        </h1>
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary/90 transition-all shadow-md hover:shadow-lg"
        >
          <Home className="w-4 h-4" />
          <span>Home</span>
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold text-primary mb-4">Overview</h2>
        <p className="text-gray-600">
          The Common Support Block refers to the essential services and systems that 
          support core business operations across departments.
        </p>
      </div>

      {/* Agent 1 */}
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
            <CardTitle className="text-gray-800">AI Dadi Analyst</CardTitle>
          </CardHeader>
        </Card>
      ) : (
        <div className="rounded-lg overflow-hidden shadow-md mb-6 border border-gray-200" style={{ minHeight: '700px' }}>
          <div className="bg-primary/10 p-3 flex justify-between items-center">
            <h3 className="font-medium text-gray-800">AI Dadi Analyst</h3>
            <button 
              onClick={() => setShowAgent1(false)}
              className="text-gray-600 hover:text-primary"
            >
              Close
            </button>
          </div>
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
          className="cursor-pointer hover:shadow-lg transition-all border border-gray-100 transform hover:-translate-y-1"
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
            <CardTitle className="text-gray-800">Generate Daily / Weekly / Monthly Task Lists</CardTitle>
          </CardHeader>
        </Card>
      ) : (
        <div className="rounded-lg overflow-hidden shadow-md border border-gray-200" style={{ minHeight: '700px' }}>
          <div className="bg-primary/10 p-3 flex justify-between items-center">
            <h3 className="font-medium text-gray-800">Generate Daily / Weekly / Monthly Task Lists</h3>
            <button 
              onClick={() => setShowAgent2(false)}
              className="text-gray-600 hover:text-primary"
            >
              Close
            </button>
          </div>
          <iframe
            src="https://dify.dadicoach.com/chat/3vggWJljFZyEUrui"
            style={{ width: '100%', height: '100%', minHeight: '700px' }}
            frameBorder="0"
            allow="microphone"
            title="Interdepartmental Support Agent"
          />
        </div>
      )}

      {/* Agent 3 */}
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
            <CardTitle className="text-gray-800">M.E.D.I.A. (Multimodal Engine for Dynamic Image & Animation)</CardTitle>
          </CardHeader>
        </Card>
      ) : (
        <div className="rounded-lg overflow-hidden shadow-md mb-6 border border-gray-200" style={{ minHeight: '700px' }}>
          <div className="bg-primary/10 p-3 flex justify-between items-center">
            <h3 className="font-medium text-gray-800">M.E.D.I.A. (Multimodal Engine for Dynamic Image & Animation)</h3>
            <button 
              onClick={() => setShowAgent3(false)}
              className="text-gray-600 hover:text-primary"
            >
              Close
            </button>
          </div>
          <iframe
            src="https://dify.dadicoach.com/chatbot/B6zcBczKpcAnG6eH"
            style={{ width: '100%', height: '100%', minHeight: '700px' }}
            frameBorder="0"
            allow="microphone"
            title="Internal Coordination Assistant"
          />
        </div>
      )}
      {/* Agent 4 */}
      {!showAgent4 ? (
        <Card 
          className="cursor-pointer hover:shadow-lg transition-all mb-6 border border-gray-100 transform hover:-translate-y-1"
          onClick={() => setShowAgent4(true)}
        >
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="bg-primary/10 p-2 rounded-full">
              <img
                src="/lovable-uploads/8396e346-a650-4c23-8183-77878816d11b.png"
                alt="Dadi Coach"
                className="h-12"
              />
            </div>
            <CardTitle className="text-gray-800">PPT Generation (Test)</CardTitle>
          </CardHeader>
        </Card>
      ) : (
        <div className="rounded-lg overflow-hidden shadow-md mb-6 border border-gray-200" style={{ minHeight: '700px' }}>
          <div className="bg-primary/10 p-3 flex justify-between items-center">
            <h3 className="font-medium text-gray-800">PPT Generation (Test)</h3>
            <button 
              onClick={() => setShowAgent4(false)}
              className="text-gray-600 hover:text-primary"
            >
              Close
            </button>
          </div>
          <iframe
            src="https://dify.dadicoach.com/chatbot/B6zcBczKpcAnG6eH"
            style={{ width: '100%', height: '100%', minHeight: '700px' }}
            frameBorder="0"
            allow="microphone"
            title="Internal Coordination Assistant"
          />
        </div>
      )}

      {/* Agent 5 */}
      {!showAgent5 ? (
        <Card 
          className="cursor-pointer hover:shadow-lg transition-all mb-6 border border-gray-100 transform hover:-translate-y-1"
          onClick={() => setShowAgent5(true)}
        >
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="bg-primary/10 p-2 rounded-full">
              <img
                src="/lovable-uploads/8396e346-a650-4c23-8183-77878816d11b.png"
                alt="Dadi Coach"
                className="h-12"
              />
            </div>
            <CardTitle className="text-gray-800">Personal Mentor AI</CardTitle>
          </CardHeader>
        </Card>
      ) : (
        <div className="rounded-lg overflow-hidden shadow-md mb-6 border border-gray-200" style={{ minHeight: '700px' }}>
          <div className="bg-primary/10 p-3 flex justify-between items-center">
            <h3 className="font-medium text-gray-800">Personal Mentor AI</h3>
            <button 
              onClick={() => setShowAgent5(false)}
              className="text-gray-600 hover:text-primary"
            >
              Close
            </button>
          </div>
          <iframe
            src="https://dify.dadicoach.com/chatbot/Ptpnx40S4AG7rAib"
            style={{ width: '100%', height: '100%', minHeight: '700px' }}
            frameBorder="0"
            allow="microphone"
            title="Internal Coordination Assistant"
          />
        </div>
      )}

    </div>
  );
};

export default Support;
