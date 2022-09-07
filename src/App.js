// import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { globalCss } from "@stitches/react";
// import { Provider as ReduxProvider } from "react-redux";
// import { store } from "./config/store";
import { Provider } from "react-redux";
import reducers from "./redux/slices";
import thunk from "redux-thunk";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import Login from "./pages/Login";
import EmployeeRegistration from "./pages/employee-registration";
import EmployeeTable from "./pages/employee-table";

// const Login = lazy(() => import("./pages/Login"));
// const EmployeeTable = lazy(() => import("./pages/employee-table"));
// const EmployeeRegistration = lazy(() =>
//   import("./pages/employee-registration")
// );

const globalStyles = globalCss({
  "*": { margin: 0, padding: 0, boxSizing: "border-box" },
  html: {
    fontSize: "62.5%",
  },
  "html, body, #root": {
    width: "100%",
    height: "100%",
    backgroundColor: "#FAFAFA",
  },
});

const store = configureStore({
  reducer: reducers,
  devTools: true,
  middleware: [...getDefaultMiddleware(), thunk],
});

function App() {
  globalStyles();
  return (
    // <ReduxProvider store={store}>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="employee-registration"
          element={<EmployeeRegistration />}
        />
        <Route path="employee-table" element={<EmployeeTable />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Provider>
    // </ReduxProvider>
  );
}

export default App;
