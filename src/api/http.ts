import axios from "axios";

export const http = axios.create({
  baseURL:
    process.env.NODE_ENV == "development"
      ? "http://localhost:9090"
      : "http://localhost:9090",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}` || "",
  },
});

// const baseUrl =
//   process.env.NODE_ENV === "production"
//     ? "https://api-registration.tsbocw.com"
//     : "https://api-registration.tsbocw.com";

// const token = localStorage.getItem("AUTH_TOKEN");

// const http = axios.create({
//   baseURL: baseUrl,
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "*/*",
//     Authorization: `Bearer ${token}`,
//   },
// });

// http.interceptors.response.use(
//   function (response) {
//     return response;
//   },
//   function (err) {
//     if (err.message === "Network Error") {
//       alert("Network Error");
//     }
//     if (
//       err.response.data.statusCode === 401 &&
//       err.response.config.method === "get"
//     ) {
//       localStorage.clear();
//       window.location.href = "/signin";
//     }
//     return Promise.reject(err);
//   }
// );
