import clsx from "clsx";
import { motion } from "framer-motion";

export const Card = ({ title, description, style, className }) => {
  return (
    <motion.div
      className={clsx("sticky rounded-2xl p-6 top-20", className)}
      style={style}
    >
      <div className="w-full rounded-3xl border-2 border-purple-700 bg-purple-800 p-16 text-white shadow-md">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p>{description}</p>
      </div>
    </motion.div>
  );
};
