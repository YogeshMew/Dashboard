// app/analytics/page.tsx
export default function AnalyticsPage() {
    return (
      <main className="p-4 md:p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Analytics</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-bold mb-4">User Growth</h2>
            {/* Add your analytics charts/components here */}
            <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
              Chart Placeholder
            </div>
          </div>
  
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-bold mb-4">Revenue Overview</h2>
            <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
              Chart Placeholder
            </div>
          </div>
        </div>
      </main>
    );
  }
  
  