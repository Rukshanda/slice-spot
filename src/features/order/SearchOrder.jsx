import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchOrder() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-56 rounded-full bg-yellow-100 px-6 py-3 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-cstdarkred focus:ring-opacity-50 sm:w-96 sm:focus:w-96"
      />
    </form>
  );
}

export default SearchOrder;
