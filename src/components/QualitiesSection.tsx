import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Flame,
  Trophy,
  Handshake,
  HeartHandshake,
  CalendarCheck2,
  Globe
} from "lucide-react";

const qualities = [
  {
    icon: Flame,
    title: "The Go-Getter 🔥",
    description: "She doesn't just dream — she moves with purpose and passion toward her goals. 💪",
    gradient: "bg-gradient-to-br from-pink-400 via-rose-400 to-yellow-300",
    badge: "Focused 🎯"
  },
  {
    icon: Trophy,
    title: "The Sports Soul 🏆",
    description: "A Cristiano Ronaldo fangirl through and through ⚽💥",
    gradient: "bg-gradient-to-br from-fuchsia-400 via-pink-500 to-rose-500",
    badge: "CR7 Vibes ⚡"
  },
  {
    icon: Handshake,
    title: "The Respectful Heart 🤝",
    description: "She carries grace, values everyone’s presence, and treats others with genuine kindness. 🌸",
    gradient: "bg-gradient-to-br from-rose-300 via-pink-400 to-red-300",
    badge: "Kind Spirit 🕊️"
  },
  {
    icon: HeartHandshake,
    title: "The Support System",
    description: "Always there with a smile or a solution — Esha lifts others like it's second nature. 🙌",
    gradient: "bg-gradient-to-br from-pink-300 via-fuchsia-400 to-purple-300",
    badge: "Always There"
  },
  {
    icon: CalendarCheck2,
    title: "The Reminder 📅",
    description: "She never lets me forget quizzes or assignments — always telling me, 'Bilal, do it on time!' ⏰📚",
    gradient: "bg-gradient-to-br from-pink-200 via-rose-300 to-fuchsia-300",
    badge: "Task Queen 👑"
  },
  {
    icon: Globe,
    title: "The Explorer 🌍",
    description: "She dreams in destinations — the world is her bucket list, and she's ready to chase it. ✈️",
    gradient: "bg-gradient-to-br from-pink-300 via-rose-400 to-indigo-300",
    badge: "Wanderlust 🧳"
  }
];

const QualitiesSection = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Things I Know About Her ✨
          </h2>
          <p className="text-xl text-gray-600">
            A soul full of spark, a heart full of purpose — here's to everything I know about her !
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {qualities.map((quality, index) => (
            <Card
              key={index}
              className="group transition-all duration-300 transform hover:scale-105 border-2 border-gray-100 hover:border-pink-300 shadow-sm hover:shadow-pink-100 bg-white"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center">
                <div className={`w-14 h-14 mx-auto rounded-full ${quality.gradient} flex items-center justify-center mb-4 group-hover:animate-float`}>
                  <quality.icon className="h-6 w-6 text-white text-opacity-90" />
                </div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <CardTitle className="text-xl text-gray-800">{quality.title}</CardTitle>
                  <Badge variant="secondary" className="bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white shadow">
                    {quality.badge}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center leading-relaxed">
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
