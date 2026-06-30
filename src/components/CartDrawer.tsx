import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2, QrCode, CreditCard, ArrowLeft } from "lucide-react";
import { useCart } from "@/context/CartContext";

type CheckoutStep = "cart" | "datos" | "pago" | "qr" | "confirmado";

const CartDrawer = () => {
  const { items, isCartOpen, setIsCartOpen, removeItem, updateQuantity, totalPrice, clearCart } = useCart();
  const [step, setStep] = useState<CheckoutStep>("cart");
  const [loading, setLoading] = useState(false);

  const [customer, setCustomer] = useState({
    nombre: "",
    telefono: "",
    direccion: "",
    distrito: "",
  });

  const handleClose = (open: boolean) => {
    setIsCartOpen(open);
    if (!open) setStep("cart");
  };

  const handleCustomerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const customerComplete = customer.nombre && customer.telefono && customer.direccion && customer.distrito;

  // Envía el pedido al backend de Salvabot (registro en Sheets + WhatsApp)
  const enviarPedido = async (metodoPago: "QR" | "Culqi") => {
    setLoading(true);
    try {
      const payload = {
        cliente: customer,
        items: items.map((i) => ({
          producto: i.name,
          peso: i.weight,
          molido: i.grind,
          cantidad: i.quantity,
          precio_unitario: i.price,
        })),
        total: totalPrice,
        metodo_pago: metodoPago,
      };

      const res = await fetch("https://salvabot-production.up.railway.app/crear-pedido", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Error al crear el pedido");

      // const data = await res.json();
      // Si es Culqi, data.payment_link tendría la URL para redirigir

      setStep("confirmado");
      clearCart();
    } catch (err) {
      console.error(err);
      alert("Hubo un problema al procesar tu pedido. Por favor intenta nuevamente o escríbenos por WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Sheet open={isCartOpen} onOpenChange={handleClose}>
      <SheetContent className="w-full sm:max-w-md flex flex-col">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            {step !== "cart" && step !== "confirmado" && (
              <button onClick={() => setStep(step === "pago" || step === "qr" ? "datos" : "cart")} className="mr-1">
                <ArrowLeft className="h-5 w-5" />
              </button>
            )}
            {step === "cart" && "Tu Carrito"}
            {step === "datos" && "Datos de Entrega"}
            {step === "pago" && "Método de Pago"}
            {step === "qr" && "Pago Contraentrega"}
            {step === "confirmado" && "¡Pedido Confirmado!"}
          </SheetTitle>
        </SheetHeader>

        {/* PASO 1: Resumen del carrito */}
        {step === "cart" && (
          <div className="flex flex-col flex-1 mt-6 overflow-hidden">
            {items.length === 0 ? (
              <p className="text-muted-foreground text-center mt-12">Tu carrito está vacío</p>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto space-y-4 pr-1">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-3 border-b border-border/50 pb-4">
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
                      <div className="flex-1">
                        <p className="font-medium text-sm">{item.name}</p>
                        <p className="text-xs text-muted-foreground">{item.weight} · {item.grind}</p>
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center gap-2">
                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-6 h-6 rounded-full border border-border flex items-center justify-center">
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="text-sm w-5 text-center">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-6 h-6 rounded-full border border-border flex items-center justify-center">
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>
                          <span className="text-sm font-semibold text-accent">S/ {(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                      </div>
                      <button onClick={() => removeItem(item.id)} className="text-muted-foreground hover:text-destructive transition-colors h-fit">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-border/50 mt-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-muted-foreground">Total</span>
                    <span className="text-xl font-semibold text-accent">S/ {totalPrice.toFixed(2)}</span>
                  </div>
                  <Button variant="accent" className="w-full" onClick={() => setStep("datos")}>
                    Continuar
                  </Button>
                </div>
              </>
            )}
          </div>
        )}

        {/* PASO 2: Datos de entrega */}
        {step === "datos" && (
          <div className="flex flex-col flex-1 mt-6 space-y-4">
            <div>
              <label className="text-sm font-medium mb-1 block">Nombre completo</label>
              <input name="nombre" value={customer.nombre} onChange={handleCustomerChange}
                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block">Teléfono / WhatsApp</label>
              <input name="telefono" value={customer.telefono} onChange={handleCustomerChange} type="tel"
                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block">Dirección</label>
              <input name="direccion" value={customer.direccion} onChange={handleCustomerChange}
                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block">Distrito</label>
              <input name="distrito" value={customer.distrito} onChange={handleCustomerChange}
                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>

            <div className="flex-1" />
            <Button variant="accent" className="w-full" disabled={!customerComplete} onClick={() => setStep("pago")}>
              Continuar al pago
            </Button>
          </div>
        )}

        {/* PASO 3: Elegir método de pago */}
        {step === "pago" && (
          <div className="flex flex-col flex-1 mt-6 space-y-4">
            <div className="flex items-center justify-between p-4 rounded-lg bg-card border border-border/50 mb-2">
              <span className="text-muted-foreground">Total a pagar</span>
              <span className="text-xl font-semibold text-accent">S/ {totalPrice.toFixed(2)}</span>
            </div>

            <button
              onClick={() => setStep("qr")}
              className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-primary transition-colors text-left"
            >
              <QrCode className="h-8 w-8 text-primary" />
              <div>
                <p className="font-medium">Pago Contraentrega (QR)</p>
                <p className="text-sm text-muted-foreground">Yape o Plin al recibir tu pedido</p>
              </div>
            </button>

            <button
              onClick={() => enviarPedido("Culqi")}
              disabled={loading}
              className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-primary transition-colors text-left"
            >
              <CreditCard className="h-8 w-8 text-primary" />
              <div>
                <p className="font-medium">Pagar en línea</p>
                <p className="text-sm text-muted-foreground">Tarjeta, Yape, Google/Apple Pay (Culqi)</p>
              </div>
            </button>

            {loading && <p className="text-sm text-muted-foreground text-center">Procesando...</p>}
          </div>
        )}

        {/* PASO 4: Confirmación QR */}
        {step === "qr" && (
          <div className="flex flex-col flex-1 mt-6 items-center text-center space-y-4">
            <div className="w-48 h-48 bg-muted rounded-xl flex items-center justify-center">
              <p className="text-xs text-muted-foreground px-4">
                [ Coloca aquí la imagen de tu QR de Yape/Plin en src/assets ]
              </p>
            </div>
            <p className="text-muted-foreground text-sm">
              Escanea el código y realiza el pago de <strong className="text-foreground">S/ {totalPrice.toFixed(2)}</strong>. Confirma abajo una vez realizado el pago.
            </p>
            <Button variant="accent" className="w-full" disabled={loading} onClick={() => enviarPedido("QR")}>
              {loading ? "Confirmando..." : "Ya pagué, confirmar pedido"}
            </Button>
          </div>
        )}

        {/* PASO 5: Confirmado */}
        {step === "confirmado" && (
          <div className="flex flex-col flex-1 mt-6 items-center text-center space-y-4 justify-center">
            <div className="text-5xl">✅</div>
            <p className="text-lg font-semibold">¡Gracias por tu pedido!</p>
            <p className="text-muted-foreground text-sm">
              Te contactaremos por WhatsApp al <strong className="text-foreground">{customer.telefono}</strong> para confirmar los detalles de entrega.
            </p>
            <Button variant="outline" className="w-full" onClick={() => handleClose(false)}>
              Cerrar
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
