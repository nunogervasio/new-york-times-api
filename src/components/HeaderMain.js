import React from "react";
import { Link } from "react-router-dom";

const HeaderMain = ({ title }) => {
  return (
    <header className="header">
      <Link to="/">
        <h1 className="name">{title}</h1>
      </Link>
    </header>
  );
};

export default HeaderMain;
