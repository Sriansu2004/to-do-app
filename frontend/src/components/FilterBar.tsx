import { useTodoContext } from '../context/TodoContext';

const FilterBar = () => {
  const { state, setFilter } = useTodoContext();
  const current = state.filter;

  return (
    <div className="filter-bar">
      <button className={`filter-button ${current === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>
        All
      </button>
      <button className={`filter-button ${current === 'active' ? 'active' : ''}`} onClick={() => setFilter('active')}>
        Active
      </button>
      <button className={`filter-button ${current === 'completed' ? 'active' : ''}`} onClick={() => setFilter('completed')}>
        Completed
      </button>
    </div>
  );
};

export default FilterBar;