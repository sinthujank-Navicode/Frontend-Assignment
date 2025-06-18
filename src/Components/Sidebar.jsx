import { Home, ShoppingCart, Package, Users } from 'lucide-react';

const menuItems = [
  { icon: <Home />, label: 'Home' },
  { icon: <ShoppingCart />, label: 'Sales' },
  { icon: <Package />, label: 'Products' },
  { icon: <Users />, label: 'Customers' },
];

export default function Sidebar() {
  return (
    <div className="w-64 bg-white shadow-md p-4 hidden md:block">
      <h2 className="text-xl font-bold mb-6">POS UI</h2>
      <ul className="space-y-4">
        {menuItems.map((item, idx) => (
          <li key={idx} className="flex items-center space-x-2 hover:text-orange-600 cursor-pointer">
            {item.icon}
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
