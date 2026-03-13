import salaImg from "@/assets/sala.jpg";
import ritmoImg from "@/assets/ritmo.jpg";
import funcionalImg from "@/assets/funcional.jpg";
import pilatesImg from "@/assets/pilates.jpg";

const trainings = [
  {
    title: "Sala",
    desc: "Musculación y entrenamiento de fuerza con equipamiento completo. Mancuernas, pesas libres, máquinas de última generación y zona de cardio.",
    img: salaImg,
  },
  {
    title: "Ritmo",
    desc: "Clases grupales de alta energía donde el movimiento se fusiona con la música. Ideal para quemar calorías y divertirte mientras entrenás.",
    img: ritmoImg,
  },
  {
    title: "Funcional",
    desc: "Entrenamiento de acondicionamiento físico con battle ropes, kettlebells y ejercicios de peso corporal para mejorar fuerza, resistencia y agilidad.",
    img: funcionalImg,
  },
  {
    title: "Pilates",
    desc: "Mejorá tu postura, flexibilidad y fuerza central con sesiones de pilates guiadas por profesionales en equipamiento especializado.",
    img: pilatesImg,
  },
];

const TrainingsSection = () => {
  return (
    <section id="entrenamientos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase text-primary mb-4">
            Entrenamientos
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8" />
          <p className="text-foreground max-w-2xl mx-auto text-lg">
            Cuatro disciplinas pensadas para que encuentres la que mejor se adapte a tus objetivos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {trainings.map((t) => (
            <div
              key={t.title}
              className="relative group overflow-hidden rounded-sm aspect-[4/3]"
            >
              <img
                src={t.img}
                alt={`${t.title} - Entrenamiento en The Wolf Gym`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-background/60 group-hover:bg-background/75 transition-colors flex flex-col justify-end p-8">
                <h3 className="font-heading text-3xl md:text-4xl uppercase text-primary font-bold mb-2">
                  {t.title}
                </h3>
                <p className="text-foreground text-sm md:text-base leading-relaxed max-w-md">
                  {t.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingsSection;
