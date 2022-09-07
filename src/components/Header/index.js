import React from "react";
import * as S from "./styled";
import Sedior from "../../assets/Img/seidor-logo.png";

const Header = () => {
  return (
    <S.Container>
      <S.Image src={Sedior} />
    </S.Container>
  );
};

export default Header;
