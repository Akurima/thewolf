import heroImg from "@/assets/hero-gym.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Interior del gimnasio The Wolf con equipamiento profesional"
          className="w-full h-full object-cover"
          loading="eager" />
        
        <div className="absolute inset-0 bg-background/70" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-up">
        <p className="font-heading text-sm uppercase tracking-[0.4em] text-foreground mb-4">

        </p>
        <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl font-bold uppercase text-primary leading-none mb-6">
          The Wolf
        </h1>
        <p className="text-lg md:text-xl text-foreground max-w-2xl mx-auto mb-10 font-body leading-relaxed">
          Superá tus límites y alcanzá tu mejor versión. Entrenamiento de fuerza, funcional, ritmo y pilates en un espacio diseñado para vos.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/59891804963"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground font-heading uppercase tracking-wider text-lg px-8 py-4 rounded-sm hover:opacity-90 transition-opacity glow-wolf">
            
            Contactanos
          </a>
          <a
            href="#entrenamientos"
            className="inline-block border border-foreground/30 text-foreground font-heading uppercase tracking-wider text-lg px-8 py-4 rounded-sm hover:border-primary hover:text-primary transition-colors">
            
            Ver entrenamientos
          </a>
        </div>
      </div>
    </section>);

};

export default HeroSection;