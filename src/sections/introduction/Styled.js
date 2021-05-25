import styled from "styled-components";

export const MainDiv = styled.div`
  display: flex;
  border: 1px solid green;
  height: 700px;
`;

export const IntroInfos = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #011726;
  height: 100%;
  width: 48%;
  justify-content: center;
  align-items: center;
`;

export const IAmAugusto = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 364px;
  height: 122px;
  margin: 0 0px 6px 0;
  font-family: Montserrat;
  font-size: 60px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.29px;
  color: #ffffff;
`;

export const WebDev = styled.p`
  display: flex;
  width: 364px;
  height: 29px;
  margin: 6px 0px 12px 0;
  font-family: Montserrat;
  font-size: 30px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.32px;
  color: #ffffff;
`;

export const IceBreaker = styled.p`
  display: flex;
  width: 390px;
  height: 19px;
  margin: 12px 0px 52px 0px;
  font-family: Montserrat;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.22px;
  color: #ffffff;
`;

export const TalkAbout = styled.p`
  display: flex;
  width: 368px;
  height: 122px;
  margin: 52px 0 26px 1px;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.16px;
  color: #ffffff;
`;

export const Techs = styled.p`
  display: flex;
  width: 390px;
  height: 19px;
  margin: 12px 0px 52px 0px;
  font-family: Montserrat;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.22px;
  color: #ffffff;
`;

export const CVButton = styled.button`
  display: flex;
  width: 140px;
  height: 30px;
  margin: 32px 12px 0px 1px;
  padding: 5px 30px 7px 31px;
  border-radius: 8px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  background-color: #82d0d9;

  a {
    text-decoration: none;
    color: #011726;
  }

  &:hover {
    background-color: grey;
    cursor: pointer;

    a {
      color: white;
    }
  }

  &:active {
    background-color: #82d0d9;

    a {
      color: #011726;
    }
  }
`;
