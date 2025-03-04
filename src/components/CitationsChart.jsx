"use client";

import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
  ReferenceLine,
} from "recharts";
import { FaChartLine } from "react-icons/fa";

const CitationsChart = ({ citations }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalCitations, setTotalCitations] = useState(0);
  const [hindex, setHindex] = useState(0);
  const [i10index, setI10index] = useState(0);

  useEffect(() => {
    const fetchCitationsData = async () => {
      try {
        // If citations are passed as props, use them directly
        if (citations && citations.yearWiseCitations) {
          processData(citations);
          return;
        }

        const response = await fetch("/api/citations");
        if (!response.ok) {
          throw new Error(`API responded with status: ${response.status}`);
        }

        const jsonData = await response.json();
        // console.log(jsonData);
        processData(jsonData);
      } catch (error) {
        console.error("Error fetching citation data:", error);
        setError("Failed to load citation data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    const processData = (jsonData) => {
      if (jsonData.yearWiseCitations) {
        // Convert the yearWiseCitations object into an array for chart data
        const chartData = Object.keys(jsonData.yearWiseCitations)
          .map((year) => ({
            year,
            citations: parseInt(jsonData.yearWiseCitations[year], 10),
          }))
          .sort((a, b) => parseInt(a.year) - parseInt(b.year)); // Sort by year ascending

        setData(chartData);
      }
      // Calculate total citations
      const total = jsonData.citations.all;
      const hindex = jsonData.hIndex.all;
      const i10 = jsonData.i10Index.all;
      setTotalCitations(total);
      setHindex(hindex);
      setI10index(i10);
     
    };

    fetchCitationsData();
  }, [citations]);

  // Custom tooltip component
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white dark:bg-gray-800 p-3 border border-gray-200 dark:border-gray-700 shadow-md rounded-md">
          <p className="font-semibold text-gray-800 dark:text-gray-200">{`Year: ${label}`}</p>
          <p className="text-blue-600 dark:text-blue-400">
            {`Citations: ${payload[0].value}`}
          </p>
        </div>
      );
    }
    return null;
  };

  // Calculate average citations per year
  const averageCitations =
    data.length > 0 ? Math.round(totalCitations / data.length) : 0;

  return (
    <div className="w-full bg-white dark:bg-gray-800 rounded-lg shadow-sm">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
        <h2 className="text-xl font-bold flex items-center text-gray-800 dark:text-gray-200">
          <FaChartLine className="mr-2 text-blue-600 dark:text-blue-400" />
          Citations Over Time
        </h2>
        {!loading && !error && (
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Total:{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              {totalCitations}
            </span>
          </div>
        )}
      </div>

      <div className="p-4">
        {loading ? (
          <div className="flex flex-col items-center justify-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
            <p className="text-gray-500 dark:text-gray-400">
              Loading citation data...
            </p>
          </div>
        ) : error ? (
          <div className="flex flex-col items-center justify-center h-64">
            <p className="text-red-500 dark:text-red-400">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Retry
            </button>
          </div>
        ) : (
          <>
       
            <ResponsiveContainer width="100%" height={350}>
              <BarChart
                data={data}
                margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis
                  dataKey="year"
                  tick={{ fill: "#6b7280" }}
                  angle={-45}
                  textAnchor="end"
                  height={60}
                  tickMargin={10}
                />
                <YAxis
                  tick={{ fill: "#6b7280" }}
                  allowDecimals={false}
                  domain={[0, "auto"]}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend verticalAlign="top" height={36} />
                <ReferenceLine
                  y={averageCitations}
                  label={{
                    value: `Avg: ${averageCitations}`,
                    position: "insideTopRight",
                    fill: "#9333ea",
                    fontSize: 12,
                  }}
                  stroke="#9333ea"
                  strokeDasharray="3 3"
                />
                <Bar
                  name="Citations"
                  dataKey="citations"
                  fill="url(#colorGradient)"
                  radius={[4, 4, 0, 0]}
                  animationDuration={1500}
                  animationEasing="ease-out"
                />
                <defs>
                  <linearGradient
                    id="colorGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.9} />
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0.3} />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </>
        )}
      </div>
    </div>
  );
};

export default CitationsChart;
