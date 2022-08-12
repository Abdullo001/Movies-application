import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useRef } from "react";
import { useAuth } from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const elEmail = useRef();
  const elPassword = useRef();
  const navigate = useNavigate();

  const {  setToken } = useAuth();

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    axios
      .post("https://reqres.in/api/login", {
        email: `${elEmail.current.value}`,
        password: `${elPassword.current.value}`,
      })
      .then(function (response) {
        if (response.data) {
          setToken(response.data);
          navigate("/");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="login-box d-flex justify-content-center flex-column align-items-center mt-5">
      <form
        onSubmit={handleFormSubmit}
        className="w-50 p-5 shadow bg-body rounded"
      >
        <h1 className="display-5 mb-4">Create your account</h1>
        <input
          ref={elEmail}
          className="form-control mb-3"
          type="text"
          placeholder="Your email..."
        />
        <input
          ref={elPassword}
          className="form-control mb-3"
          type={"password"}
          placeholder="Your password..."
        />
        <button type={"submit"} className="btn btn-primary mb-3">
          Log in
        </button>
      </form>
    </div>
  );
};
