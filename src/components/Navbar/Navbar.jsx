import { useState } from "react";
import { styles } from "../../styles";
import { navLinks } from "../../constants";
import { close, menu, logo, logotext } from "../../img";
import {
  IconWrap,
  NavLink,
  NavLinks,
  NavLinksWrap,
  NavWrap,
  NavWrapper,
  StyledContacts,
  StyledDesktopListItem,
  StyledDesktopNav,
  StyledLink,
  StyledListItem,
  StyledLogoText,
  StyledMenuImage,
  StyledMobileMenu,
  StyledNav,
  StyledSmallLogo,
  StyledSocial,
  StyledUl,
} from "./Navbar.styled";

const Navbar = ({ toggle, setToggle }) => {
  const [active, setActive] = useState("");

  return (
    <StyledDesktopNav className={`${styles.paddingX}`}>
      <NavWrapper>
        <StyledLink
          to="/"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <StyledSmallLogo src={logo} alt="logo" />
          <StyledLogoText src={logotext} alt="logo" />
        </StyledLink>
        <StyledUl>
          {navLinks.map((nav) => (
            <StyledDesktopListItem
              key={nav.id}
              onClick={() => setActive(nav.title)}
            >
              <NavLink
                className={active === nav.title ? "active" : ""}
                href={`#${nav.id}`}
              >
                {nav.title}
              </NavLink>
            </StyledDesktopListItem>
          ))}
        </StyledUl>

        {/* mobile */}
        <StyledMobileMenu>
          {toggle ? (
            <NavWrap
              isopen={toggle.toString()}
              className={`menu ${toggle ? "menu-open" : ""}`}
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
                      className={active === nav.title ? "active" : ""}
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
            <StyledMenuImage
              src={menu}
              alt="menu"
              onClick={() => setToggle(!toggle)}
            />
          )}
        </StyledMobileMenu>
      </NavWrapper>
    </StyledDesktopNav>
  );
};

export default Navbar;
