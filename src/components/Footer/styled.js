import { styled } from "../../theme";

export const Container = styled("div", {});

export const ContainerFooter = styled("div", {
  backgroundColor: "$white",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  height: "8vh",
  position: "fixed",

  "@mobile": {
    backgroundColor: "$primary10",
  },
});

export const Image = styled("img", {
  width: "16rem",
});
