'use client';

import { useState } from 'react';
import { User, Mail, Phone, MapPin, Camera, CheckCircle } from 'lucide-react';

export default function ProfilePage() {
  const [showAlert, setShowAlert] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Custom Alert */}
      {showAlert && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center space-x-2">
          <CheckCircle className="w-5 h-5 text-green-500" />
          <p className="text-green-800">Profile changes saved successfully!</p>
        </div>
      )}

      {/* Profile Header */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="flex items-center space-x-6">
          <div className="relative">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
              <User className="w-12 h-12 text-gray-400" />
            </div>
            <button className="absolute bottom-0 right-0 bg-blue-500 p-2 rounded-full text-white hover:bg-blue-600">
              <Camera className="w-4 h-4" />
            </button>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">John Doe</h1>
            <p className="text-gray-500">Software Developer</p>
          </div>
        </div>
      </div>

      {/* Profile Information Form */}
      <form onSubmit={handleSave} className="bg-white rounded-lg p-6 shadow-sm space-y-6">
        <h2 className="text-xl font-semibold text-gray-900">Personal Information</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Full Name</label>
            <div className="flex">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                <User className="w-4 h-4" />
              </span>
              <input
                type="text"
                defaultValue="John Doe"
                className="flex-1 block w-full rounded-none rounded-r-md border-gray-300 border p-2 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Email</label>
            <div className="flex">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                <Mail className="w-4 h-4" />
              </span>
              <input
                type="email"
                defaultValue="john.doe@example.com"
                className="flex-1 block w-full rounded-none rounded-r-md border-gray-300 border p-2 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Phone Number</label>
            <div className="flex">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                <Phone className="w-4 h-4" />
              </span>
              <input
                type="tel"
                defaultValue="+1 (555) 123-4567"
                className="flex-1 block w-full rounded-none rounded-r-md border-gray-300 border p-2 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Location</label>
            <div className="flex">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                <MapPin className="w-4 h-4" />
              </span>
              <input
                type="text"
                defaultValue="San Francisco, CA"
                className="flex-1 block w-full rounded-none rounded-r-md border-gray-300 border p-2 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Bio</label>
          <textarea
            rows={4}
            defaultValue="Passionate software developer with experience in web development and cloud technologies."
            className="block w-full rounded-md border-gray-300 border p-2 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}