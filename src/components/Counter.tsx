import { animate, useInView, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const value = useMotionValue(0);
  const rounded = useTransform(value, (v) => Math.round(v).toLocaleString());

  useEffect(() => {
    if (!inView) return;
    const controls = animate(value, to, { duration: 2, ease: [0.22, 1, 0.36, 1] });
    const unsub = rounded.on("change", (v) => {
      if (ref.current) ref.current.textContent = v + suffix;
    });
    return () => {
      controls.stop();
      unsub();
    };
  }, [inView, to, suffix, value, rounded]);

  return <span ref={ref}>0{suffix}</span>;
}
