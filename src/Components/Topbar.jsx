import { Bell, UserCircle } from 'lucide-react';

export default function Topbar() {
  return (
    <div className="bg-white shadow px-4 py-3 flex items-center justify-between">
      <h1 className="text-lg font-bold">Bill</h1>
      <div className="flex items-center space-x-4">
        <Bell className="w-5 h-5 text-gray-600" />
        <UserCircle className="w-6 h-6 text-gray-600" />
      </div>
    </div>
  );
}
