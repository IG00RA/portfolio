import { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../../styles";
import { navLinks } from "../../constants";
import { close, menu, logo, logotext } from "../../img";
import {
  IconWrap,
  NavLinks,
  NavLinksWrap,
  NavWrap,
  StyledContacts,
  StyledListItem,
  StyledNav,
  StyledSocial,
} from "./Navbar.styled";

const Navbar = ({ toggle, setToggle }) => {
  const [active, setActive] = useState("");

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-2 fixed 
      top-0 z-20 bg-flashWhite sm:opacity-[0.97] xxs:h-[12vh]`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-5"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logo"
            className="sm:w-[50px] sm:h-[50px] w-[45px] h-[45px] object-contain"
          />
          <img
            src={logotext}
            alt="logo"
            className="sm:w-[90px] sm:h-[90px] w-[85px] h-[85px] -ml-[0.6rem] object-contain"
          />
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-14 mt-2">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-french" : "text-eerieBlack"
              } hover:text-taupe text-[21px] font-medium font-mova 
                uppercase tracking-[3px] cursor-pointer nav-links`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* mobile */}
        <div className="sm:hidden flex flex-1 w-screen justify-end items-center">
          {toggle ? (
            <NavWrap
              className={`p-6 bg-flashWhite opacity-[0.98] absolute 
                top-0 left-0 w-screen h-[100vh] z-10 menu ${
                  toggle ? "menu-open" : "menu-close"
                }`}
            >
              <IconWrap>
                <img
                  src={close}
                  alt="close"
                  onClick={() => setToggle(!toggle)}
                />
              </IconWrap>
              <NavLinksWrap>
                <StyledNav>
                  {navLinks.map((nav) => (
                    <StyledListItem
                      id={nav.id}
                      key={nav.id}
                      active={active === nav.title}
                      onClick={() => {
                        setToggle(!toggle);
                        setActive(nav.title);
                      }}
                    >
                      <a href={`#${nav.id}`}>{nav.title}</a>
                    </StyledListItem>
                  ))}
                </StyledNav>
                <NavLinks>
                  <StyledContacts>
                    <li>
                      <a href="tel:+380934861193">+38 093 48 61 193</a>
                    </li>
                    <a href="mailto:gromadskiyigor@gmail.com">
                      gromadskiyigor@gmail.com
                    </a>
                  </StyledContacts>
                  <StyledSocial>
                    <li>
                      <a
                        href="https://t.me/igoora"
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                      >
                        Telegram
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/igoora/"
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                      >
                        LinkedIn
                      </a>
                    </li>
                  </StyledSocial>
                </NavLinks>
              </NavLinksWrap>
            </NavWrap>
          ) : (
            <img
              src={menu}
              alt="menu"
              className="w-[34px] h-[34px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
