import { motion } from "framer-motion";
import { Target, TrendingUp, Award, Repeat } from "lucide-react";

const steps = [
  {
    icon: Target,
    phase: "Semana 1–2",
    title: "Despertar",
    desc: "Tu cuerpo reconoce el cambio. Los músculos se activan, la energía sube. Los primeros dolores son señales de que algo grande comienza.",
  },
  {
    icon: TrendingUp,
    phase: "Mes 1–2",
    title: "Adaptación",
    desc: "Los movimientos se vuelven naturales. Empezás a notar cambios reales: más fuerza, mejor postura, más confianza. El espejo empieza a devolverte otra imagen.",
  },
  {
    icon: Repeat,
    phase: "Mes 3–6",
    title: "Transformación",
    desc: "El entrenamiento ya no es una obligación, es tu ritual. Tu cuerpo cambia visiblemente y tu mente se fortalece. La manada te reconoce.",
  },
  {
    icon: Award,
    phase: "Mes 6+",
    title: "Evolución",
    desc: "Sos otra persona. No solo físicamente — mentalmente. Tenés disciplina, resilencia y hambre de más. El lobo despertó.",
  },
];

const TransformationSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl font-bold uppercase text-primary mb-4"
          >
            Tu Transformación
          </motion.h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8" />
          <p className="text-foreground max-w-2xl mx-auto text-lg">
            Así es el camino de quien entrena con nosotros. No es fácil, pero vale cada gota de sudor.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Horizontal line on desktop */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-px bg-border" />

          <div className="grid lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="text-center relative"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center mx-auto mb-6 relative z-10">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="inline-block font-heading text-xs uppercase tracking-widest text-primary mb-2">
                  {step.phase}
                </span>
                <h3 className="font-heading text-2xl uppercase text-primary-foreground font-bold mb-3">
                  {step.title}
                </h3>
                <p className="text-foreground text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;
