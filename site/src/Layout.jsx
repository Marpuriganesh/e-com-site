import { useNavigate, Outlet } from "react-router-dom";
import { motion } from "motion/react";

function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <>
      <motion.div
        className="nav"
        initial={{ height: 0 }}
        animate={{
          height: "3.5em",
        }}
      >
        <span>
          <img
            src={"https://www.svgrepo.com/show/311482/wrench.svg"}
            alt="gear"
            id="gear"
            onClick={() => navigate("/login")}
          />
        </span>
        <span id="logo">ECOM</span>
        <span id="user_icons">
          <img
            src={"https://www.svgrepo.com/show/529450/cart-large-2.svg"}
            alt="cart"
            id="cart"
          />
          <img
            src={"https://www.svgrepo.com/show/527946/user-circle.svg"}
            alt="user"
            id="user"
          />
        </span>
      </motion.div>
    </>
  );
};

export default Layout;
