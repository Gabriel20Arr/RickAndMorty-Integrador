import React from "react";
import SeacherBar from "../search/SearchBar";
import styled from "../nav/nav.module.css";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <div className={styled.nav}>
        <SeacherBar onSearch={this.props.onSearch} />

        <Link to="/about">
          <span className={styled.navB}>About</span>
        </Link>

        <Link to="/favorite">
          <span className={styled.navB}>Favorite</span>
        </Link>

        <Link to="/home">
          <span className={styled.navB}>Home</span>
        </Link>

        <span className={styled.logo}>Rick and Morty</span>
      </div>
    );
  }
}

export default Nav;
