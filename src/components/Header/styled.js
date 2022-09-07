import { styled } from "../../theme";

export const Container = styled("div", {
  marginTop: 0,
  width: "100vw",
  height: "8vh",
  color: "$white",
  backgroundColor: "$white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "1rem",
});

export const Image = styled("img", {
  width: "28vw",

  "@mobile": {
    width: "15vw",
  },

  "@tablet": {
    width: "13vw",
  },

  "@desktop": {
    width: "10vw",
  },
});
