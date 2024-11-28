import { motion } from "motion/react";
import { useNavigate, useOutletContext } from "react-router-dom";
import "./css/Product.css";

function Product() {
  const navigate = useNavigate();
  const { selectedItem } = useOutletContext();

  return (
    <>
      <motion.div
        className="background"
        initial={{ opacity: 0, backdropFilter: "blur(0)" }}
        animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
        onClick={() => navigate("/")}
      >
        <motion.div
          className="product_container"
          layoutId={`product-${selectedItem.id}`}
          onClick={(e) => e.stopPropagation()}
        >
          <motion.div>
            <motion.div className="img_container" >
              <motion.img
                src={selectedItem.image}
                alt={selectedItem.title}
                id="img"
                layoutId={`img-${selectedItem.id}`}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Product;
