import { useState } from "react";
import { styles } from "../../styles";
import { close, menu, logo, logoText, email, phone } from "../../img";
import {
  ContactItem,
  IconWrap,
  NavLink,
  NavLinks,
  NavLinksWrap,
  NavWrap,
  NavWrapper,
  StyledContacts,
  StyledContactsLink,
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
  StyledSocialLink,
  StyledUl,
} from "./Navbar.styled";
import PropTypes from "prop-types";
import { LanguageToggler } from "../LanguageToggler/LanguageToggler";
import { useTranslation } from "react-i18next";

const Navbar = ({ toggle, setToggle }) => {
  const [active, setActive] = useState("");
  const { t } = useTranslation();
  const navLinks = [
    {
      id: "about",
      title: t("nav.about"),
    },
    {
      id: "projects",
      title: t("nav.projects"),
    },
    {
      id: "contact",
      title: t("nav.contact"),
    },
  ];
  return (
    <StyledDesktopNav className={`${styles.paddingX}`}>
      <NavWrapper>
        <LanguageToggler />
        <StyledLink
          to="/"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <StyledSmallLogo src={logo} alt="logo" />
          <StyledLogoText src={logoText} alt="logo" />
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
                    <ContactItem>
                      <img src={phone} alt="phone icon" />
                      <StyledContactsLink href="tel:+380934861193">
                        +38 093 48 61 193
                      </StyledContactsLink>
                    </ContactItem>
                    <ContactItem>
                      <img src={email} alt="email icon" />
                      <StyledContactsLink href="mailto:gromadskiyigor@gmail.com">
                        gromadskiyigor@gmail.com
                      </StyledContactsLink>
                    </ContactItem>
                  </StyledContacts>
                  <StyledSocial>
                    <li>
                      <StyledSocialLink
                        href="https://t.me/igoora"
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                      >
                        Telegram
                      </StyledSocialLink>
                    </li>
                    <li>
                      <StyledSocialLink
                        href="https://www.linkedin.com/in/igoora/"
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                      >
                        LinkedIn
                      </StyledSocialLink>
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

Navbar.propTypes = {
  toggle: PropTypes.bool.isRequired,
  setToggle: PropTypes.func.isRequired,
};

export default Navbar;
