import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
{
  name: "Martín R.",
  months: 14,
  text: "Llegué sin saber nada de gimnasio y hoy levanto más de lo que jamás imaginé. La atención de los profes es increíble, te corrigen, te motivan y te hacen sentir parte de algo.",
  rating: 5
},
{
  name: "Lucía G.",
  months: 8,
  text: "Las clases de ritmo me cambiaron la vida. Venía estresada del trabajo y después de una hora acá salgo otra persona. El ambiente es único, nada que ver con otros gimnasios.",
  rating: 5
},
{
  name: "Federico S.",
  months: 24,
  text: "Probé muchos gimnasios en Canelones y ninguno se compara. Acá sentís que no sos un número, te conocen por tu nombre y te ayudan a cumplir tus metas reales.",
  rating: 5
},
{
  name: "Valentina M.",
  months: 6,
  text: "Empecé pilates pensando que era tranquilo y me sorprendió lo desafiante que es. Mi postura mejoró muchísimo y los dolores de espalda desaparecieron.",
  rating: 5
}];


const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl font-bold uppercase text-primary mb-4">
            
            ​Reseñas   
          </motion.h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8" />
          <p className="text-foreground max-w-2xl mx-auto text-lg">
            Las historias de quienes entrenan con nosotros son nuestra mejor carta de presentación.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) =>
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-card border border-border rounded-sm p-8 relative group hover:border-primary/30 transition-colors">
            
              <Quote className="w-8 h-8 text-primary/20 absolute top-6 right-6" />
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) =>
              <Star key={j} className="w-4 h-4 text-primary fill-primary" />
              )}
              </div>
              <p className="text-foreground text-sm leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-heading text-lg uppercase text-primary-foreground">{t.name}</p>
                  <p className="text-muted-foreground text-xs">{t.months} meses en la manada</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                  <span className="font-heading text-primary text-sm font-bold">
                    {t.name.charAt(0)}
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

};

export default TestimonialsSection;