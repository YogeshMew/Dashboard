// MetricCard.tsx
'use client';

interface MetricCardProps {
  title: string;
  value: string | number;
}

export default function MetricCard({ title, value }: MetricCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-sm font-medium text-gray-900 mb-2">{title}</h3>
      <p className="text-2xl font-semibold text-gray-900">{value}</p>
    </div>
  );
}