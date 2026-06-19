import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-coffee.jpg";

const Hero = () => {
  const scrollToProducts = () => {
    const element = document.getElementById("productos");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Café Salvador de la selva peruana"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      <div className="container mx-auto px-6 pt-24 pb-16 relative z-10">
        <div className="max-w-3xl animate-fade-up">
          <p className="text-primary font-medium text-lg mb-4 tracking-wide">CAFE SALVADOR</p>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-semibold mb-6 tracking-tight">
            Café de la
            <br />
            ceja de selva
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl font-light">
            Salvador nace en las alturas de Omia, Rodríguez de Mendoza, Perú. 
            Cada taza cuenta la historia de nuestra tierra.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="accent" 
              size="lg" 
              className="group"
              onClick={scrollToProducts}
            >
              Explorar Productos
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="border-primary/30 hover:border-primary hover:bg-primary/10">
              Conoce Nuestro Origen
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
