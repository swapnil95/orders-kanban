import { useKanbanStore } from '../store';

export const Filters = () => {
  const filters = useKanbanStore((state) => state.filters);
  const setFilter = useKanbanStore((state) => state.setFilter);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter('search', event.target.value);
  };

  return (
    <div className="pb-4">
      <input
        type="text"
        value={filters.search}
        className="w-70 rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:outline-none"
        onChange={handleSearchChange}
        placeholder="Search by order id or description"
      />
    </div>
  );
};
