// app/settings/page.tsx
export default function SettingsPage() {
    return (
      <main className="p-4 md:p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Settings</h1>
        
        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <div className="max-w-2xl">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Profile Settings</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Name</label>
                      <input
                        type="text"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Email</label>
                      <input
                        type="email"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                </div>
  
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Notifications</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <label className="ml-2 text-sm text-gray-700">Email notifications</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <label className="ml-2 text-sm text-gray-700">Push notifications</label>
                    </div>
                  </div>
                </div>
  
                <div className="pt-4">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }