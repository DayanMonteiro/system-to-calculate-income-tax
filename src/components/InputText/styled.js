import { styled } from "../../theme";

export const ContainerInput = styled("div", {
  padding: "1rem 0",
  width: "30rem",

  "@mobile": {
    width: "50rem",
  },
});

export const Input = styled("input", {
  padding: "1.6rem 1.4rem",
  width: "100%",
  color: "$primary500",
});
