import FilterBar from '../Components/FilterBar';
import ProductTable from '../Components/ProductTable';
import { useState } from 'react';
import mockData from '../assets/mockData';

export default function Dashboard() {
  const [data, setData] = useState(mockData);
  const [filters, setFilters] = useState({ search: '', category: '' });

  const handleFilter = () => {
    let filtered = mockData;
    if (filters.search)
      filtered = filtered.filter((item) => item.product.toLowerCase().includes(filters.search.toLowerCase()));
    if (filters.category)
      filtered = filtered.filter((item) => item.category === filters.category);
    setData(filtered);
  };

  const resetFilters = () => {
    setFilters({ search: '', category: '' });
    setData(mockData);
  };

  return (
    <div className="p-4">
      <FilterBar filters={filters} setFilters={setFilters} onFilter={handleFilter} onReset={resetFilters} />
      <ProductTable data={data} />
    </div>
  );
}
