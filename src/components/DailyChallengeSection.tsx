import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sword } from "lucide-react";

const challenges = [
{ title: "100 sentadillas", desc: "Sin parar. Sin excusas. Solo vos y la gravedad.", category: "Fuerza" },
{ title: "5 min de plancha", desc: "Tu core no miente. Aguantá y sentí la diferencia.", category: "Resistencia" },
{ title: "200 saltos de cuerda", desc: "Coordinación y cardio en su máxima expresión.", category: "Cardio" },
{ title: "50 burpees", desc: "El ejercicio que nadie quiere hacer pero todos necesitan.", category: "Funcional" },
{ title: "3 rondas: 15 flexiones + 20 abdominales", desc: "Circuito rápido para despertar al lobo interior.", category: "Circuito" },
{ title: "Sprint 30 seg + descanso 15 seg x 10", desc: "Intervalos que encienden tu metabolismo.", category: "HIIT" },
{ title: "30 estocadas por pierna", desc: "Piernas de acero para correr con la manada.", category: "Fuerza" }];


const DailyChallengeSection = () => {
  const [challenge, setChallenge] = useState(challenges[0]);

  useEffect(() => {
    const dayIndex = new Date().getDate() % challenges.length;
    setChallenge(challenges[dayIndex]);
  }, []);

  return (
    <section className="py-24 bg-card relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 left-0 w-full h-full"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, hsl(var(--primary)) 0, hsl(var(--primary)) 1px, transparent 0, transparent 50%)`,
          backgroundSize: '40px 40px'
        }} />
        
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl font-bold uppercase text-primary mb-4">
            
            Desafío del Día
          </motion.h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8" />
          <p className="text-foreground max-w-2xl mx-auto text-lg">
            Cada día, un nuevo reto para vos. ¿Aceptás el desafío?
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={challenge.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-background border-2 border-primary/40 rounded-sm p-10 md:p-14 text-center relative overflow-hidden">
              
              <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />
              <Sword className="w-10 h-10 text-primary mx-auto mb-6" />
              <span className="inline-block bg-primary/10 text-primary font-heading text-xs uppercase tracking-widest px-4 py-1 rounded-full mb-6 border border-primary/20">
                {challenge.category}
              </span>
              <h3 className="font-heading text-3xl md:text-4xl uppercase text-primary-foreground font-bold mb-4">
                {challenge.title}
              </h3>
              <p className="text-foreground text-lg italic mb-8">{challenge.desc}</p>
              <a
                href="https://wa.me/59891804963?text=Acepto%20el%20desaf%C3%ADo%20del%20d%C3%ADa%20🐺"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary text-primary-foreground font-heading uppercase tracking-wider px-8 py-3 rounded-sm hover:opacity-90 transition-opacity">
                
                Acepto el desafío 🐺
              </a>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>);

};

export default DailyChallengeSection;