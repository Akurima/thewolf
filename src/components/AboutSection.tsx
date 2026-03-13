import { Dumbbell, Users, Star, Clock } from "lucide-react";

const features = [
  { icon: Dumbbell, title: "Equipamiento Profesional", desc: "Máquinas de musculación, pesas libres y equipamiento cardiovascular de primera línea." },
  { icon: Users, title: "Comunidad Motivadora", desc: "Un ambiente donde la disciplina y la camaradería te impulsan a dar lo mejor." },
  { icon: Star, title: "Atención Personalizada", desc: "Instructores dedicados que acompañan tu progreso con rutinas a medida." },
  { icon: Clock, title: "Horarios Amplios", desc: "Abrimos desde las 5:00 AM para que entrenes cuando mejor te convenga." },
];

const AboutSection = () => {
  return (
    <section id="nosotros" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase text-primary mb-4">
            Sobre Nosotros
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8" />
          <p className="text-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            En <span className="text-primary font-semibold">The Wolf</span> creemos que cada persona tiene el potencial de superar sus límites y alcanzar su mejor versión. Nuestro gimnasio en Canelones está diseñado para ofrecer un espacio cómodo, motivador y equipado para que puedas entrenar y mejorar tu condición física.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-secondary rounded-sm p-8 text-center hover:border-primary border border-border transition-colors group"
            >
              <f.icon className="w-10 h-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-heading text-xl uppercase text-primary-foreground mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
