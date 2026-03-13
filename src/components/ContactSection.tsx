import { MapPin, Phone, MessageCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contacto" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase text-primary mb-4">
            Contacto
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Info */}
          <div className="flex flex-col gap-8">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-heading text-lg uppercase text-primary-foreground mb-1">Ubicación</h3>
                <p className="text-foreground">Doctor Luis Alberto de Herrera 90000, Canelones, Uruguay</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-heading text-lg uppercase text-primary-foreground mb-1">Teléfono</h3>
                <p className="text-foreground">+598 91 804 963</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MessageCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-heading text-lg uppercase text-primary-foreground mb-1">WhatsApp</h3>
                <a
                  href="https://wa.me/59891804963"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 bg-primary text-primary-foreground font-heading uppercase tracking-wider px-6 py-3 rounded-sm hover:opacity-90 transition-opacity"
                >
                  Escribinos por WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-sm overflow-hidden border border-border aspect-video">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.5!2d-56.28!3d-34.53!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDMxJzQ4LjAiUyA1NsKwMTYnNDguMCJX!5e0!3m2!1ses!2suy!4v1!5m2!1ses!2suy"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de The Wolf Gym en Canelones"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
