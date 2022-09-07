import * as yup from "yup";

let schema = yup.object().shape({
  name: yup.string().required(),
  cpf: yup.string().required(),
  salary: yup.number().required(),
  dependents: yup.number().required(),
  //   salary: yup.string().required(),
  //   dependents: yup.string().required(),
});

export default schema;
