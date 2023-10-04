"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ImageGrid({ animationStyle = "x" }) {
  const targetRef = useRef();

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const animationStyles = {
    opacity: { opacity: useTransform(scrollYProgress, [0, 0.5], [1, 0]) },
    scale: { scale: useTransform(scrollYProgress, [0, 0.5], [1, 0.8]) },
    x: { x: useTransform(scrollYProgress, [0, 1], [0, -200]) },
  };

  const style = animationStyles[animationStyle] || {};

  return (
    <motion.div ref={targetRef} className="flex gap-5" style={style}>
      <Image
        src="https://picsum.photos/300/300"
        alt="Image 1"
        height={300}
        width={300}
      />
      <Image
        src="https://picsum.photos/300/300"
        alt="Image 2"
        height={300}
        width={300}
      />
      <Image
        src="https://picsum.photos/300/300"
        alt="Image 3"
        height={300}
        width={300}
      />
      <Image
        src="https://picsum.photos/300/300"
        alt="Image 4"
        height={300}
        width={300}
      />
      <Image
        src="https://picsum.photos/300/300"
        alt="Image 5"
        height={300}
        width={300}
      />
    </motion.div>
  );
}
