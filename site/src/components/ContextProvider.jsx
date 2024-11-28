// ThemeContext.js
import {  useState } from "react";
import PropTypes from "prop-types";
import { myContext } from "./context";

export const ContextProvider = ({ children }) => {
  const [isLogined, setIsLogined] = useState(false);

  return (
    <myContext.Provider value={{ isLogined, setIsLogined }}>
      {children}
    </myContext.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.node,
};
