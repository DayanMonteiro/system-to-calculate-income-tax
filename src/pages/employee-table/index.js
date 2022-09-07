import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Table from "../../components/Table";
import { getEmployee } from "../../redux/middleware/employees.middleware";

import * as S from "./styled";

const EmployeeTable = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmployee());
    console.log("getEmp");
  }, [dispatch]);

  return (
    <S.Container>
      <Header />
      <S.ContainerTitle>
        <S.Title>Tabela de funcionários</S.Title>
      </S.ContainerTitle>
      <Table />
      <Footer />
    </S.Container>
  );
};

export default EmployeeTable;
