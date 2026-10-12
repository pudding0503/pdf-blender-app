"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function AnimatedSection({ children, className, delay = 0 }: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();
  return <motion.div className={className} data-reveal
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: reduced ? 0 : 0.5, delay: reduced ? 0 : delay, type: "spring", bounce: 0 }}
  >{children}</motion.div>;
}
