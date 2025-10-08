import { Target, Shield, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">About Apogee Inc.</h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Apogee Inc. is the trusted choice for hunting and outdoor enthusiasts. 
            Built by experienced industry professionals, we specialize in producing, distributing, and selling premium equipment that enhances every outdoor experience.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Precision Quality</h3>
              <p className="text-muted-foreground">
                Every product meets the highest standards of craftsmanship
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Trusted Reliability</h3>
              <p className="text-muted-foreground">
                Built to withstand the toughest conditions
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Expert Service</h3>
              <p className="text-muted-foreground">
                Dedicated support from outdoor enthusiasts who understand your needs
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
