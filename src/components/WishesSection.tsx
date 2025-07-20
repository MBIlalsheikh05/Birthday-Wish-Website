import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gift, PartyPopper, Cake, Sparkles } from "lucide-react";

const wishes = [
  "May your dreams grow as tall as you wish you were! 🌟",
  "Here's to another year of reaching new heights (literally and figuratively)! 📈",
  "May you always find step stools when you need them most! 🪜",
  "Wishing you success that's bigger than your height difference with supermodels! 💃",
  "May your birthday cake be taller than you! (Okay, maybe not THAT tall...) 🎂",
  "Here's to a year filled with dreams that require no height requirements! ✨"
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
              You're proof that amazing things come in perfectly sized packages! 
              Here's to celebrating another year of your incredible journey. 
              May this new year bring you everything your heart desires... 
              and maybe a few step stools too! 😄💕
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                Make a Wish! 🌟
              </Button>
              <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                Blow Out Candles! 🕯️
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default WishesSection;