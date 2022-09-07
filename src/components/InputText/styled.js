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
  //"backgroundColor": "",
  // border: "none",
  width: "100%",
  color: "$primary500",
  // "fontSize": ,

  // &::"placeholder" {
  //   "color:" ${(props) => props.theme.colors.secondaryDarkPlus};
  //   "font-size:" ${(props) => props.theme.fontSizes.small};
  // }
});
