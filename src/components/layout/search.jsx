import React from "react";

function Search({ handleSearchSubmit, searchQuery, setSearchQuery }) {
  return (
    <div>
      <form onSubmit={handleSearchSubmit}>
        <div className="w-9/10 mx-2 h-12 flex items-center justify-end pl-5 font-['Agbalumo'] text-xl dark:text-black m-4">
          <input
            className="border-[1px] rounded border-[#00ccff] pl-5 pr-5 "
            name="search-query"
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
}

export default Search;
