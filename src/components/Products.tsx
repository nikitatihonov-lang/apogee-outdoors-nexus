import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import binocularsIcon from "@/assets/binoculars-icon.png";
import safeIcon from "@/assets/safe-icon.png";
import gearIcon from "@/assets/gear-icon.png";

const products = [
  {
    title: "Optics & Binoculars",
    description: "Premium binoculars and spotting scopes for bird watching and hunting",
    icon: binocularsIcon,
  },
  {
    title: "Gun Safes",
    description: "Secure, reliable storage solutions to protect your firearms",
    icon: safeIcon,
  },
  {
    title: "Outdoor Gear",
    description: "Complete line of hunting and camping equipment for every adventure",
    icon: gearIcon,
  },
];

const Products = () => {
  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Products</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Quality equipment for hunting and outdoor enthusiasts
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.title} className="hover:shadow-xl transition-all hover-scale cursor-pointer border-2">
              <CardHeader className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                  <img 
                    src={product.icon} 
                    alt={product.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <CardTitle className="text-2xl text-primary">{product.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  {product.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
