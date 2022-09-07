import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import Form from "../../components/Form";
import Header from "../../components/Header";
import { postEmployee } from "../../redux/middleware/employees.middleware";
import * as S from "./styled";

const EmployeeRegistration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    name: "",
    cpf: "",
    salary: "",
    dependents: "",
  });

  function saveEmployee() {
    dispatch(postEmployee(employee));
    navigate("/employee-table");
  }

  return (
    <S.Container>
      <Header />
      <S.ContainerTitle>
        <S.Title>Registrar Funcionário</S.Title>
      </S.ContainerTitle>
      <Form
        employee={employee}
        setEmployee={setEmployee}
        saveEmployee={saveEmployee}
      />
      <Footer />
    </S.Container>
  );
};

export default EmployeeRegistration;
