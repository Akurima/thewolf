import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Flame, Users, Trophy, Zap } from "lucide-react";

interface StatProps {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
}

const AnimatedCounter = ({ icon: Icon, value, suffix, label }: StatProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = value / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center group"
    >
      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
        <Icon className="w-7 h-7 text-primary" />
      </div>
      <p className="font-heading text-5xl md:text-6xl font-bold text-primary mb-1">
        {count.toLocaleString()}{suffix}
      </p>
      <p className="text-foreground font-body text-sm uppercase tracking-widest">{label}</p>
    </motion.div>
  );
};

const stats: StatProps[] = [
  { icon: Users, value: 200, suffix: "+", label: "Miembros activos" },
  { icon: Flame, value: 4800, suffix: "+", label: "Horas entrenadas al mes" },
  { icon: Trophy, value: 2, suffix: "", label: "Años formando lobos" },
  { icon: Zap, value: 4, suffix: "", label: "Disciplinas" },
];

const PackStatsSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary blur-[200px]" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase text-primary mb-4">
            La Manada en Números
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8" />
          <p className="text-foreground max-w-2xl mx-auto text-lg">
            Cada número representa el esfuerzo y la dedicación de nuestra comunidad.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 max-w-5xl mx-auto">
          {stats.map((s) => (
            <AnimatedCounter key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackStatsSection;
