import { styled } from "../../theme";
import Button from "../../components/Button";
import Input from "../InputText";

export const Container = styled("div", {
  height: "80rem",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const ContentHeader = styled("div", {
  marginTop: "3rem",
  width: "150rem",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
});

export const Title = styled("h1", {
  color: "$primary10",
  fontSize: "$xl",
});

export const ButtonNew = styled(Button, {});

export const TableContainer = styled("div", {});

export const Table = styled("table", {
  marginTop: "2rem",
  width: "150rem",
});

export const TableHead = styled("thead", {});

export const TableRow = styled("tr", {
  height: "4rem",
  border: "2px solid $primary20",
  fontSize: "$lg",
});

export const ColumnTable = styled("td", {
  border: "2px solid $primary20",
  paddingLeft: "0.5rem",
});

export const ColumnTableIcon = styled("td", {
  border: "2px solid $primary20",
  paddingLeft: "3rem",
});

export const TableBody = styled("tbody", {});

export const FormEdit = styled("form", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

export const InputEdit = styled(Input, {});
