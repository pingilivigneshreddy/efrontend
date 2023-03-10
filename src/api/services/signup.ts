import { http } from "api/http";

const signup = (data: any) => {
  return http.post("/auth/sign-up", data);
};

const signin = (data: any) => {
  return http.post("/auth/login", data);
};

const getusers = () => {
  return http.get("/users");
};

export { signup, signin, getusers };
