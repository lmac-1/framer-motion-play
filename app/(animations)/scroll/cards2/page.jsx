"use client";
import { Card } from "@/app/components/Card";
import LoremIpsum from "@/app/components/LoremIpsum";
import { range } from "@/utils/range";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const cards = range(5).map(() => ({
  title: "Lorem ipsum dolor sit amet",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
}));

export default function Page() {
  // title section
  const titleContainerRef = useRef(null);
  const { scrollYProgress: titleProgress } = useScroll({
    target: titleContainerRef,
    offset: ["end end", "end start"],
  });
  const opacityTitle = useTransform(titleProgress, [0, 0.6, 0.75], [1, 1, 0]);

  return (
    <div className="mx-auto max-w-xl">
      <motion.section
        ref={titleContainerRef}
        className="h-screen"
        style={{ opacity: opacityTitle }}
      >
        <motion.div className="fixed -translate-x-1/2 left-1/2 text-center">
          <h1 className="text-purple-500 text-3xl py-16 font-semibold">
            This is the title that will disappear as you scroll
          </h1>
        </motion.div>
      </motion.section>
      <div className="pb-10">
        <Card
          title="Lorem ipsum dolor sit amet"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          style={{ transform: `translateY(0rem)` }}
        />
        <Card
          title="Lorem ipsum dolor sit amet"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          style={{ transform: `translateY(1rem)` }}
        />
        <Card
          title="Lorem ipsum dolor sit amet"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          style={{ transform: `translateY(2rem)` }}
        />
      </div>
      <LoremIpsum length={2} className="mt-6" />
    </div>
  );
}
