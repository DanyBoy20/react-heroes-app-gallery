/* import PropTypes from 'prop-types'; */
import { Navigate, useLocation } from 'react-router-dom'
import { useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';


export const PrivateRoute = ({ children }) => {

  const location = useLocation();

  const { user } = useContext(AuthContext);
  
  // para recordar cual fue el ultimo path visitado, y regresar a el despues de loguearse
  localStorage.setItem('lastPath', location.pathname);

  return user.logged ? children : <Navigate to="/login" />

}

/* PrivateRoute.propTypes = {
   isAuthenticated : PropTypes.bool.isRequired
 } */