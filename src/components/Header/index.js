import React from "react";
import { Link } from "gatsby";
import * as S from "./style";

export function Header() {
  return (
    <S.Container>
      <S.List>
        <Link to="/">
          <S.Inicio>Inicio</S.Inicio>
        </Link>
        <S.Sobre>Sobre</S.Sobre>
        <S.Contatos>Contatos</S.Contatos>
      </S.List>
    </S.Container>
  );
}