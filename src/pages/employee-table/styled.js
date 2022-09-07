import { styled } from "../../theme";

export const Container = styled("div", {});

export const ContainerTitle = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "$primary20",
  // width: "100%",
  height: "5rem",
});

export const Title = styled("h1", {
  color: "$white",
  fontSize: "$xl",
});
