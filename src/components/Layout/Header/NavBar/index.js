import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { NavBarWrapper, NavMain, NavItem, DropdownItemWrapper } from "./style";
import gepLogo from "../../../../images/GioEditPro3.png";

const NavBar = () => {
  const navBarResult = useStaticQuery(graphql`
    fragment navItemData on ContentfulNavItem {
      id
      label
      page {
        ... on ContentfulPage {
          slug
        }
        ... on ContentfulBlog {
          slug
        }
      }
    }
    query NavQuery {
      contentfulNavbar {
        navbarItems {
          ...navItemData
          dropdownItem {
            ...navItemData
          }
        }
      }
    }
  `);

  //console.log(navBarResult);

  return (
    <NavBarWrapper>
      <NavMain>
        <Link to="/">
          <img src={gepLogo} />
        </Link>
      </NavMain>
      {navBarResult.contentfulNavbar.navbarItems.map((navItem) => {
        return (
          <NavItem key={navItem.id}>
            {!navItem.dropdownItem ? (
              <Link to={`/${navItem.page.slug}`}>{navItem.label}</Link>
            ) : (
              <DropdownItemWrapper>
                <div>{navItem.label}</div>
                <div>
                  {navItem.dropdownItem.map((dropdownItem) => {
                    return (
                      <div key={dropdownItem.id}>
                        <Link to={`/${dropdownItem.page.slug}`}>
                          {dropdownItem.label}
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </DropdownItemWrapper>
            )}
          </NavItem>
        );
      })}
      <NavItem>
        <Link to="/contact">Contact Us</Link>
      </NavItem>
    </NavBarWrapper>
  );
};

export default NavBar;
