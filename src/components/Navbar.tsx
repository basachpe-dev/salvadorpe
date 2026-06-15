import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 150);
    } else {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <button onClick={scrollToTop} className="text-xl font-semibold tracking-tight hover:opacity-80 transition-opacity">
          Cafe Salvador
        </button>
        
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
          <Button variant="accent" size="sm">
            Comprar
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
