import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-2">
            Políticas de Privacidad
          </h1>
          <p className="text-muted-foreground mb-12">
            Última actualización: 2025
          </p>

          <section className="mb-10">
            <p className="text-muted-foreground leading-relaxed">
              En BIO AGRO SACH S.A.C., nos tomamos muy en serio la seguridad y privacidad de tus datos personales. De conformidad con la Ley N° 29733, Ley de Protección de Datos Personales de la República del Perú, y su Reglamento, te informamos detalladamente sobre el tratamiento que damos a la información que nos proporcionas.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">1. Titular del Banco de Datos</h2>
            <p className="text-muted-foreground leading-relaxed">
              Los datos personales facilitados a través de este sitio web serán incorporados en el banco de datos de titularidad de BIO AGRO SACH S.A.C., identificada con RUC 20611475366 y con domicilio en Jiron Santiago Antunez de Mayolo 227 La Molina.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">2. Datos Personales Recopilados</h2>
            <p className="text-muted-foreground leading-relaxed">
              Para llevar a cabo las compras y operaciones en nuestra plataforma, recolectamos datos como: Nombres y apellidos, documento de identidad (DNI/CE), dirección de domicilio (para el despacho de productos), número de teléfono y correo electrónico.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">3. Finalidad del Tratamiento</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Tus datos personales serán utilizados estrictamente para las siguientes finalidades necesarias:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed">
              <li>Procesar, validar y gestionar tus órdenes de compra de café y derivados.</li>
              <li>Coordinar y realizar el despacho y entrega de los productos a tu domicilio.</li>
              <li>Emitir los comprobantes de pago electrónicos correspondientes (boletas o facturas).</li>
              <li>Atender tus consultas, quejas o reclamos (a través de nuestro Libro de Reclamaciones).</li>
              <li>De manera opcional y solo si lo autorizas explícitamente, utilizaremos tus datos para enviarte promociones, novedades y ofertas de nuestra tienda.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">4. Seguridad de los Datos de Pago (Culqi)</h2>
            <p className="text-muted-foreground leading-relaxed">
              Te informamos que BIO AGRO SACH S.A.C. no almacena, procesa ni transmite los datos de tus tarjetas de crédito o débito. Todo el proceso de pago se realiza de forma cifrada a través de la pasarela de pagos Culqi, la cual cuenta con la certificación de seguridad PCI-DSS internacional.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">5. Transferencia de Datos a Terceros</h2>
            <p className="text-muted-foreground leading-relaxed">
              Tus datos solo serán transferidos a las empresas de courier o transporte encargadas de llevar el pedido a tu domicilio, compartiendo únicamente la información indispensable para el éxito de la entrega. No vendemos ni cedemos tus datos a terceros bajo ninguna circunstancia.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">6. Derechos ARCO</h2>
            <p className="text-muted-foreground leading-relaxed">
              Como titular de tus datos personales, puedes ejercer en cualquier momento tus derechos de Acceso, Rectificación, Cancelación y Oposición (Derechos ARCO) enviando una solicitud formal a nuestro correo electrónico: <a href="mailto:ceobasach@gmail.com" className="text-foreground underline hover:text-accent transition-colors">ceobasach@gmail.com</a>.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
