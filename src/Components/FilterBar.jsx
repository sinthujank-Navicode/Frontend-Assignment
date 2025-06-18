export default function FilterBar({ filters, setFilters, onFilter, onReset }) {
  return (
    <div className="flex flex-wrap gap-4 mb-4">
      <input
        type="text"
        placeholder="Search Products"
        value={filters.search}
        onChange={(e) => setFilters((f) => ({ ...f, search: e.target.value }))}
        className="p-2 border rounded"
      />
      <select
        value={filters.category}
        onChange={(e) => setFilters((f) => ({ ...f, category: e.target.value }))}
        className="p-2 border rounded"
      >
        <option value="">All Categories</option>
        <option value="Furniture">Furniture</option>
        <option value="Electronics">Electronics</option>
      </select>
      <button onClick={onFilter} className="px-3 py-2 bg-orange-500 text-white rounded">Filter</button>
      <button onClick={onReset} className="px-3 py-2 bg-gray-300 rounded">Refresh</button>
    </div>
  );
}
