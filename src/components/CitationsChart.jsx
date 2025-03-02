"use client";

import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const CitationsChart = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCitationsData = async () => {
      try {
        const response = await fetch("/api/scholar/citations");
        const jsonData = await response.json();

        console.log(jsonData);

        // Check if yearWiseCitations is available in the expected format
        if (jsonData.yearWiseCitations) {
          // Convert the yearWiseCitations object into an array for chart data
          const chartData = Object.keys(jsonData.yearWiseCitations).map((year) => ({
            year,
            citations: parseInt(jsonData.yearWiseCitations[year], 10), // Ensure citation count is an integer
          }));

          console.log(chartData);

          // Set the data for the chart
          setData(chartData);
        }
      } catch (error) {
        console.error("Error fetching citation data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCitationsData();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
        Citations Over Time
      </h2>

      {loading ? (
        <p className="text-center text-gray-500">Loading citation data...</p>
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} margin={{ top: 10, right: 30, left: 10, bottom: 10 }}>
            <XAxis 
              dataKey="year" 
              tick={{ fill: "#6b7280" }} 
              tickFormatter={(tick) => tick} // Ensure that the year appears as it is
              angle={-45} // Rotate the text to avoid overlapping
              textAnchor="end" // Align text properly
            />
            <YAxis tick={{ fill: "#6b7280" }} />
            <Tooltip />
            <Bar dataKey="citations" fill="url(#colorUv)" />
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default CitationsChart;