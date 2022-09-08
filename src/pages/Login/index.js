import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import Input from "../../components/InputText";
import SediorLogo from "../../assets/Img/seidor-logo.png";
import * as S from "./styled";

const Login = () => {
  const navigate = useNavigate();
  return (
    <S.Container>
      <S.Content>
        <S.Image src={SediorLogo} />
        <S.FormLogin>
          <S.Title>Olá! Digite o seu usuário e senha</S.Title>
          <Input nome="name" placeholder="Nome" />
          <Input nome="email" placeholder="E-mail" />
          <S.ButtonSubmit
            type="submit"
            variant="text"
            onClick={() => navigate("employee-table")}
          >
            Entrar
          </S.ButtonSubmit>
        </S.FormLogin>
      </S.Content>
      <Footer />
    </S.Container>
  );
};
export default Login;
