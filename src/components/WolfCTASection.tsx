import { motion } from "framer-motion";
import wolfPackImg from "@/assets/wolf-pack.jpg";
import victoryImg from "@/assets/victory.jpg";

const WolfCTASection = () => {
  return (
    <section className="relative overflow-hidden py-0">
      <div className="grid md:grid-cols-2 min-h-[500px]">
        {/* Left - Wolf Pack Image */}
        <div className="relative">
          <img
            src={wolfPackImg}
            alt="Manada de lobos corriendo juntos"
            className="w-full h-full object-cover min-h-[300px]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-background/40" />
        </div>

        {/* Right - CTA */}
        <div className="relative bg-card flex items-center">
          <div className="absolute inset-0 opacity-10">
            <img
              src={victoryImg}
              alt=""
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10 p-12 md:p-16"
          >
            <p className="font-heading text-sm uppercase tracking-[0.4em] text-primary mb-4">
              ¿Estás listo?
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase text-primary-foreground leading-tight mb-6">
              Uníte a la<br />
              <span className="text-primary">Manada</span>
            </h2>
            <p className="text-foreground leading-relaxed mb-8 max-w-md">
              Ya sea que estés empezando o que busques llevar tu entrenamiento al siguiente nivel, nuestro objetivo es acompañarte en cada paso de tu progreso. El primer paso es el más difícil — después, la manada te lleva.
            </p>
            <a
              href="https://wa.me/59891804963"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-primary-foreground font-heading uppercase tracking-wider text-lg px-10 py-4 rounded-sm hover:opacity-90 transition-opacity glow-wolf"
            >
              Empezá hoy
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WolfCTASection;
