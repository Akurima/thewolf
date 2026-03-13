import wolfLogo from "@/assets/wolf-logo.png";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4 text-center">
        <img src={wolfLogo} alt="The Wolf Logo" className="h-12 w-12 mx-auto mb-4" />
        <p className="font-heading text-xl uppercase text-primary tracking-wider mb-2">The Wolf</p>
        <p className="text-muted-foreground text-sm mb-6">
          Gimnasio en Canelones, Uruguay — Musculación · Funcional · Ritmo · Pilates
        </p>
        <p className="text-muted-foreground text-xs">
          © {new Date().getFullYear()} The Wolf Gym. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
