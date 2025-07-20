import { Card, CardContent } from "@/components/ui/card";
import { Ruler, Coffee, Plane, Mountain } from "lucide-react";

const heightJokes = [
  {
    icon: Ruler,
    joke: "At 5'2\", Esha is perfectly sized for hugs - no neck strain required! 🤗",
    subtitle: "Perfectly Proportioned"
  },
  {
    icon: Mountain,
    joke: "She climbs mountains of success, proving that greatness comes in all sizes! 🏔️",
    subtitle: "Reaching New Heights"
  }
];

const HeightJokesSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-dreamy">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Height Humor 📏
          </h2>
          <p className="text-xl text-muted-foreground">
            Because someone has to remind our birthday girl that great things come in small packages! 😄
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
                Sweet Truth! 🎉
              </h3>
              <p className="text-lg text-primary-foreground/90 leading-relaxed">
                Esha may be 5'2\" in height, but she's infinitely tall in our hearts! ❤️
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HeightJokesSection;