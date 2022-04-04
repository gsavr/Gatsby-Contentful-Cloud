import styled from "styled-components";

export const NavBarWrapper = styled.div`
  margin: auto 0 auto auto;
  display: flex;
`;

export const NavMain = styled.div`
  position: absolute;
  left: 5vw;
  margin: auto 0;
  padding: 0 16px;
  line-height: 60px;
  a {
    color: white;
    &:hover {
      color: #999;
    }
  }
  img {
    height: 55px;
  }
`;

export const NavItem = styled.div`
  margin: auto 0;
  padding: 0 16px;
  line-height: 60px;
  a {
    color: white;
    &:hover {
      color: #999;
    }
  }
`;

//>div targets child divs inside this div
export const DropdownItemWrapper = styled.div`
  position: relative;
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    >div: last-child {
      display: block;
    }
  }
  > div:last-child {
    display: none;
    position: absolute;
    z-index: 1;
    top: 50px;
    background: black;
    white-space: nowrap;
    box-shadow: 2px 2px 2px black;
    padding: 8px;
    border: px solid #999;
    > div {
      line-height: 1;
      padding: 8px 16px;
    }
  }
`;
