import React from "react";
import { IcBag, IcBell, IcHeart, LogoMusinsa } from "../../icons";

const Header = () => {
  return (
    <header>
      <h1>
        <a href="/">
          <LogoMusinsa />
        </a>
      </h1>

      <div>
        <a href="anchor">
          <IcBell />
        </a>
      </div>

      <div>
        <a href="anchor">
          <IcHeart />
        </a>
        <a href="anchor">
          <IcBag />
        </a>
      </div>
    </header>
  );
};

export default Header;
