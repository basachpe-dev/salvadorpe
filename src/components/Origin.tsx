import originImage from "@/assets/origin-landscape.jpg";

const Origin = () => {
  return (
    <section id="origen" className="py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-up">
            <h2 className="text-5xl md:text-6xl font-semibold mb-6 tracking-tight">
              De Omia <span className="text-accent">al mundo</span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                En las alturas de la ceja de selva peruana, donde las nubes se encuentran 
                con las montañas, nace Salvador. Nuestro café crece en Omia, Rodríguez de 
                Mendoza, una región bendecida por un microclima único.
              </p>
              <p>
                Cada grano es cultivado con dedicación por agricultores locales que 
                mantienen tradiciones ancestrales. El resultado es un café con notas 
                distintivas que reflejan la riqueza de nuestra tierra.
              </p>
              <p className="text-foreground font-medium">
                Salvador no es solo café. Es la esencia de Perú en cada taza.
              </p>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={originImage}
                alt="Paisaje de Omia, Rodríguez de Mendoza"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Origin;
