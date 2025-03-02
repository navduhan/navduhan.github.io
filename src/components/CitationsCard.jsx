import React, { useEffect, useState } from 'react';

const CitationCard = () => {
  const [citationData, setCitationData] = useState(null);

  useEffect(() => {
    // Fetch citation data (Replace with actual API endpoint or mock data for testing)
    const fetchCitationData = async () => {
      const response = await fetch('/api/scholar/citations'); // Replace with the correct endpoint
      const data = await response.json();
      setCitationData(data);
    };

    fetchCitationData();
  }, []);

  // Show a loading state while the data is being fetched
  if (!citationData) {
    return (
      <div className="max-w-lg p-2 border border-gray-300 shadow-md rounded-lg">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-2/3 mb-4"></div>
          <div className="h-6 bg-gray-200 rounded w-1/2 mb-4"></div>
          <div className="h-6 bg-gray-200 rounded w-1/3"></div>
        </div>
      </div>
    );
  }

  return (
    <div className=" p-4 border border-sky-300 shadow-md rounded-lg bg-white">
      {/* <h3 className="text-lg font-semibold text-gray-800">Citation Metrics</h3> */}
      <table className="min-w-full items-center table-auto  border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-1 text-left font-medium text-gray-600">Metric</th>
            <th className="p-1 text-left font-medium text-gray-600">All</th>
            <th className="p-1 text-left font-medium text-gray-600">Since 2020</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t border-gray-200">
            <td className="p-1 text-gray-600 ">Citations</td>
            <td className="p-1 text-gray-600 text-center">{citationData.citations.all}</td>
            <td className="p-1 text-gray-600 text-center">{citationData.citations.since2020}</td>
          </tr>
          <tr className="border-t border-gray-200">
            <td className="p-1 text-gray-600">h-index</td>
            <td className="p-1 text-gray-600 text-center">{citationData.hIndex.all}</td>
            <td className="p-1 text-gray-600 text-center">{citationData.hIndex.since2020}</td>
          </tr>
          <tr className="border-t border-gray-200">
            <td className="p-1 text-gray-600">i10-index</td>
            <td className="p-1 text-gray-600 text-center">{citationData.i10Index.all}</td>
            <td className="p-1 text-gray-600 text-center">{citationData.i10Index.since2020}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CitationCard;