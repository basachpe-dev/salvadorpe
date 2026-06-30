import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { totalItems, setIsCartOpen } = useCart();

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

        <div className="flex items-center gap-4 md:gap-8">
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
            <Button variant="accent" size="sm" onClick={() => scrollToSection("productos")}>
              Comprar
            </Button>
          </div>

          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 hover:bg-muted rounded-full transition-colors"
            aria-label="Carrito de compras"
          >
            <ShoppingCart className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs font-semibold w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
