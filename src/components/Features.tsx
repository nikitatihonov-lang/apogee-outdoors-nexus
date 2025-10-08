import { Check } from "lucide-react";

const features = [
  "Premium materials and construction",
  "Lifetime warranty on select products",
  "Expert guidance and support",
  "Fast, reliable shipping",
  "Competitive pricing",
  "Satisfaction guaranteed",
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-6">
            Why Choose Apogee?
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-12">
            We're committed to providing the best products and service in the industry
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature) => (
              <div key={feature} className="flex items-start gap-4 p-6 rounded-lg bg-muted/30 hover:bg-muted/50 transition-all">
                <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="h-4 w-4 text-accent-foreground" />
                </div>
                <p className="text-lg text-foreground">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
