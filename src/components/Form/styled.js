import { styled } from "../../theme";
import Button from "../../components/Button";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "80rem",
});

export const Content = styled("div", {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

export const Title = styled("h1", {
  color: "$primary10",
  fontSize: "$xl",
});

export const BoxDetail = styled("div", {
  // backgroundColor: "red",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "2rem",
  // boxShadow: "0 0 10px rgba(0,0,0,0.6)",
  boxShadow: "$default",
});

export const FormEmployee = styled("form", {
  width: "60rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

export const ContainerButton = styled("div", {
  margin: "0 auto",
});

export const ButtonSubmit = styled(Button, {
  marginTop: "2rem",
});
