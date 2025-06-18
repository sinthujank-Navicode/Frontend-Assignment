import { Pencil } from 'lucide-react';

export default function ProductTable({ data }) {
  return (
    <table className="w-full bg-white shadow rounded">
      <thead>
        <tr className="bg-gray-100 text-left">
          {['Product', 'Code', 'Barcode', 'Category', 'Tax', 'Price', 'Store', 'Warehouse', 'Status', 'Action'].map((th) => (
            <th key={th} className="p-3">{th}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, i) => (
          <tr key={i} className="border-t">
            <td className="p-3">{item.product}</td>
            <td className="p-3">{item.code}</td>
            <td className="p-3">{item.barcode}</td>
            <td className="p-3">{item.category}</td>
            <td className="p-3">{item.tax}%</td>
            <td className="p-3">${item.price}</td>
            <td className="p-3">{item.store}</td>
            <td className="p-3">{item.warehouse}</td>
            <td className="p-3">
              <span className={`px-2 py-1 rounded text-white text-sm ${item.status === 'In Stock' ? 'bg-green-500' : 'bg-red-500'}`}>
                {item.status}
              </span>
            </td>
            <td className="p-3">
              <Pencil className="w-4 h-4 text-blue-500 cursor-pointer" onClick={() => alert(JSON.stringify(item, null, 2))} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
