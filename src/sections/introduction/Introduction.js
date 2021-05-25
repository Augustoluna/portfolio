import React from "react";
import {
  MainDiv,
  IntroInfos,
  IAmAugusto,
  WebDev,
  IceBreaker,
  TalkAbout,
  Techs,
  CVButton,
} from "./Styled";

const Introduction = () => {
  return (
    <MainDiv>
      <IntroInfos>
        <IAmAugusto> Eu sou Augusto Luna </IAmAugusto>
        <WebDev> Desenvolvedor Web Full Stack </WebDev>
        <IceBreaker>Amante de tecnologia, games, música e esportes.</IceBreaker>
        <TalkAbout>
          Baterista, gamer, jogador de futebol americano, piloto de trem e
          desenvolvedor web. Em suma, aquilo que pode me desafiar geralmente me
          atrai. Me formei como desenvolvedor web full stack pela Labenu em
          abril de 2021. Profissionalmente sou comprometido e altamente engajado
          com as propostas dos projetos nos quais trabalho.
        </TalkAbout>
        <Techs>| HTML | CSS | JavaScript | React.js | Git |</Techs>
        <CVButton>
          <a
            href="../../../public/europass_augustoLunaDevAtualizado.pdf"
            download="europass_augustoLunaDevAtualizado"
          >
            CV em PDF
          </a>
        </CVButton>
      </IntroInfos>
    </MainDiv>
  );
};

export default Introduction;
