import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-2">
            Términos y Condiciones
          </h1>
          <p className="text-muted-foreground mb-12">
            Última actualización: 2025
          </p>

          <section className="mb-10">
            <p className="text-muted-foreground leading-relaxed">
              Bienvenido al sitio web de BIO AGRO SACH S.A.C. Al acceder y utilizar este sitio web, así como al comprar nuestros productos (café en grano, café molido y derivados), usted acepta cumplir y estar sujeto a los siguientes Términos y Condiciones. Si no está de acuerdo con alguna parte de estos términos, le solicitamos que no utilice nuestro sitio web.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">1. Información General</h2>
            <p className="text-muted-foreground leading-relaxed">
              El presente sitio web es operado por BIO AGRO SACH S.A.C., empresa constituida en la República del Perú, identificada con RUC 20611475366 y con domicilio legal en Jiron Santiago Antunez de Mayolo 227 La Molina.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">2. Productos y Precios</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <div>
                <h3 className="font-medium text-foreground mb-1">Características</h3>
                <p>Tratamos de mostrar con la mayor precisión posible las características, origen y notas de cata de nuestro café. Sin embargo, las imágenes son referenciales.</p>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-1">Precios</h3>
                <p>Todos los precios de los productos en la tienda virtual están expresados en Soles (S/) e incluyen el Impuesto General a las Ventas (IGV), a menos que se indique lo contrario. Los costos de envío se calculan de forma separada y se muestran antes de finalizar la compra.</p>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-1">Disponibilidad</h3>
                <p>El stock de los productos está sujeto a disponibilidad. En caso de que un producto no se encuentre disponible después de realizar la compra, nos comunicaremos con usted para ofrecerle un cambio o la devolución de su dinero.</p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">3. Proceso de Pago</h2>
            <p className="text-muted-foreground leading-relaxed">
              Los pagos dentro del sitio web se procesan de forma segura a través de la pasarela de pagos Culqi. Aceptamos tarjetas de crédito y débito (Visa, Mastercard, Amex, Diners), así como billeteras digitales y otros métodos autorizados por la pasarela. BIO AGRO SACH S.A.C. no almacena ni tiene acceso a los datos de sus tarjetas bancarias.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">4. Despacho y Envío de Productos</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <div>
                <h3 className="font-medium text-foreground mb-1">Zonas de cobertura</h3>
                <p>Realizamos envíos a Lima Metropolitana y Regiones.</p>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-1">Plazos de entrega</h3>
                <p>Los pedidos serán procesados y enviados en un plazo estimado de 24 a 48 horas útiles para Lima y 3 a 5 días hábiles para provincias, contados a partir de la confirmación del pago.</p>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-1">Responsabilidad</h3>
                <p>Es responsabilidad del cliente brindar una dirección exacta y asegurar que haya alguien para recibir el pedido.</p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">5. Políticas de Cambios y Devoluciones</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Al tratarse de productos alimenticios e insumos perecibles (café), solo se aceptarán cambios o devoluciones bajo las siguientes condiciones:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed">
              <li>El producto presenta un defecto de empaque de fábrica o llegó dañado por el transporte.</li>
              <li>El producto entregado no corresponde al solicitado en la orden de compra.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              El cliente deberá notificar el inconveniente en un plazo máximo de 48 horas tras recibir el pedido, adjuntando fotos del estado del producto al correo de contacto.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">6. Libro de Reclamaciones</h2>
            <p className="text-muted-foreground leading-relaxed">
              Conforme a lo establecido por el Código de Protección y Defensa del Consumidor del Perú, ponemos a disposición de nuestros clientes un Libro de Reclamaciones Virtual de acceso permanente en el pie de página de este sitio web. Las quejas o reclamos serán atendidos en un plazo máximo de quince (15) días hábiles.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">7. Jurisdicción y Ley Aplicable</h2>
            <p className="text-muted-foreground leading-relaxed">
              Estos Términos y Condiciones se rigen por las leyes de la República del Perú. Cualquier controversia derivada del uso de este sitio web o de la compra de productos se someterá a la jurisdicción de los jueces y tribunales de la ciudad de Lima, Perú.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
