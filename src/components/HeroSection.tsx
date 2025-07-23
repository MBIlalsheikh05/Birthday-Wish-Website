import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles, Heart, Star } from "lucide-react";
import heroImage from "@/assets/birthday-hero.jpg";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-celebration">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Floating decorations */}
      <div className="absolute inset-0">
        <Sparkles className="absolute top-20 left-10 text-birthday-gold animate-sparkle" size={24} />
        <Heart className="absolute top-32 right-20 text-birthday-rose animate-float" size={20} />
        <Star className="absolute bottom-40 left-20 text-birthday-purple animate-bounce-slow" size={18} />
        <Sparkles className="absolute bottom-20 right-10 text-birthday-gold animate-sparkle" size={20} />
        <Heart className="absolute top-1/2 right-1/4 text-birthday-pink animate-float" size={16} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-sparkle bg-clip-text text-transparent animate-bounce-slow">
            Happy Birthday
          </h1>
          <h2 className="text-4xl md:text-6xl font-semibold text-primary mb-8 animate-float">
            Esha Khalid! 🎉
          </h2>
          
          <Card className="bg-card/80 backdrop-blur-sm p-8 shadow-celebration animate-scale-in">
            <p className="text-xl md:text-2xl text-foreground leading-relaxed">
              To the most amazing dreamer, hardworker, and ambitious soul I know! ✨
            </p>
            <p className="text-lg text-muted-foreground mt-4">
              (Permission granted to cause chaos — it’s your day! 🎈😜)
            </p>
          </Card>
        </div>

        <div className="mt-10 animate-fade-in">
          <Button size="lg" className="bg-gradient-celebration text-primary-foreground shadow-glow hover:shadow-celebration transition-all duration-300 transform hover:scale-105">
            Celebrate Esha! 🎂
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;