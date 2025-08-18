import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  {
    label: "Client Satisfaction",
    value: 100,
    icon: (
      <svg className="w-10 h-10 text-indigo-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m9-7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
    ),
    suffix: "%",
  },
  {
    label: "Projects",
    value: 25,
    icon: (
      <svg className="w-10 h-10 text-purple-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 0V4m0 7v7m0 0H4m8 0h8" /></svg>
    ),
    suffix: "+",
  },
  {
    label: "Years Experience",
    value: 2,
    icon: (
      <svg className="w-10 h-10 text-pink-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
    suffix: "+",
  },
];

function useCountUp(target: number, duration = 1200, trigger: boolean) {
  const [count, setCount] = useState(0);
  const ref = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!trigger) return;
    setCount(0);
    let start = 0;
    const step = () => {
      start += 1;
      setCount((prev) => (prev < target ? prev + 1 : target));
      if (start < target) {
        ref.current = setTimeout(step, duration / target);
      }
    };
    step();
    return () => {
      if (ref.current) {
        clearTimeout(ref.current);
      }
    };
  }, [target, duration, trigger]);

  return count;
}

function AnimatedCounter({ value, suffix, trigger }: { value: number; suffix?: string; trigger: boolean }) {
  const count = useCountUp(value, 1200, trigger);
  return (
    <span>{count}{suffix || ""}</span>
  );
}

const Stats = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.3 });

  return (
    <section ref={ref} className="relative w-full flex flex-col items-center justify-center py-20 px-4 overflow-hidden">
      {/* Animated/blurred background blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 10, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-purple-300/10 dark:bg-purple-600/10 blur-[100px]"
        />
        <motion.div
          animate={{ x: [0, 15, 0], y: [0, -15, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear", delay: 2 }}
          className="absolute bottom-1/4 right-1/3 w-72 h-72 rounded-full bg-indigo-300/10 dark:bg-indigo-600/10 blur-[100px]"
        />
      </div>
      <motion.h2
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 40, opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center mb-14 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-500 dark:from-indigo-300 dark:to-purple-300"
      >
        My Impact
      </motion.h2>
      <div className="max-w-5xl w-full grid grid-cols-1 sm:grid-cols-3 gap-10">
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center bg-white/90 dark:bg-gray-900/80 rounded-3xl shadow-xl p-10 border border-indigo-100 dark:border-indigo-800 transition-all duration-300"
          >
            <div className="mb-4">{stat.icon}</div>
            <div className="text-5xl font-extrabold text-indigo-700 dark:text-indigo-300 mb-2 tracking-tight">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} trigger={inView} />
            </div>
            <div className="text-xl font-semibold text-gray-700 dark:text-gray-200 tracking-wide">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats; 