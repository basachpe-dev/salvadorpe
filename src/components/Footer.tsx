import { Link } from "react-router-dom";

const Footer = () => {
    <footer className="border-t border-border/50 bg-card">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Cafe Salvador</h3>
            <p className="text-muted-foreground">
              Café premium de la ceja de selva peruana.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#inicio" className="hover:text-foreground transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#origen" className="hover:text-foreground transition-colors">
                  Origen
                </a>
              </li>
              <li>
                <a href="#productos" className="hover:text-foreground transition-colors">
                  Productos
                </a>
              </li>
              <li>
                <Link to="/terminos-y-condiciones" className="hover:text-foreground transition-colors">
                  Términos y Condiciones
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Ubicación</h4>
            <p className="text-muted-foreground">
              Omia, Rodríguez de Mendoza
              <br />
              Amazonas, Perú
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 text-center text-muted-foreground">
          <p>&copy; 2025 Café Salvador. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
