import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";

export const LoginScreen = () => {

  const { dispatch } = useContext(AuthContext);

  
  const navigate = useNavigate();

  const handleLogin = () => {
    /* navigate("/", { replace: true }); */
    // asigna el ultimo path visitado guardado en localstorage, si no existe, regresa "/"
    const lastPath = localStorage.getItem('lastPath') || '/';
    dispatch({
      type: types.login,
      payload: {
        name: 'Daniel'
      }
    });
    navigate(lastPath, { replace: true });
    //navigate("/", { replace: true });

  }

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />
      <button
        className="btn btn-primary"
        onClick={handleLogin}
      >
          Login
      </button>
    </div>
  );
};
