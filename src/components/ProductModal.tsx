import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import { useCart, GrindType } from "@/context/CartContext";

interface ProductModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  product: {
    name: string;
    description: string;
    weight: string;
    price: string; // "S/ 31.00"
    image: string;
  } | null;
}

const grindOptions: GrindType[] = ["Grano entero", "Molido fino", "Molido medio", "Molido grueso"];

const ProductModal = ({ open, onOpenChange, product }: ProductModalProps) => {
  const { addItem } = useCart();
  const [grind, setGrind] = useState<GrindType>("Grano entero");
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const numericPrice = parseFloat(product.price.replace("S/", "").trim());

  const handleAdd = () => {
    addItem({
      name: product.name,
      weight: product.weight,
      price: numericPrice,
      grind,
      quantity,
      image: product.image,
    });
    setQuantity(1);
    setGrind("Grano entero");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold">{product.name}</DialogTitle>
        </DialogHeader>

        <div className="flex gap-4 items-center mb-2">
          <img src={product.image} alt={product.name} className="w-20 h-20 object-cover rounded-lg" />
          <div>
            <p className="text-sm text-muted-foreground">{product.description}</p>
            <p className="text-sm font-medium text-primary mt-1">{product.weight} · {product.price}</p>
          </div>
        </div>

        {/* Tipo de molido */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Tipo de molido</label>
          <div className="grid grid-cols-2 gap-2">
            {grindOptions.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setGrind(option)}
                className={`text-sm py-2 px-3 rounded-lg border transition-colors ${
                  grind === option
                    ? "border-primary bg-primary/10 text-primary font-medium"
                    : "border-border text-muted-foreground hover:border-primary/50"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Cantidad */}
        <div className="space-y-2 mt-4">
          <label className="text-sm font-medium">Cantidad</label>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="text-lg font-medium w-8 text-center">{quantity}</span>
            <button
              type="button"
              onClick={() => setQuantity((q) => q + 1)}
              className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Subtotal y botón */}
        <div className="flex items-center justify-between pt-4 mt-2 border-t border-border/50">
          <span className="text-muted-foreground">Subtotal</span>
          <span className="text-xl font-semibold text-accent">
            S/ {(numericPrice * quantity).toFixed(2)}
          </span>
        </div>

        <Button variant="accent" className="w-full mt-2" onClick={handleAdd}>
          Agregar al carrito
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;
