import React from "react";

function Search({ searchQuery, handleSearchSubmit, setSearchQuery }) {
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    handleSearchSubmit();
  };

  return (
    <form onSubmit={handleFormSubmit} className="my-4">
      <input
        type="text"
        placeholder="Search products"
        value={searchQuery}
        onChange={handleInputChange}
        className="border border-gray-300 px-4 py-2 rounded-md"
      />
    </form>
  );
}

export default Search;
