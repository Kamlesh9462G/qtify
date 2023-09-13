import React from "react";
import styles from "./NavBar.module.css"
import Button from "../Button/Button";
import Logo from "../Logo/Logo"
import Search from "../Search/Search"
const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <Search/>
      <Button children="Give Feedback"/>
    </nav>
  );
};

export default NavBar;
