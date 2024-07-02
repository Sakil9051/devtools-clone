import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const RequestDetails = () => {
  const selectedRequest = useSelector((state) => state.requests.selectedRequest);
  const [activeTab, setActiveTab] = useState('headers');

  if (!selectedRequest) return <div>Select a request to see details</div>;

  const { headers, response, preview } = selectedRequest;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Request Details</h2>
      <div className="mb-4">
        <nav className="flex space-x-4">
          <button
            onClick={() => setActiveTab('headers')}
            className={`px-4 py-2 ${activeTab === 'headers' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Headers
          </button>
          <button
            onClick={() => setActiveTab('preview')}
            className={`px-4 py-2 ${activeTab === 'preview' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Preview
          </button>
          <button
            onClick={() => setActiveTab('response')}
            className={`px-4 py-2 ${activeTab === 'response' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Response
          </button>
        </nav>
      </div>
      {activeTab === 'headers' && (
        <div>
          <h3 className="text-lg font-semibold">General</h3>
          <pre className="bg-gray-100 p-2">{JSON.stringify(headers.general, null, 2)}</pre>
          <h3 className="text-lg font-semibold">Response Headers</h3>
          <pre className="bg-gray-100 p-2">{JSON.stringify(headers.response, null, 2)}</pre>
          <h3 className="text-lg font-semibold">Request Headers</h3>
          <pre className="bg-gray-100 p-2">{JSON.stringify(headers.request, null, 2)}</pre>
        </div>
      )}
      {activeTab === 'preview' && (
        <div>
          <h3 className="text-lg font-semibold">Preview</h3>
          <pre className="bg-gray-100 p-2">{JSON.stringify(preview, null, 2)}</pre>
        </div>
      )}
      {activeTab === 'response' && (
        <div>
          <h3 className="text-lg font-semibold">Response</h3>
          <pre className="bg-gray-100 p-2">{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default RequestDetails;
