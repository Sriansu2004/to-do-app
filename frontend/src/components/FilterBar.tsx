import React from 'react';

const FilterBar: React.FC<{ filter: string; setFilter: (filter: string) => void }> = ({ filter, setFilter }) => {
    return (
        <div className="filter-bar">
            <button onClick={() => setFilter('all')} className={filter === 'all' ? 'active' : ''}>
                All
            </button>
            <button onClick={() => setFilter('completed')} className={filter === 'completed' ? 'active' : ''}>
                Completed
            </button>
            <button onClick={() => setFilter('active')} className={filter === 'active' ? 'active' : ''}>
                Active
            </button>
        </div>
    );
};

export default FilterBar;