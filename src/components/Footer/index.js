import * as S from "./styled";
import Seidor from "../../assets/Img/seidor.png";
import FourTax from "../../assets/Img/four-tax.png";

const Footer = () => {
  return (
    <S.Container>
      <S.ContainerFooter>
        <S.Image src={Seidor} />
        <S.Image src={FourTax} />
      </S.ContainerFooter>
    </S.Container>
  );
};

export default Footer;
