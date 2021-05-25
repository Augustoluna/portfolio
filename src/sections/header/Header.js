import React from "react";
import { MainDiv, MyName, Menu } from "./Styled";

const Header = () => {
  return (
    <MainDiv>
      <MyName>Augusto Luna</MyName>
      <Menu>
        <ul>
          <li> Quem sou </li>
          <li> Projetos </li>
          <li> Contato </li>
        </ul>
      </Menu>
    </MainDiv>
  );
};

export default Header;
