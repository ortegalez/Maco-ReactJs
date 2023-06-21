import React from "react";
import { GrClose } from "react-icons/gr";
import { BsSearch } from "react-icons/bs";

const SearchCointainer = ({ showSearchContainer, searchToggle }) => {
  return (
    <div className={`search__container ${searchToggle ? "active" : ""}`}>
      <button
        onClick={() => showSearchContainer(!searchToggle)}
        className="btn-close"
      >
        <GrClose />
      </button>
      <article>
        <input type="text" placeholder="Buscar..." />
        <button className="btn-search">
          <BsSearch />
        </button>
      </article>
    </div>
  );
};

export default SearchCointainer;
