import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Gear Up?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Contact us today to find the perfect equipment for your next outdoor adventure
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg">
              <Mail className="mr-2 h-5 w-5" />
              Email Us
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground text-primary-foreground hover:bg-primary-foreground/20"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
