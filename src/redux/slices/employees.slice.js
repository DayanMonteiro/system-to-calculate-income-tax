import { createSlice } from "@reduxjs/toolkit";

const employeeSlice = createSlice({
  name: "employee",
  initialState: { listEmployee: [] },
  reducers: {
    setEmployee: (state, action) => {
      state.listEmployee = action.payload.employees;
    },

    addEmployee: (state, action) => {
      state.listEmployee.push(action.payload.employee);
    },
    deleteEmployee: (state, action) => {
      state.listEmployee = state.listEmployee.filter(
        (item) => item.id !== action.payload.id
      );
    },
    updateEmployee: (state, action) => {
      state.listEmployee = state.listEmployee.filter(
        (item) => item.id !== action.payload.employee.id
      );
      state.listEmployee.push(action.payload.employee);
    },
  },
});

export const { setEmployee, addEmployee, deleteEmployee, updateEmployee } =
  employeeSlice.actions;

export default employeeSlice.reducer;
