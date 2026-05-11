import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const HERO_BG = "https://images.stockcake.com/public/1/e/1/1e1ec843-a0dc-4fd9-b3f1-655a21e22b9f_large/executive-board-meeting-stockcake.jpg";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);

  // Track scroll progress within this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"], // starts when top hits top, ends when bottom hits top
  });

  // Map scroll 0→1 to different Y translations per layer
  const bgY    = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);  // slowest
  const textY  = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);  // medium
  const floatY = useTransform(scrollYProgress, [0, 1], ["0%", "-160%"]); // goes up (negative)

  return (
    <section ref={ref} className="relative h-screen overflow-hidden flex items-center">

      {/* Layer 1: Background image — moves slowest */}
      <motion.div
        className="absolute inset-0 w-full h-[130%] top-[-15%]" // oversized to avoid gaps
        style={{ y: bgY }}
      >
        <img src={HERO_BG} className="w-full h-full object-cover" />
      </motion.div>

      {/* Layer 4: Text content — moves at medium speed */}
      <motion.div style={{ y: textY }} className="relative z-10 px-6">
        <h1 className="text-7xl font-bold text-white">LAYER 4</h1>
        <p className="text-white/70 mt-4">moves at medium speed</p>
      </motion.div>

      {/* Layer 2: Dark overlay (static) */}
      <div className="absolute inset-0 bg-black/55">
        <h1 style={{ border: '2px solid yellow' }}>LAYER 2 - static</h1>
      </div>

      {/* Layer 3: Floating blob — moves fastest (upward) */}
      <motion.div
        style={{ y: floatY, border: '2px solid yellow' }}
        className="absolute top-200 right-[10%] w-72 h-72 bg-blue-500/20"
      >
        <h1 style={{outline: '2px solid orange'}}>LAYER 3</h1>
      </motion.div>

    </section>
  );
}
