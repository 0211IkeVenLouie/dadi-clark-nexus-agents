const Business = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Business Development & Operations Department
      </h1>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold text-primary mb-4">Overview</h2>
        <p className="text-gray-600">
          The Business Development & Operations Department focuses on growth strategies
          and operational excellence, ensuring efficient processes and sustainable expansion.
        </p>
      </div>

      <div className="rounded-lg overflow-hidden shadow-md" style={{ minHeight: '700px' }}>
        <iframe
          src="https://udify.app/chat/m75K1BaMwITSJQ7i"
          style={{ width: '100%', height: '100%', minHeight: '700px' }}
          frameBorder="0"
          allow="microphone"
          title="Discover Campus Partnership Leads"
        />
      </div>
    </div>
  );
};

export default Business;
