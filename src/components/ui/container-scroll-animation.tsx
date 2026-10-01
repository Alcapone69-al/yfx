import React, { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [16, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], reduceMotion ? [1, 1] : [1.04, 1]);

  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="mx-auto max-w-3xl text-center text-3xl font-extrabold leading-[1.08] tracking-[-0.03em] sm:text-[2.75rem]">
          {titleComponent}
        </h2>
        <div ref={containerRef} className="relative mt-12 h-[42rem] md:h-[56rem]">
          <div className="sticky top-24 flex h-full items-start justify-center [perspective:1200px]">
            <motion.div
              style={{ ...(reduceMotion ? {} : { rotateX: rotate, scale }) }}
              className="w-full max-w-4xl rounded-3xl border border-border bg-card p-3 shadow-glow [transform-style:preserve-3d]"
            >
              <div className="h-[26rem] overflow-hidden rounded-2xl md:h-[34rem]">{children}</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
