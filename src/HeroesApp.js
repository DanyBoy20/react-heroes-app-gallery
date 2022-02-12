import { useReducer, useEffect } from "react";
import { authReducer } from "./auth/authReducer";
import { AppRouter } from "./routers/AppRouter";
import { AuthContext } from "./auth/AuthContext";
// El contexto esta en elcomponente de nivel superior para que el estado de a autenticacion este
// disponible para todos los componentes hijos
const init = () => {
  // revisa el locastorage y ve si existe el usuario (guardado en useeffect)
  // si no existe, retorna logged en falso
  return JSON.parse(localStorage.getItem('user')) || {
    logged: false
  }
}

function HeroesApp() {  

  // Estado Inicial: se ejecuta el init, se lo pasa a initial state (que es un objeto vacio {})
  const [user, dispatch] = useReducer(authReducer, {}, init);

  // guardar el usuario en ellocalstorage al hacer login
  useEffect( () => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      <AppRouter />
    </AuthContext.Provider>
  );
}

export default HeroesApp;
