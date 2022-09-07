import Input from "../InputText";

import { useState } from "react";
// import { useSnackbar } from "notistack";

import * as S from "./styled";
import cpfMask from "../../utils/mask/cpfMask";
import financialMask from "../../utils/mask/financialMask";
// import schema from "./validations";

const Form = ({ employee, setEmployee, saveEmployee }) => {
  return (
    <S.Container>
      <S.Content>
        <S.BoxDetail>
          <S.Title>Dados Pessoais</S.Title>
          <S.FormEmployee>
            <Input
              placeholder={"Nome"}
              name="name"
              value={employee.name}
              onChange={(e) =>
                setEmployee({ ...employee, name: e.target.value })
              }
            />
            <Input
              placeholder={"CPF"}
              name="cpf"
              maxlength={14}
              value={employee.cpf}
              onChange={(e) =>
                setEmployee({ ...employee, cpf: cpfMask(e.target.value) })
              }
            />
            <Input
              placeholder={"Salário"}
              name="salary"
              value={employee.salary}
              onChange={(e) =>
                setEmployee({
                  ...employee,
                  salary: financialMask(e.target.value),
                })
              }
            />
            <Input
              placeholder={"Dependentes"}
              name="dependents"
              value={employee.dependents}
              onChange={(e) =>
                setEmployee({ ...employee, dependents: e.target.value })
              }
            />
            <S.ButtonSubmit
              type="button"
              variant="text"
              onClick={() => saveEmployee()}
            >
              Salvar
            </S.ButtonSubmit>
          </S.FormEmployee>
        </S.BoxDetail>
      </S.Content>
    </S.Container>
  );
};

export default Form;
