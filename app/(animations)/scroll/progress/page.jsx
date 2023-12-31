"use client";
import { motion, useScroll } from "framer-motion";
import LoremIpsum from "@/app/components/LoremIpsum";

export default function Home() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-3 bg-purple-300 origin-[0%]"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="max-w-md mx-auto py-10">
        <h1 className="text-purple-700 font-semibold text-4xl mb-3">
          <code>useScroll</code> demo
        </h1>
        <LoremIpsum length={5} />
      </div>
    </>
  );
}
