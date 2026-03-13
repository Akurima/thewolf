import { motion } from "framer-motion";
import { Shield, Flame, Crown } from "lucide-react";

const levels = [
  {
    icon: Shield,
    rank: "PRINCIPIANTE",
    subtitle: "Nivel 1",
    desc: "Empezás tu camino. Aprendés las bases del entrenamiento, corregís posturas y construís el hábito. Cada cachorro tiene un lobo dentro esperando despertar.",
    traits: ["Evaluación física inicial", "Rutina personalizada", "Acompañamiento constante"],
    glow: "from-foreground/10 to-foreground/5",
  },
  {
    icon: Flame,
    rank: "INTERMEDIO",
    subtitle: "NIVEL 2",
    desc: "Ya sentís el fuego. Tu cuerpo responde, tu mente se fortalece. Empezás a empujar tus propios límites y a inspirar a otros en la manada.",
    traits: ["Rutinas avanzadas", "Entrenamiento mixto", "Progreso medible"],
    glow: "from-primary/20 to-primary/5",
  },
  {
    icon: Crown,
    rank: "AVANZADO",
    subtitle: "Nivel 3",
    desc: "Sos la referencia de la manada. Tu disciplina es inquebrantable, tu fuerza es innegable. Liderás con el ejemplo y dejás huella en cada entrenamiento.",
    traits: ["Entrenamiento de élite", "Mentoría a nuevos", "Desafíos especiales"],
    glow: "from-primary/30 to-primary/5",
  },
];

const PackLevelsSection = () => {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl font-bold uppercase text-primary mb-4"
          >
            Rangos de la Manada
          </motion.h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8" />
          <p className="text-foreground max-w-2xl mx-auto text-lg">
            No importa en qué nivel estés — lo que importa es que sigas avanzando. Cada rango es un reflejo de tu compromiso.
          </p>
        </div>

        {/* Vertical timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />

          {levels.map((level, i) => (
            <motion.div
              key={level.rank}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className={`relative flex flex-col md:flex-row items-center gap-8 mb-16 last:mb-0 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Content card */}
              <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                <div className={`bg-gradient-to-b ${level.glow} border border-border rounded-sm p-8 hover:border-primary/40 transition-colors`}>
                  <level.icon className="w-8 h-8 text-primary mb-3 md:hidden" />
                  <h3 className="font-heading text-3xl uppercase text-primary font-bold">{level.rank}</h3>
                  <p className="font-heading text-sm uppercase tracking-widest text-muted-foreground mb-3">{level.subtitle}</p>
                  <p className="text-foreground text-sm leading-relaxed mb-4">{level.desc}</p>
                  <ul className={`space-y-1 ${i % 2 === 0 ? "md:text-right" : ""}`}>
                    {level.traits.map((t) => (
                      <li key={t} className="text-xs text-muted-foreground flex items-center gap-2 md:justify-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Center icon */}
              <div className="hidden md:flex w-14 h-14 rounded-full bg-background border-2 border-primary items-center justify-center z-10 flex-shrink-0">
                <level.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Spacer */}
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackLevelsSection;
