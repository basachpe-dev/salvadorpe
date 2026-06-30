import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";
import ProductModal from "@/components/ProductModal";
import coffeeBag1 from "@/assets/Firefly-CS250.png"; // <- imagen para Salvador Original
import coffeeBag2 from "@/assets/Firefly-CS500.png"; // <- imagen para Salvador Premium
import coffeeBag3 from "@/assets/Firefly-CS1000.png"; // <- imagen para Salvador Reserva

const products = [
  {
    name: "Salvador Clasico",
    description: "Nuestro blend clásico con notas de chocolate y caramelo",
    weight: "250gr",
    price: "S/ 31.00",
    image: coffeeBag1, // <- imagen 250
  },
  {
    name: "Salvador Recargado",
    description: "Granos seleccionados con notas frutales y cítricas",
    weight: "500gr",
    price: "S/ 60.00",
    image: coffeeBag2, // <- imagen 500
  },
  {
    name: "Salvador Revolucionario",
    description: "Edición limitada de nuestra mejor cosecha",
    weight: "1kg",
    price: "S/ 110.00",
    image: coffeeBag3, // <- imagen 1000
  },
];

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleAddClick = (product: typeof products[0]) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  return (
    <section id="productos" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <p className="text-primary font-medium text-sm mb-4 tracking-wide uppercase">Nuestro Catálogo</p>
          <h2 className="text-5xl md:text-6xl font-semibold mb-4 tracking-tight">
            Nuestros <span className="text-accent">Cafés</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cada bolsa de Salvador es un viaje sensorial a la ceja de selva peruana
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-500 animate-fade-in overflow-hidden border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className="aspect-square overflow-hidden bg-card">
                  <img
                    src={product.image} // <- ahora usa la imagen de cada producto
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-2xl font-semibold">{product.name}</h3>
                    <span className="text-sm text-primary font-medium bg-primary/10 px-3 py-1 rounded-full">{product.weight}</span>
                  </div>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-semibold text-accent">{product.price}</span>
                    <Button variant="accent" size="sm" className="group/btn" onClick={() => handleAddClick(product)}>
                      <ShoppingCart className="mr-2 h-4 w-4 transition-transform group-hover/btn:scale-110" />
                      Agregar
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <ProductModal open={modalOpen} onOpenChange={setModalOpen} product={selectedProduct} />
    </section>
  );
};

export default Products;