import { motion } from "framer-motion";
import wolfEyeImg from "@/assets/wolf-eye.jpg";

const philosophyItems = [
  {
    number: "01",
    title: "Instinto",
    text: "El lobo no duda. Confía en su cuerpo y actúa. En The Wolf entrenás para despertar ese instinto dormido, para que cada movimiento sea natural y poderoso.",
  },
  {
    number: "02",
    title: "Manada",
    text: "Un lobo solitario es fuerte, pero una manada es imparable. Acá no entrenás solo: formás parte de una comunidad que se empuja mutuamente a ser mejor.",
  },
  {
    number: "03",
    title: "Resistencia",
    text: "El lobo recorre kilómetros sin detenerse. Nosotros construimos esa resistencia — física y mental — que te permite seguir cuando otros se rinden.",
  },
  {
    number: "04",
    title: "Evolución",
    text: "El lobo se adapta a cualquier terreno. Tu cuerpo también puede. Cada sesión es una oportunidad de evolucionar y descubrir de qué estás hecho.",
  },
];

const WolfPhilosophySection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Wolf eye background */}
      <div className="absolute inset-0">
        <img
          src={wolfEyeImg}
          alt="Ojo de lobo"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-background/85" />
      </div>

      <div className="relative z-10 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-heading text-sm uppercase tracking-[0.5em] text-primary mb-4"
            >
              Filosofía
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-4xl md:text-6xl font-bold uppercase text-primary-foreground mb-4"
            >
              El Código del Lobo
            </motion.h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8" />
            <p className="text-foreground max-w-2xl mx-auto text-lg italic">
              "La fuerza de la manada es el lobo, y la fuerza del lobo es la manada."
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {philosophyItems.map((item, i) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="bg-background/50 backdrop-blur-sm border border-border rounded-sm p-8 hover:border-primary/50 transition-colors group"
              >
                <span className="font-heading text-5xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
                  {item.number}
                </span>
                <h3 className="font-heading text-2xl uppercase text-primary mt-2 mb-3">
                  {item.title}
                </h3>
                <p className="text-foreground leading-relaxed text-sm">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WolfPhilosophySection;
