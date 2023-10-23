"use client";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { ScrollPrompts } from "@/app/components/ScrollPrompts";

export default function Page() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const zoom = useTransform(scrollYProgress, [0.8, 1], ["50%", "100%"]);
  const x = useTransform(scrollYProgress, [0.3, 0.8], ["-100%", "0%"]);

  return (
    <ScrollPrompts>
      <section ref={targetRef} className="bg-purple-200 h-[400vh]">
        <div className="sticky top-0 h-screen overflow-hidden flex items-start bg-purple-400 gap-20">
          <motion.div
            style={{ scale: zoom, x }}
            className="w-screen h-screen bg-green-200 mx-auto"
          ></motion.div>
        </div>
      </section>
    </ScrollPrompts>
  );
}
