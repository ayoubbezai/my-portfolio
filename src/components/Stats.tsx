import { motion, useInView, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Users, Rocket, Clock, Code2 } from "lucide-react";

const stats = [
  {
    label: "Client Satisfaction",
    value: 100,
    icon: Users,
    suffix: "%",
    description: "Happy clients and successful collaborations",
    color: "from-blue-500 to-cyan-500",
    iconColor: "text-blue-500",
  },
  {
    label: "Projects Completed",
    value: 25,
    icon: Rocket,
    suffix: "+",
    description: "Web and mobile applications delivered",
    color: "from-purple-500 to-pink-500",
    iconColor: "text-purple-500",
  },
  {
    label: "Years Experience",
    value: 2,
    icon: Clock,
    suffix: "+",
    description: "Building modern digital experiences",
    color: "from-amber-500 to-orange-500",
    iconColor: "text-amber-500",
  },
  {
    label: "Technologies",
    value: 15,
    icon: Code2,
    suffix: "+",
    description: "Mastered tools and frameworks",
    color: "from-green-500 to-emerald-500",
    iconColor: "text-green-500",
  },
];

const rotatingTexts = [
  "Quantifying my journey through meaningful metrics",
  "Turning ideas into measurable success stories",
  "Building digital excellence one project at a time",
  "Creating impact through innovative solutions",
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

function AnimatedCounter({
  value,
  suffix,
  trigger,
}: {
  value: number;
  suffix?: string;
  trigger: boolean;
}) {
  const count = useCountUp(value, 1200, trigger);
  return (
    <span className="font-mono">
      {count}
      {suffix || ""}
    </span>
  );
}

const RotatingText = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-12 md:h-14 flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-xl md:text-xl text-gray-600 dark:text-gray-400 text-center absolute"
        >
          {rotatingTexts[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
};

const Stats = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.3, once: true });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const textVariants = (delay: number) => ({
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, delay, ease: [0.16, 0.77, 0.47, 0.97] },
    },
  });

  return (
    <section
      ref={ref}
      className="relative w-full flex flex-col items-center justify-center py-8 px-4 overflow-hidden"
    >
      {/* Enhanced background with gradient overlay */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-white via-purple-50/30 to-blue-50/20 dark:from-gray-900 dark:via-purple-900/10 dark:to-blue-900/10"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            x: [0, -15, 0],
            y: [0, 10, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-1/4 w-64 h-64 rounded-full bg-purple-300/20 dark:bg-purple-600/15 blur-[90px]"
        />
        <motion.div
          animate={{
            x: [0, 15, 0],
            y: [0, -15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
          className="absolute bottom-20 right-1/4 w-72 h-72 rounded-full bg-blue-300/20 dark:bg-blue-600/15 blur-[90px]"
        />
        <motion.div
          animate={{
            x: [0, 10, 0],
            y: [0, 8, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-1/2 left-1/3 w-56 h-56 rounded-full bg-amber-300/15 dark:bg-amber-600/10 blur-[70px]"
        />
      </div>

      {/* Header section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="text-center mb-16 max-w-3xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            By{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">
              The Numbers
            </span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full"
          />
        </motion.div>

        {/* Rotating text animation */}
        <motion.div variants={textVariants(0.3)}>
          <RotatingText />
        </motion.div>
      </motion.div>

      {/* Stats grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 max-w-6xl w-full"
      >
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              whileHover={{
                y: -8,
                scale: 1.03,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="relative group p-6 rounded-2xl backdrop-blur-sm border border-gray-200/60 dark:border-gray-800/60 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/70 dark:bg-gray-900/70"
            >
              {/* Decorative corner accents */}
              <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-gray-300/50 dark:border-gray-600/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-gray-300/50 dark:border-gray-600/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-gray-300/50 dark:border-gray-600/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-gray-300/50 dark:border-gray-600/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Icon without background */}
              <motion.div
                className={`mb-5 ${stat.iconColor} flex items-center justify-center`}
                whileHover={{
                  scale: 1.15,
                  rotate: 5,
                  transition: { type: "spring", stiffness: 400, damping: 10 },
                }}
              >
                <IconComponent size={32} strokeWidth={1.5} />
              </motion.div>

              {/* Counter */}
              <div
                className={`text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
              >
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  trigger={inView}
                />
              </div>

              {/* Label */}
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
                {stat.label}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {stat.description}
              </p>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent dark:from-black/20 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500 pointer-events-none"></div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Additional info section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        viewport={{ once: true }}
        className="mt-12 text-center max-w-2xl mx-auto p-6 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-xl border border-gray-200/40 dark:border-gray-800/40"
      >
        <p className="text-gray-600 dark:text-gray-400 italic text-base">
          "Every number tells a story of challenges overcome, problems solved,
          and value delivered."
        </p>
      </motion.div>
    </section>
  );
};

export default Stats;
