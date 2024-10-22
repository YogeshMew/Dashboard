// ActivityItem.tsx
'use client';

interface ActivityItemProps {
  icon: React.ReactNode;
  message: string;
  timestamp: string;
}

export default function ActivityItem({ icon, message, timestamp }: ActivityItemProps) {
  return (
    <div className="flex items-start space-x-3 py-3">
      <div className="flex-shrink-0 mt-1">
        {icon}
      </div>
      <div className="flex-1">
        <p className="text-sm font-bold text-gray-900">{message}</p>
        <p className="text-xs text-gray-500">{timestamp}</p>
      </div>
    </div>
  );
}