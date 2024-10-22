// app/page.tsx
'use client';

import MetricCard from '@/components/MetricCard';
import ActivityItem from '@/components/ActivityItem';
import { CheckCircle, Info, AlertTriangle, AlertCircle } from 'lucide-react';


export default function HomePage() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <MetricCard title="User Activity" value="1,234" />
        <MetricCard title="Sales Figures" value="$56,789" />
        <MetricCard title="New Signups" value="345" />
        <MetricCard title="Support Tickets" value="89" />
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm">
      <h2 className="text-base font-medium text-gray-900 mb-4">Recent Activity</h2>
      <div className="divide-y divide-gray-100">
          <ActivityItem 
            icon={<div className="w-6 h-6 text-green-500"><CheckCircle className="w-full h-full" /></div>}
            message="User John Doe completed a purchase."
            timestamp="2 hours ago"
          />
          <ActivityItem 
            icon={<div className="w-6 h-6 text-blue-500"><Info className="w-full h-full" /></div>}
            message="New user registration: Jane Smith."
            timestamp="3 hours ago"
          />
          <ActivityItem 
            icon={<div className="w-6 h-6 text-yellow-500"><AlertTriangle className="w-full h-full" /></div>}
            message="System maintenance scheduled for midnight."
            timestamp="1 day ago"
          />
          <ActivityItem 
            icon={<div className="w-6 h-6 text-red-500"><AlertCircle className="w-full h-full" /></div>}
            message="Failed login attempt from IP: 192.168.1.1."
            timestamp="2 days ago"
          />
        </div>
      </div>
    </div>
  );
}