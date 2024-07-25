import { Button } from "@/components/ui/button";
import { Rocket, Star, Globe } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Index = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes move {
        0% {
          transform: translate(-50%, -50%) scale(0);
          opacity: 0;
        }
        50% {
          opacity: 1;
        }
        100% {
          transform: translate(-50%, -50%) scale(3);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);

    const newStars = Array.from({ length: 200 }, () => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animationDuration: `${Math.random() * 3 + 2}s`,
      animationDelay: `${Math.random() * 3}s`,
    }));
    setStars(newStars);

    return () => document.head.removeChild(style);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-blue-900 text-white relative overflow-hidden">
      <div className="star-field absolute inset-0">
        {stars.map((star, i) => (
          <div
            key={i}
            className="star absolute rounded-full bg-white"
            style={{
              top: star.top,
              left: star.left,
              width: '2px',
              height: '2px',
              animation: `move ${star.animationDuration} infinite ${star.animationDelay}`,
            }}
          />
        ))}
      </div>
      <header className="container mx-auto py-16 text-center relative z-10">
        <h1 className="text-5xl font-bold mb-4">Explore the Cosmos</h1>
        <p className="text-xl mb-8">Embark on a journey through the wonders of space</p>
        <Dialog>
          <DialogTrigger asChild>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Start Your Adventure
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Embark on Your Space Journey</DialogTitle>
              <DialogDescription>
                Discover the wonders of the cosmos and join our community of space enthusiasts.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <p>Here's what you can expect on your journey:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Learn about the latest space missions</li>
                <li>Explore interactive star maps</li>
                <li>Join discussions with fellow space enthusiasts</li>
                <li>Get updates on astronomical events</li>
              </ul>
              <p>Are you ready to explore the final frontier?</p>
            </div>
            <Button className="w-full">Sign Up for Updates</Button>
          </DialogContent>
        </Dialog>
      </header>

      <main className="container mx-auto py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Rocket className="h-12 w-12 mb-4" />}
            title="Space Exploration"
            description="Discover the latest missions and technologies pushing the boundaries of human space exploration."
          />
          <FeatureCard
            icon={<Star className="h-12 w-12 mb-4" />}
            title="Stellar Phenomena"
            description="Learn about fascinating cosmic events, from supernovas to black holes and beyond."
          />
          <FeatureCard
            icon={<Globe className="h-12 w-12 mb-4" />}
            title="Earth and Beyond"
            description="Discover our home planet's place in the cosmos and explore the worlds beyond our solar system."
          />
        </div>
      </main>

      <footer className="container mx-auto py-8 text-center relative z-10">
        <p>&copy; 2024 Space Exploration Initiative. All rights reserved.</p>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-blue-800 p-6 rounded-lg text-center">
    {icon}
    <h2 className="text-2xl font-semibold mb-2">{title}</h2>
    <p>{description}</p>
  </div>
);

export default Index;
