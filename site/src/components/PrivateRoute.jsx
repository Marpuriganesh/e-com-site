// PrivateRoute.js
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ element, isLogined }) => {
  return isLogined ? element : <Navigate to="/login" />;
};

PrivateRoute.propTypes = {
  element: PropTypes.element.isRequired,
  isLogined: PropTypes.bool.isRequired,
};

export default PrivateRoute;
