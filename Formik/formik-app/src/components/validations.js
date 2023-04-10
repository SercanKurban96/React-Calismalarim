import * as yup from "yup";

const validations = yup.object().shape({
  email: yup
    .string()
    .email("Geçerli bir email girin.")
    .required("Bu alan zorunludur."),
  password: yup
    .string()
    .min(5, "Parolanız en az 5 karakter olmalıdır.")
    .required("Bu alan zorunludur."),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "Parolalar uyuşmuyor.")
    .required("Bu alan zorunludur."),
});

export default validations;
