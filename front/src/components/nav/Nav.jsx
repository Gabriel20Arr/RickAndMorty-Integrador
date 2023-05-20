import React, { useState } from "react";
import SeacherBar from "../search/SearchBar";
import styled from "../nav/nav.module.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";

const Nav = ({ onSearch }) => {
  const [dropdown, setDropdown] = useState(false);

  const openCloseDrop = () => {
    setDropdown(!dropdown);
  };

  return (
    <div className={styled.nav}>
      <span className={styled.logo}>Rick and Morty</span>

      <Link to="/home" style={{ textDecoration: "none" }}>
        <span className={styled.navB}>Home</span>
      </Link>

      <Link to="/favorite" style={{ textDecoration: "none" }}>
        <span className={styled.navB}>Favorite</span>
      </Link>

      <SeacherBar onSearch={onSearch} />

      <Dropdown isOpen={dropdown} toggle={openCloseDrop} size="sm">
        <DropdownToggle>
          <span className={styled.menuu}> | | | </span>
        </DropdownToggle>

        <DropdownMenu>
          <DropdownItem header>| Menu </DropdownItem>
          <DropdownItem>
            <Link to="/about" style={{ textDecoration: "none" }}>
              <span className={styled.navB}>About</span>
            </Link>
          </DropdownItem>
          <DropdownItem>
            <Link to="/">
              <span className={styled.Sing_out}>Sing out</span>
            </Link>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>

      {/* <img className={styled.img} src="./utilsImg/logoo.png" alt="" /> */}
    </div>
  );
};

export default Nav;
