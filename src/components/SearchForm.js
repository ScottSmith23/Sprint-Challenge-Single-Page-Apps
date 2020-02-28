import React, { useState } from "react";

export default function SearchForm(props) {
  const [query, setQuery] = useState("");
  const handleChanges = e => {
    setQuery(e.target.value);
  };
  const sendQuery = event => {
   event.preventDefault();
   props.grabQueryToSearch(query);
  }
  return (
    <section className="search-form">
     <form className="search"  onSubmit={(event)=>{sendQuery(event)}}>
        <input
          type="text"
          name="name"
          onChange={handleChanges}
          tabIndex="0"
          className="search-name"
          placeholder="Search"
          autoComplete="off"
        />
       <button > Search! </button>
      </form>
    </section>
  );
}
