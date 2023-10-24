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
  const opacityTitle = useTransform(titleProgress, [0, 0.7, 0.9], [1, 1, 0]);

  // card scaling
  const cardsContainerRef = useRef(null);
  const { scrollYProgress: cardsProgress } = useScroll({
    target: cardsContainerRef,
    offset: ["start 20px", "end 300px"],
  });

  const scaleCard1 = useTransform(cardsProgress, [0, 1], [1, 0.8]);
  const scaleCard2 = useTransform(cardsProgress, [0.3, 1], [1, 0.85]);
  const scaleCard3 = useTransform(cardsProgress, [0.4, 1], [1, 0.9]);

  const yCard2 = useTransform(cardsProgress, [0.3, 0.5], ["16rem", "2rem"]);
  const yCard3 = useTransform(cardsProgress, [0.5, 0.7], ["18rem", "4rem"]);

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
      <div ref={cardsContainerRef} className="pb-14 border">
        <Card
          title="Lorem ipsum dolor sit amet"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          style={{
            y: "0rem",
            scale: scaleCard1,
          }}
          index={0}
        />
        <Card
          title="Lorem ipsum dolor sit amet"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          style={{
            y: yCard2,
            scale: scaleCard2,
          }}
          className="bg-pink-700"
          index={1}
        />
        <Card
          title="Lorem ipsum dolor sit amet"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          style={{
            y: yCard3,
            scale: scaleCard3,
          }}
          index={2}
          className="bg-gray-700"
        />
      </div>
      <LoremIpsum length={2} className="mt-6" />
    </div>
  );
}
