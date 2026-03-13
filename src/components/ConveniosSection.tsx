import { Handshake } from "lucide-react";

const convenios = [
  "ADEOM", "SOOFRICA", "AUTE", "AFEU",
  "LIGA SENIORS", "ADFJDC", "CAVICA", "SEMIC",
];

const ConveniosSection = () => {
  return (
    <section id="convenios" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase text-primary mb-4">
            Convenios
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8" />
          <p className="text-foreground max-w-2xl mx-auto text-lg">
            Trabajamos con diversas instituciones para ofrecerte beneficios exclusivos.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {convenios.map((c) => (
            <div
              key={c}
              className="bg-secondary border border-border rounded-sm p-6 text-center hover:border-primary transition-colors group"
            >
              <Handshake className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <span className="font-heading text-sm uppercase tracking-wider text-primary-foreground">
                {c}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConveniosSection;
