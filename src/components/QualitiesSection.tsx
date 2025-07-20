import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, Target, Sparkles, Brain, Zap } from "lucide-react";

const qualities = [
  {
    icon: Brain,
    title: "The Dreamer",
    description: "Your dreams are valid, your passion is rare, and your journey is just getting started. I'm cheering for you always.",
    gradient: "bg-gradient-dreamy",
    badge: "Visionary"
  },
  {
    icon: Zap,
    title: "The Hardworker",
    description: "Small in stature, HUGE in determination! She proves that good things come in compact packages.",
    gradient: "bg-gradient-celebration",
    badge: "Unstoppable"
  },
  {
    icon: Heart,
    title: "The Passionate",
    description: "Her passion burns brighter than her birthday candles! Every project gets 110% of her heart.",
    gradient: "bg-gradient-sparkle",
    badge: "Fierce"
  },
  {
    icon: Star,
    title: "The Kind Soul",
    description: "At 5'2\", she might need a step stool sometimes, but her kindness reaches everyone's heart! 💕",
    gradient: "bg-gradient-dreamy",
    badge: "Angel"
  },
  {
    icon: Target,
    title: "The Ambitious",
    description: "Setting goals higher than she can reach without tippy-toes! But somehow she always gets there! 🎯",
    gradient: "bg-gradient-celebration",
    badge: "Goal-Getter"
  },
  {
    icon: Sparkles,
    title: "The Friend",
    description: "Tiny but mighty, sweet but sassy. The perfect friend-sized package of awesomeness!",
    gradient: "bg-gradient-sparkle",
    badge: "Treasure"
  }
];

const QualitiesSection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Makes Esha Special
          </h2>
          <p className="text-xl text-muted-foreground">
            Here's what makes our birthday girl so special! ✨
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {qualities.map((quality, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-celebration transition-all duration-300 transform hover:scale-105 animate-fade-in border-2 border-border/50 hover:border-primary/30"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center">
                <div className={`w-16 h-16 mx-auto rounded-full ${quality.gradient} flex items-center justify-center mb-4 group-hover:animate-float`}>
                  <quality.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <CardTitle className="text-xl text-foreground">{quality.title}</CardTitle>
                  <Badge variant="secondary" className="bg-gradient-celebration text-primary-foreground">
                    {quality.badge}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {quality.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualitiesSection;