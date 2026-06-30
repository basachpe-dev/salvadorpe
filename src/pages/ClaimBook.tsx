import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

type FormState = "idle" | "submitting" | "success" | "error";

const ClaimBook = () => {
  const [formState, setFormState] = useState<FormState>("idle");
  const [codigoReclamo, setCodigoReclamo] = useState("");

  const [form, setForm] = useState({
    // Datos del consumidor
    nombres: "",
    apellidos: "",
    tipoDocumento: "DNI",
    numeroDocumento: "",
    domicilio: "",
    telefono: "",
    correo: "",
    // Información del reclamo
    tipoRequerimiento: "Reclamo",
    fechaCompra: "",
    montoReclamado: "",
    productoServicio: "",
    descripcion: "",
    pedido: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const generarCodigo = () => {
    const fecha = new Date();
    const codigo = `REC-${fecha.getFullYear()}${String(fecha.getMonth() + 1).padStart(2, "0")}${String(fecha.getDate()).padStart(2, "0")}-${Math.floor(Math.random() * 9000 + 1000)}`;
    return codigo;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");

    try {
      const codigo = generarCodigo();

      // Envío por mailto como método nativo (sin backend)
      const asunto = encodeURIComponent(`[${form.tipoRequerimiento}] ${codigo} - ${form.nombres} ${form.apellidos}`);
      const cuerpo = encodeURIComponent(
        `LIBRO DE RECLAMACIONES VIRTUAL\n` +
        `Código: ${codigo}\n` +
        `Fecha: ${new Date().toLocaleDateString("es-PE")}\n\n` +
        `--- DATOS DEL CONSUMIDOR ---\n` +
        `Nombres: ${form.nombres} ${form.apellidos}\n` +
        `Documento: ${form.tipoDocumento} ${form.numeroDocumento}\n` +
        `Domicilio: ${form.domicilio}\n` +
        `Teléfono: ${form.telefono}\n` +
        `Correo: ${form.correo}\n\n` +
        `--- DETALLE DEL RECLAMO ---\n` +
        `Tipo: ${form.tipoRequerimiento}\n` +
        `Producto/Servicio: ${form.productoServicio}\n` +
        `Fecha de compra: ${form.fechaCompra}\n` +
        `Monto reclamado: ${form.montoReclamado ? "S/ " + form.montoReclamado : "No aplica"}\n` +
        `N° de pedido: ${form.pedido || "No indicado"}\n\n` +
        `Descripción:\n${form.descripcion}\n\n` +
        `---\nEnviado desde el Libro de Reclamaciones Virtual de Café Salvador`
      );

      setCodigoReclamo(codigo);
      setFormState("success");

      // Abrir cliente de correo con los datos prellenados
      window.location.href = `mailto:ceobasach@gmail.com?subject=${asunto}&body=${cuerpo}`;

    } catch {
      setFormState("error");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Libro de Reclamaciones | Café Salvador</title>
        <meta name="description" content="Libro de Reclamaciones Virtual de Café Salvador (BIO AGRO SACH S.A.C.). Presenta tu queja o reclamo de forma rápida y segura." />
        <link rel="canonical" href="/libro-de-reclamaciones" />
        <meta property="og:title" content="Libro de Reclamaciones | Café Salvador" />
        <meta property="og:url" content="https://salvadorpe.vercel.app/libro-de-reclamaciones" />
      </Helmet>
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-3xl">

          {/* Encabezado */}
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-2">
              Libro de Reclamaciones
            </h1>
            <p className="text-muted-foreground">
              Conforme al Código de Protección y Defensa del Consumidor — Ley N° 29571 y D.S. N° 011-2011-PCM
            </p>
          </div>

          {/* Datos del proveedor */}
          <div className="bg-card border border-border/50 rounded-xl p-6 mb-10 text-sm text-muted-foreground space-y-1">
            <p className="font-semibold text-foreground text-base mb-3">Datos del Proveedor</p>
            <p><span className="text-foreground font-medium">Razón social:</span> BIO AGRO SACH S.A.C.</p>
            <p><span className="text-foreground font-medium">Nombre comercial:</span> Café Salvador</p>
            <p><span className="text-foreground font-medium">RUC:</span> 20611475366</p>
            <p><span className="text-foreground font-medium">Dirección:</span> Jr. Santiago Antúnez de Mayolo 227, La Molina, Lima</p>
            <p><span className="text-foreground font-medium">Teléfono:</span> +51 982 591 585</p>
            <p><span className="text-foreground font-medium">Correo:</span> ceobasach@gmail.com</p>
            <p className="mt-3 text-xs">Su reclamo será atendido en un plazo máximo de <strong className="text-foreground">30 días calendario</strong>. Recibirá una copia de su reclamo al correo indicado.</p>
          </div>

          {/* Formulario o confirmación */}
          {formState === "success" ? (
            <div className="bg-card border border-border/50 rounded-xl p-8 text-center space-y-4">
              <div className="text-4xl mb-2">✅</div>
              <h2 className="text-xl font-semibold">Reclamo registrado</h2>
              <p className="text-muted-foreground">Tu código de identificación es:</p>
              <p className="text-2xl font-mono font-semibold text-primary">{codigoReclamo}</p>
              <p className="text-muted-foreground text-sm">
                Se ha abierto tu cliente de correo con el detalle del reclamo listo para enviar a <strong>ceobasach@gmail.com</strong>. Por favor, envíalo para completar el registro. Guarda tu código para hacer seguimiento.
              </p>
              <p className="text-muted-foreground text-sm">
                Recibirás una respuesta en un plazo máximo de <strong>30 días calendario</strong>.
              </p>
              <Button
                variant="outline"
                onClick={() => { setFormState("idle"); setForm({ nombres: "", apellidos: "", tipoDocumento: "DNI", numeroDocumento: "", domicilio: "", telefono: "", correo: "", tipoRequerimiento: "Reclamo", fechaCompra: "", montoReclamado: "", productoServicio: "", descripcion: "", pedido: "" }); }}
                className="mt-4"
              >
                Registrar otro reclamo
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">

              {/* Tipo de requerimiento */}
              <div className="bg-card border border-border/50 rounded-xl p-6">
                <h2 className="font-semibold text-lg mb-4">Tipo de Requerimiento</h2>
                <div className="flex gap-6">
                  {["Reclamo", "Queja"].map((tipo) => (
                    <label key={tipo} className="flex items-center gap-2 cursor-pointer text-muted-foreground">
                      <input
                        type="radio"
                        name="tipoRequerimiento"
                        value={tipo}
                        checked={form.tipoRequerimiento === tipo}
                        onChange={handleChange}
                        className="accent-primary"
                      />
                      <span>{tipo}</span>
                    </label>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  <strong className="text-foreground">Reclamo:</strong> disconformidad con un producto o servicio. &nbsp;
                  <strong className="text-foreground">Queja:</strong> mala atención o trato inadecuado, sin relación con el producto.
                </p>
              </div>

              {/* Datos del consumidor */}
              <div className="bg-card border border-border/50 rounded-xl p-6 space-y-4">
                <h2 className="font-semibold text-lg mb-2">Datos del Consumidor</h2>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Nombres <span className="text-red-500">*</span></label>
                    <input name="nombres" value={form.nombres} onChange={handleChange} required
                      className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Apellidos <span className="text-red-500">*</span></label>
                    <input name="apellidos" value={form.apellidos} onChange={handleChange} required
                      className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Tipo de documento <span className="text-red-500">*</span></label>
                    <select name="tipoDocumento" value={form.tipoDocumento} onChange={handleChange} required
                      className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                      <option>DNI</option>
                      <option>CE</option>
                      <option>Pasaporte</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">N° de documento <span className="text-red-500">*</span></label>
                    <input name="numeroDocumento" value={form.numeroDocumento} onChange={handleChange} required
                      className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Domicilio <span className="text-red-500">*</span></label>
                  <input name="domicilio" value={form.domicilio} onChange={handleChange} required
                    className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Teléfono <span className="text-red-500">*</span></label>
                    <input name="telefono" value={form.telefono} onChange={handleChange} required type="tel"
                      className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Correo electrónico <span className="text-red-500">*</span></label>
                    <input name="correo" value={form.correo} onChange={handleChange} required type="email"
                      className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                </div>
              </div>

              {/* Detalle del reclamo */}
              <div className="bg-card border border-border/50 rounded-xl p-6 space-y-4">
                <h2 className="font-semibold text-lg mb-2">Detalle del Reclamo</h2>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Producto o servicio involucrado <span className="text-red-500">*</span></label>
                    <input name="productoServicio" value={form.productoServicio} onChange={handleChange} required
                      placeholder="Ej: Café Salvador 250g"
                      className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">N° de pedido (si aplica)</label>
                    <input name="pedido" value={form.pedido} onChange={handleChange}
                      className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Fecha de compra <span className="text-red-500">*</span></label>
                    <input name="fechaCompra" value={form.fechaCompra} onChange={handleChange} required type="date"
                      className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Monto reclamado en S/ (si aplica)</label>
                    <input name="montoReclamado" value={form.montoReclamado} onChange={handleChange} type="number" min="0"
                      placeholder="0.00"
                      className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Descripción del motivo <span className="text-red-500">*</span></label>
                  <textarea name="descripcion" value={form.descripcion} onChange={handleChange} required rows={5}
                    placeholder="Describe detalladamente el motivo de tu reclamo o queja, incluyendo la solución que esperas..."
                    className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none" />
                </div>
              </div>

              {formState === "error" && (
                <p className="text-red-500 text-sm">Ocurrió un error. Por favor intenta nuevamente o escríbenos directamente a ceobasach@gmail.com.</p>
              )}

              <Button type="submit" variant="accent" className="w-full" disabled={formState === "submitting"}>
                {formState === "submitting" ? "Registrando..." : "Enviar Reclamo"}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Al enviar este formulario, se abrirá tu cliente de correo con los datos del reclamo para que lo envíes directamente. Tu reclamo será atendido en un plazo máximo de 30 días calendario.
              </p>
            </form>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ClaimBook;
