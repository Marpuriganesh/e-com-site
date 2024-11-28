import PropTypes from "prop-types";
import { motion } from "motion/react";
import "./css/ItemEdit.css";

const ItemEdit = ({
  itemContainerVarients,
  itemVarients,
  itemDetailsVarients,
  onClick,
  removeItem,
  children,
}) => {
  return (
    <>
      <motion.div
        className="item_container"
        variants={itemContainerVarients}
        onClick={onClick}
        layoutId={`product-${children.id}`}
        layout
      >
        <motion.div className="itemEdit" variants={itemVarients}>
          <motion.div className="img_container" variants={itemDetailsVarients}>
            <motion.img
              src={children.image}
              alt={children.title}
              variants={itemDetailsVarients}
              id="img"
              layoutId={`img-${children.id}`}
            />
            <motion.img
              id="delete-item"
              src={"https://www.svgrepo.com/show/502608/delete-2.svg"}
              alt="delete"
              onClick={() => {
                removeItem(children.id);
              }}
            />
          </motion.div>
          <motion.span
            className="category_container"
            variants={itemDetailsVarients}
          >
            <motion.span className="category">{children.category}</motion.span>
          </motion.span>
          <motion.span className="title" variants={itemDetailsVarients}>
            {children.title}
          </motion.span>

          <motion.span className="price" variants={itemDetailsVarients}>
            <motion.span variants={itemDetailsVarients}>
              <span id="dollar">$</span>
              {children.price}
            </motion.span>
            <motion.button
              variants={itemDetailsVarients}
              whileHover={{ scale: 1.05 }}
            >
              Edit
            </motion.button>
          </motion.span>
        </motion.div>
      </motion.div>
    </>
  );
};

ItemEdit.propTypes = {
  itemContainerVarients: PropTypes.any,
  itemVarients: PropTypes.any,
  itemDetailsVarients: PropTypes.any,
  onClick: PropTypes.func,
  removeItem: PropTypes.func,
  children: PropTypes.any,
};

export default ItemEdit;
