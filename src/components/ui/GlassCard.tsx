import { motion, type HTMLMotionProps } from "framer-motion";
import clsx from "clsx";
import { forwardRef } from "react";

type Props = HTMLMotionProps<"div"> & {
  strong?: boolean;
};

export const GlassCard = forwardRef<HTMLDivElement, Props>(function GlassCard(
  { className, strong, children, ...rest },
  ref,
) {
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={clsx(
        strong ? "glass-strong" : "glass",
        "rounded-2xl p-6 md:p-8",
        className,
      )}
      {...rest}
    >
      {children}
    </motion.div>
  );
});
