import { useState } from 'react';
import search from '../../assets/search.svg';

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value); 
  };

  return (
    <div className="app-container">
      <div className="w-[344px] h-[64px] p-3 gap-4 rounded-xl border border-[#323B54] flex items-center mt-8">
        <img width={24} height={24} src={search} alt="" className="ml-[10px]" />
        <input
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '18px',
            fontWeight: '400',
            color: '#475069',
          }}
          className="w-full h-full border-none outline-none  bg-transparent ml-[10px] placeholder-[#475069]"
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search Movies or TV Shows"
        />
      </div>
    </div>
  );
};

export default Search;