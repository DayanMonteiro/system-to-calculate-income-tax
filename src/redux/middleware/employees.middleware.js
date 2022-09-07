import { employeeApi } from "../api/http";
import {
  addEmployee,
  deleteEmployee,
  setEmployee,
  updateEmployee,
} from "../slices/employees.slice";

export const getEmployee = () => {
  return async (dispatch) => {
    try {
      console.log("entrou aqui");
      let response = await employeeApi.get("/employee");
      if (response.status === 200 || response.status === 201) {
        dispatch(setEmployee({ employees: response.data }));
      } else {
        console.log("Erro");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const postEmployee = (employee) => {
  return async (dispatch) => {
    try {
      let response = await employeeApi.post("/employee", employee);
      if (response.status === 200 || response.status === 201) {
        dispatch(addEmployee({ employee: response.data }));
      } else {
        console.log("There is one or more errors.");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const removeEmployee = (id) => {
  return async (dispatch) => {
    try {
      let response = await employeeApi.delete(`/employee/${id}`);
      if (response.status === 200 || response.status === 201) {
        dispatch(deleteEmployee({ id }));
      } else {
        console.log("Erro");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const editEmployee = (employee) => {
  return async (dispatch) => {
    try {
      let response = await employeeApi.put(
        `/employee/${employee.id}`,
        employee
      );
      if (response.status === 200 || response.status === 201) {
        dispatch(updateEmployee({ employee }));
      } else {
        console.log("There is one or more errors.");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getByIdEmployee = (id) => {
  return async (dispatch) => {
    try {
      let response = await employeeApi.get(`/employee/${id}`);
      if (response.status === 200 || response.status === 201) {
        dispatch(setEmployee({ employees: response.data.data }));
      } else {
        console.log("There is one or more errors.");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
