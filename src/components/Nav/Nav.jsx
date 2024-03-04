import React from 'react';

const Nav = ({ searchCharacter, setSearch, search }) => {
  const handleInput = (event) => {
    setSearch(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    searchCharacter(search);
    setSearch('');
  };

  return (
    <nav>
      <form onSubmit={handleSearch}>
        <input onChange={handleInput} value={search} />
        <button type='submit'>Search</button>
      </form>
    </nav>
  );
};

export default Nav;
