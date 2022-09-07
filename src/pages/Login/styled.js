import { styled } from "../../theme";
import Button from "../../components/Button";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: "100%",
  backgroundColor: "$white",
});

export const Content = styled("div", {
  height: "85%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  // backgroundColor: "blue",
});

export const Image = styled("img", {
  marginBottom: "10rem",
  width: "20rem",
});

export const Title = styled("h1", {
  color: "$primary10",
  fontSize: "$lg",
  marginBottom: "2rem",

  "@mobile": {
    fontSize: "$xl",
  },
});

export const FormLogin = styled("form", {
  padding: "2rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "$default",
});

export const ContainerButton = styled("div", {
  margin: "0 auto",
  paddingTop: "2rem",
});

export const ButtonSubmit = styled(Button, {});
