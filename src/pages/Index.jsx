import { Button } from "@/components/ui/button";
import { Rocket, Star, Planet } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-blue-900 text-white">
      <header className="container mx-auto py-16 text-center">
        <h1 className="text-5xl font-bold mb-4">Explore the Cosmos</h1>
        <p className="text-xl mb-8">Embark on a journey through the wonders of space</p>
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
          Start Your Adventure
        </Button>
      </header>

      <main className="container mx-auto py-16">
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
            icon={<Planet className="h-12 w-12 mb-4" />}
            title="Exoplanets"
            description="Explore the diversity of worlds beyond our solar system and the search for habitable planets."
          />
        </div>
      </main>

      <footer className="container mx-auto py-8 text-center">
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
