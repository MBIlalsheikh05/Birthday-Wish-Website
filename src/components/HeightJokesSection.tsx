import { Card, CardContent } from "@/components/ui/card";
import { Ruler, Coffee, Plane, Mountain } from "lucide-react";

const heightJokes = [
  {
    icon: Ruler,
    joke: "Esha may be 5'2, but her confidence adds an extra 10 inches! 😎",
    subtitle: "Measuring Confidence"
  },
  {
    icon: Mountain,
    joke: "She climbs mountains of success, proving that greatness comes in all sizes! ",
    subtitle: "Reaching New Heights"
  }
];

const HeightJokesSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-dreamy">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Let's Talk About her Height 📏
          </h2>
           <p className="text-xl text-muted-foreground">
             Shining the spotlight on Esha — because amazing deserves to be celebrated! 😄
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {heightJokes.map((item, index) => (
            <Card 
              key={index}
              className="group hover:shadow-glow transition-all duration-300 transform hover:scale-105 animate-fade-in bg-card/80 backdrop-blur-sm border-2 border-birthday-pink/20 hover:border-birthday-purple/40"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-celebration rounded-full flex items-center justify-center group-hover:animate-bounce-slow">
                  <item.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-sm font-semibold text-birthday-purple mb-3 uppercase tracking-wide">
                  {item.subtitle}
                </h3>
                <p className="text-lg text-foreground leading-relaxed font-medium">
                  {item.joke}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Card className="bg-gradient-sparkle p-8 shadow-celebration">
            <CardContent>
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                Truth! 🎉
              </h3>
              <p className="text-lg text-primary-foreground/90 leading-relaxed">
                She says she’s the Don… and honestly, I don’t argue with 5'2 of unstoppable energy. 🎉😅
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HeightJokesSection;