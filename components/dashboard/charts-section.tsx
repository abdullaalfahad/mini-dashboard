"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card } from "@/components/common/card";
import { postStats, userGrowth } from "./data";

export default function ChartsSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card title="User Growth">
        <div className="h-64">
          <ResponsiveContainer height="100%" width="100%">
            <LineChart data={userGrowth}>
              <CartesianGrid
                className="stroke-gray-200"
                strokeDasharray="3 3"
              />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                activeDot={{ r: 6 }}
                dataKey="users"
                dot={{ r: 4 }}
                stroke="#3b82f6"
                strokeWidth={2}
                type="monotone"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <Card title="Posts by Category">
        <div className="h-64">
          <ResponsiveContainer height="100%" width="100%">
            <BarChart data={postStats}>
              <CartesianGrid
                className="stroke-gray-200"
                strokeDasharray="3 3"
              />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="posts" fill="lightblue" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
}
