import React, { useState } from "react";
import * as S from "./styled";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { Dialog, Pane } from "evergreen-ui";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  editEmployee,
  removeEmployee,
} from "../../redux/middleware/employees.middleware";
import financialMask from "../../utils/mask/financialMask";

const Table = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [deleteModal, setDeleteModal] = useState({
    id: "",
    state: false,
  });

  const [editModal, setEditModal] = React.useState({
    name: "",
    cpf: "",
    salary: "",
    dependents: "",
    state: false,
  });

  const { listEmployee } = useSelector((state) => state.employeeReducer);

  function removeMask(value) {
    let valueReplace = value.toString().replace(/(?!^-)[^0-9]/g, "");
    return parseInt(valueReplace);
  }

  function reduceInstallment(value) {
    const valueRemoveMask = removeMask(value);
    if (valueRemoveMask <= 190398) {
      return valueRemoveMask;
    }
    if (valueRemoveMask >= 190399 && valueRemoveMask <= 282665) {
      return valueRemoveMask * 0.075 + 14280;
    }
    if (valueRemoveMask >= 282666 && valueRemoveMask <= 375105) {
      return valueRemoveMask * 0.15 + 35408;
    }
    if (valueRemoveMask >= 375106 && valueRemoveMask <= 466468) {
      return valueRemoveMask * 0.225 + 63613;
    }
    if (valueRemoveMask > 466468) {
      return valueRemoveMask * 0.275 + 86936;
    }
    return valueRemoveMask;
  }

  function discount(value, numberDependents) {
    const valueRemoveMask = removeMask(value);
    if (valueRemoveMask <= 190398) {
      return (
        valueRemoveMask -
        valueRemoveMask * 0.075 -
        16456 * parseInt(numberDependents)
      );
    }
    if (valueRemoveMask >= 190399 && valueRemoveMask <= 282665) {
      return (
        valueRemoveMask -
        valueRemoveMask * 0.15 -
        16456 * parseInt(numberDependents)
      );
    }
    if (valueRemoveMask >= 282666 && valueRemoveMask <= 375105) {
      return (
        valueRemoveMask -
        valueRemoveMask * 0.225 -
        16456 * parseInt(numberDependents)
      );
    }
    if (valueRemoveMask > 466468) {
      return (
        valueRemoveMask -
        valueRemoveMask * 0.275 -
        16456 * parseInt(numberDependents)
      );
    }
    return valueRemoveMask;
  }

  return (
    <S.Container>
      <S.ContentHeader>
        <S.Title> Lista de Funcionários</S.Title>
        <S.ButtonNew
          type="submit"
          variant="brand"
          onClick={() => navigate("/employee-registration")}
        >
          Novo Cadastro
        </S.ButtonNew>
      </S.ContentHeader>

      <S.TableContainer>
        <S.Table>
          <S.TableHead>
            <S.TableRow>
              <S.ColumnTable>Nome</S.ColumnTable>
              <S.ColumnTable>CPF</S.ColumnTable>
              <S.ColumnTable>Salário</S.ColumnTable>
              <S.ColumnTable>Desconto</S.ColumnTable>
              <S.ColumnTable>Dependente</S.ColumnTable>
              <S.ColumnTable>Desconto IRPF</S.ColumnTable>
              <S.ColumnTable>Editar</S.ColumnTable>
              <S.ColumnTable>Deletar</S.ColumnTable>
            </S.TableRow>
          </S.TableHead>
          <S.TableBody>
            {listEmployee &&
              listEmployee.map((row) => (
                <S.TableRow key={row.id}>
                  <S.ColumnTable>{row.name}</S.ColumnTable>
                  <S.ColumnTable>{row.cpf}</S.ColumnTable>
                  <S.ColumnTable>{financialMask(row.salary)}</S.ColumnTable>
                  <S.ColumnTable>
                    {discount(row.salary, row.dependents)}
                  </S.ColumnTable>
                  <S.ColumnTable>{row.dependents}</S.ColumnTable>

                  <S.ColumnTable>{reduceInstallment(row.salary)}</S.ColumnTable>

                  <S.ColumnTableIcon>
                    <S.ButtonNew
                      type="button"
                      variant="counter"
                      onClick={() =>
                        setEditModal({
                          id: row.id,
                          name: row.name,
                          cpf: row.cpf,
                          salary: row.salary,
                          dependents: row.dependents,
                          state: true,
                        })
                      }
                    >
                      <FaRegEdit />
                    </S.ButtonNew>
                  </S.ColumnTableIcon>
                  <S.ColumnTableIcon>
                    <S.ButtonNew
                      type="button"
                      variant="counter"
                      onClick={() =>
                        setDeleteModal({ id: row.id, state: true })
                      }
                    >
                      <FaRegTrashAlt />
                    </S.ButtonNew>
                  </S.ColumnTableIcon>
                </S.TableRow>
              ))}
          </S.TableBody>
        </S.Table>
      </S.TableContainer>

      <Pane>
        <Dialog
          isShown={deleteModal.state}
          title="Excluir"
          intent="danger"
          onCloseComplete={() => setDeleteModal({ id: "", state: false })}
          confirmLabel="Delete"
          onConfirm={() => {
            dispatch(removeEmployee(deleteModal.id));
            setDeleteModal({ id: "", state: false });
          }}
        >
          Deseja deletar usuário?
        </Dialog>
      </Pane>

      <Pane>
        <Dialog
          isShown={editModal.state}
          title="Editar dados do funcionário"
          onCloseComplete={() =>
            setEditModal({
              id: "",
              name: "",
              cpf: "",
              salary: "",
              dependents: "",
              state: false,
            })
          }
          preventBodyScrolling
          confirmLabel="Salvar"
          cancelLabel="Fechar"
          onConfirm={() => {
            dispatch(editEmployee(editModal));
            setEditModal({
              id: "",
              name: "",
              cpf: "",
              salary: "",
              dependents: "",
              state: false,
            });
          }}
        >
          <S.FormEdit>
            <S.InputEdit
              nome="name"
              placeholder="Nome"
              value={editModal.name}
              onChange={(e) =>
                setEditModal({ ...editModal, name: e.target.value })
              }
            />
            <S.InputEdit
              nome="cpf"
              placeholder="CPF"
              value={editModal.cpf}
              onChange={(e) =>
                setEditModal({ ...editModal, cpf: e.target.value })
              }
            />
            <S.InputEdit
              nome="salary"
              placeholder="Salário"
              value={editModal.salary}
              onChange={(e) =>
                setEditModal({ ...editModal, salary: e.target.value })
              }
            />
            <S.InputEdit
              nome="dependents"
              placeholder="Dependentes"
              value={editModal.dependents}
              onChange={(e) =>
                setEditModal({ ...editModal, dependents: e.target.value })
              }
            />
          </S.FormEdit>
        </Dialog>
      </Pane>
    </S.Container>
  );
};

export default Table;
