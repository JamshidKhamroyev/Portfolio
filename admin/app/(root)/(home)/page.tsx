"use client";

import {
  BarChart2,
  Users,
  FileText,
  Settings,
  Smile,
  Activity,
} from "lucide-react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Dush", visits: 400 },
  { name: "Sesh", visits: 300 },
  { name: "Chor", visits: 200 },
  { name: "Pay", visits: 278 },
  { name: "Jum", visits: 189 },
  { name: "Shan", visits: 239 },
  { name: "Yak", visits: 349 },
]

const HomePage = () => {
  return (
    <div className="p-6 space-y-6 bg-slate-50 min-h-screen dark:bg-slate-900 text-slate-900 dark:text-white">
      <h1 className="text-3xl font-bold flex items-center gap-2">
        <Smile /> Xush kelibsiz, Admin!
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card icon={<Users />} title="Foydalanuvchilar" value="1,245" />
        <Card icon={<FileText />} title="Postlar" value="320" />
        <Card icon={<BarChart2 />} title="Ko‘rishlar" value="28K" />
        <Card icon={<Settings />} title="Sozlamalar" value="OK" />
      </div>

      <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-xl">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Activity /> Haftalik tashriflar statistikasi
        </h2>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <Line type="monotone" dataKey="visits" stroke="#3b82f6" strokeWidth={3} />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default HomePage;

const Card = ({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow hover:shadow-lg transition">
      <div className="flex items-center gap-4">
        <div className="text-blue-600 dark:text-blue-400">{icon}</div>
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-xl font-bold">{value}</p>
        </div>
      </div>
    </div>
  );
};
