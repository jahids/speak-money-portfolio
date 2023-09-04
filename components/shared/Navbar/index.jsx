import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import MegaMenu from "./MegaMenu";
import navList from "./Menu.json";
import SubMenu from "./SubMenu";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav id="topnav" className={`defaultscroll is-sticky ${isMenuOpen ? 'menu-active' : ''}`}>
      <div className="container">
        <div className="logo flex h-20 font-bold text-2xl items-center justify-center">
          <span className="text-bold-800">
            Sp<span className="text-indigo-600">eak</span>Money
          </span>
        </div>

        <div className={`menu-extras ${isMenuOpen ? 'active' : ''}`}>
          <div className="menu-item">
            <a className="navbar-toggle" onClick={toggleMenu}>
              <div className={`lines ${isMenuOpen ? 'open' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </a>
          </div>
        </div>

        <div id="navigation" className={isMenuOpen ? 'open' : ''}>
          <ul className="navigation-menu">
            {navList.map((item, index) => (
              <li
                key={`menu-item-index-${index}`}
                className={`${
                  item?.hasChild ? "has-submenu parent-parent-menu-item" : ""
                }`}
              >
                <Link href={item?.url}>{item?.title}</Link>
                {item?.hasChild && <span className="menu-arrow"></span>}
                {item?.hasChild && item?.megaMenu && <MegaMenu item={item} />}
                {item?.hasChild && item?.subMenu?.length > 0 && (
                  <SubMenu subMenu={item.subMenu} />
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
