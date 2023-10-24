import clsx from "clsx";
import { motion } from "framer-motion";

export const Card = ({ title, description, style, className }) => {
  return (
    <motion.div
      className={clsx(
        "sticky rounded-2xl p-10 top-10 border-2 border-purple-700 bg-purple-800 text-white shadow-md",
        className
      )}
      style={style}
    >
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
};
