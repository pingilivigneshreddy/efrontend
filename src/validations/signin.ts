import { object, string } from "yup";

let SigninDefaultValues = {
  username: "",
  password: "",
};

let SigninSchema = object().shape({
  username: string().required(),
  password: string().required(),
});

export { SigninDefaultValues, SigninSchema };
