import { Button } from "@/components/ui/button";

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <h1 className="text-xl font-semibold tracking-tight">Salvador</h1>
        
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("inicio")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Inicio
          </button>
          <button
            onClick={() => scrollToSection("origen")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Origen
          </button>
          <button
            onClick={() => scrollToSection("productos")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Productos
          </button>
          <Button variant="default" size="sm">
            Comprar
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
