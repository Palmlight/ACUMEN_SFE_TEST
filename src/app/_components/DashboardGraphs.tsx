"use client";

import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

const DashboardGraphs = () => {
  const data = [
    { name: "Mon", value: 100 },
    { name: "Tues", value: 90 },
    { name: "Wed", value: 80 },
    { name: "Thurs", value: 70 },
    { name: "Fri", value: 60 },
    { name: "Sat", value: 40 }
  ];
  return (
    <div className="grid grid-cols-2 gap-6 pb-20">
      <div className="bg-white rounded pb-4 pt-2.5 px-6 ">
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-xs text-[#566BA0] uppercase">
            Daily Active Users
          </h1>

          <div className="flex items-center gap-2.5 ">
            <select className="py-2.5 px-4 bg-[#EDEDED40] rounded text-sm text-[#021C3E]">
              {["30 days", "60 days", "100 days"]?.map(opt => (
                <option value={opt} key={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <select className="py-2.5 px-4 bg-[#EDEDED40] rounded text-sm text-[#021C3E]">
              {["All Activities", "Some Activities", "other Activities"]?.map(
                opt => (
                  <option value={opt} key={opt}>
                    {opt}
                  </option>
                )
              )}
            </select>
          </div>
        </div>
        <div className="w-full h-[270px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart width={500} height={400} data={data}>
              <XAxis dataKey="name" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#EA8D51"
                strokeWidth={2}
                fill="#EA8D5150"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white rounded pb-4 pt-2.5 px-6 ">
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-xs text-[#566BA0] uppercase">
            Monthly Active Users
          </h1>

          <div className="flex items-center gap-2.5 ">
            <select className="py-2.5 px-4 bg-[#EDEDED40] rounded text-sm text-[#021C3E]">
              {["30 days", "60 days", "100 days"]?.map(opt => (
                <option value={opt} key={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="w-full h-[270px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart width={500} height={400} data={data}>
              <XAxis dataKey="name" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#15AE73"
                strokeWidth={2}
                fill="#15AE7315"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default DashboardGraphs;
