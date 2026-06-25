import processimg from "@/assets/Omia-proceso.JPG";

const VideoSection = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-up">
          <p className="text-primary font-medium text-sm mb-4 tracking-wide uppercase">Detrás de Escena</p>
          <h2 className="text-5xl md:text-6xl font-semibold mb-4 tracking-tight">
            Nuestro <span className="text-accent">Proceso</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Del cultivo a tu taza, cada paso es una obra de arte
          </p>
        </div>

        <div className="max-w-5xl mx-auto animate-fade-in">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-card">
            
            {/* VIDEO COMENTADO
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              poster="https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=2061&auto=format&fit=crop"
            >
              <source
                src="https://assets.mixkit.co/videos/preview/mixkit-hands-holding-and-examining-coffee-beans-25644-large.mp4"
                type="video/mp4"
              />
              Tu navegador no soporta el elemento de video.
            </video>
            */}

            {/* Imagen del proceso */}
            <img
              src={processimg}
              alt="Nuestro proceso"
              className="w-full h-full object-cover"
            />

            {/* Overlay sutil */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
          </div>
          {/* Overlay sutil 
          <p className="text-center text-sm text-muted-foreground mt-6">
            Reemplaza este video con tu propio contenido en el código
          </p>
          */}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;