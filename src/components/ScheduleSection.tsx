import { Clock } from "lucide-react";

const schedule = [
  { day: "Lunes", hours: "05:00 – 22:00" },
  { day: "Martes", hours: "05:00 – 22:00" },
  { day: "Miércoles", hours: "05:00 – 22:00" },
  { day: "Jueves", hours: "05:00 – 22:00" },
  { day: "Viernes", hours: "05:00 – 22:00" },
  { day: "Sábado", hours: "06:00 – 12:30" },
  { day: "Domingo", hours: "Cerrado" },
];

const ScheduleSection = () => {
  return (
    <section id="horarios" className="py-24 bg-card">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase text-primary mb-4">
            Horarios
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8" />
        </div>

        <div className="bg-secondary rounded-sm border border-border overflow-hidden">
          {schedule.map((s, i) => (
            <div
              key={s.day}
              className={`flex items-center justify-between px-8 py-5 ${
                i < schedule.length - 1 ? "border-b border-border" : ""
              } ${s.hours === "Cerrado" ? "opacity-50" : ""}`}
            >
              <span className="font-heading text-lg uppercase tracking-wider text-primary-foreground">
                {s.day}
              </span>
              <span className="flex items-center gap-2 text-foreground font-body">
                <Clock className="w-4 h-4 text-primary" />
                {s.hours}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
