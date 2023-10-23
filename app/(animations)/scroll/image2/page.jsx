"use client";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { ScrollPrompts } from "@/app/components/ScrollPrompts";
import { Image } from "@/app/components/Image";
import { range } from "@/utils/range";

export default function Image2() {
  return (
    <>
      <ScrollPrompts>
        <div className="h-48 bg-purple-100 text-center pt-20">
          This animation moves the image carousel to the left as you scroll the
          height of <em>4 viewports</em>.
        </div>
        <HorizontalScrollCarousel />
        <div className="h-48 bg-purple-100" />
      </ScrollPrompts>
    </>
  );
}

const HorizontalScrollCarousel = () => {
  // This allows us to use the useScroll hook
  const targetRef = useRef(null);
  // Listens while we scroll and returns us a scrollYProgress value (starts at 0)
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  // 3 arguments: (1) motion value, (2) array of values to map from, (3) array of values to map to
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
  return (
    // What's important here is that this has a height of 4 horizontal viewports, so you can scroll for longer
    <section ref={targetRef} className="relative h-[400vh] bg-gray-900">
      {/* want to follow our viewport as we scroll down so we can do that by setting sticky and top-0  */}
      <div className="sticky top-0 flex items-center overflow-hidden h-screen bg-purple-400">
        <motion.div style={{ x }} className="flex gap-4">
          {range(5).map((i) => (
            <Image key={i} alt={`Image ${i}`} />
          ))}
        </motion.div>
      </div>
      <p className="text-white">This has the height of 2 screens</p>
    </section>
  );
};
