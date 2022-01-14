import React, { useState } from "react";
import youtube from "../apis/youtube";

const SearchBar = (props) => {
  const [term, setTerm] = useState("");

  const onFormSubmit = async (event) => {
    event.preventDefault();

    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    props.onTermSubmit(response.data.items);
  };

  return (
    <div className="search-bar ui segmant">
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="field">
          <label>Videos Search</label>
          <input
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
