import styled from "styled-components";

export const MainDiv = styled.div`
  display: flex;
  background-color: #011726;
  height: 60px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const MyName = styled.p`
  display: flex;
  color: white;
  height: 25px;
  margin-left: 10px;
  font-family: montserrat;
  font-size: 21px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.28px;
`;

export const Menu = styled.nav`
  display: flex;
  ul {
    list-style: none;
  }

  li {
    display: inline;
    width: 64px;
    height: 19px;
    margin: 3px 33px 3px 32px;
    font-family: Montserrat;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.22px;
    text-align: center;
    color: #ffffff;

    &:hover {
      cursor: pointer;
      color: #f2b33e;
    }

    &:active {
      color: #ffffff;
    }
  }
`;
