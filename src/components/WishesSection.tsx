import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gift, PartyPopper, Cake, Sparkles } from "lucide-react";

const wishes = [
  "May your dreams shine as bright as your beautiful smile! 🌟",
  "Here's to another year of incredible adventures and achievements! 📈",
  "Wishing you endless happiness and amazing memories! 🎊",
  "May this year bring you everything that makes your heart happy! 💖",
  "Here's to celebrating the wonderful person you are! 🎂",
  "May your year ahead be filled with love, laughter, and success! ✨"
];

const WishesSection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Birthday Wishes 🎂
          </h2>
          <p className="text-xl text-muted-foreground">
            Special wishes for our special birthday girl!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {wishes.map((wish, index) => (
            <Card 
              key={index}
              className="group hover:shadow-celebration transition-all duration-300 animate-fade-in border-2 border-border/50 hover:border-birthday-pink/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-celebration rounded-full flex items-center justify-center flex-shrink-0 group-hover:animate-sparkle">
                    <Gift className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <p className="text-foreground leading-relaxed">{wish}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Birthday Message */}
        <Card className="bg-gradient-celebration shadow-glow animate-bounce-slow">
          <CardContent className="p-12 text-center">
            <div className="flex justify-center gap-4 mb-6">
              <PartyPopper className="h-8 w-8 text-primary-foreground animate-float" />
              <Cake className="h-8 w-8 text-primary-foreground animate-bounce-slow" />
              <Sparkles className="h-8 w-8 text-primary-foreground animate-sparkle" />
            </div>
            
            <h3 className="text-3xl font-bold text-primary-foreground mb-6">
              Happy Birthday, Esha! 🎉
            </h3>
            
            <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8">
              Today we celebrate the amazing person you are! Your kindness lights up every room, 
              your dreams inspire us all, and your spirit makes the world brighter. 
              Here's to another year of adventures, achievements, and beautiful memories! ✨🎈
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default WishesSection;