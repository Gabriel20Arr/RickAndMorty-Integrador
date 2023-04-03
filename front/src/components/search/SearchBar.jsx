import { useState } from "react";
import styled from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  return (
    <div className={styled.divnav}>
      <input
        placeholder="Enter Id"
        className={styled.Boton2}
        type="search"
        // className={style.searchInput}
        onChange={handleChange} //investigar mas
      />

      <button
        className={styled.Boton}
        onClick={() => {
          onSearch(id);
        }}
      >
        Search
      </button>
      {/* <span className={styled.navHome}>Home</span>
      <span className={styled.navDetail}>Detail</span>
      <span className={styled.navAbout}> About</span> */}
    </div>
  );
}
