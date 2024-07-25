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

      <section className="container mx-auto py-16 relative z-10">
        <h2 className="text-4xl font-bold mb-8 text-center">Fascinating Space Facts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <SpaceFact
            number="1969"
            description="Year humans first walked on the Moon"
          />
          <SpaceFact
            number="299,792,458"
            description="Speed of light in meters per second"
          />
          <SpaceFact
            number="~100 billion"
            description="Estimated number of galaxies in the observable universe"
          />
          <SpaceFact
            number="8"
            description="Number of planets in our solar system"
          />
          <SpaceFact
            number="13.8 billion"
            description="Approximate age of the universe in years"
          />
          <SpaceFact
            number="1.3 million"
            description="Number of Earths that could fit inside the Sun"
          />
          <SpaceFact
            number="-270.45°C"
            description="Temperature of empty space"
          />
          <SpaceFact
            number="5,000"
            description="Approximate number of exoplanets discovered as of 2023"
          />
          <SpaceFact
            number="1,000 km/h"
            description="Speed at which the Earth rotates at the equator"
          />
          <SpaceFact
            number="408 km"
            description="Average distance of the International Space Station from Earth"
          />
          <SpaceFact
            number="165 years"
            description="Time it would take to drive to the Sun at highway speed"
          />
          <SpaceFact
            number="1.3 billion"
            description="Volume of Earth that could fit inside Jupiter"
          />
        </div>
      </section>

      <section className="container mx-auto py-16 relative z-10">
        <h2 className="text-4xl font-bold mb-8 text-center">Space Mission Timeline</h2>
        <div className="overflow-x-auto">
          <div className="flex space-x-8 pb-4" style={{ width: "max-content" }}>
            <TimelineEvent
              year="1957"
              title="Sputnik 1"
              description="First artificial satellite in orbit"
            />
            <TimelineEvent
              year="1961"
              title="Vostok 1"
              description="First human in space (Yuri Gagarin)"
            />
            <TimelineEvent
              year="1969"
              title="Apollo 11"
              description="First humans on the Moon"
            />
            <TimelineEvent
              year="1990"
              title="Hubble Space Telescope"
              description="Launch of the iconic space telescope"
            />
            <TimelineEvent
              year="1998"
              title="International Space Station"
              description="Beginning of ISS assembly in orbit"
            />
            <TimelineEvent
              year="2012"
              title="Curiosity Rover"
              description="Mars Science Laboratory lands on Mars"
            />
            <TimelineEvent
              year="2015"
              title="New Horizons"
              description="First flyby of Pluto"
            />
            <TimelineEvent
              year="2022"
              title="James Webb Space Telescope"
              description="Most powerful space telescope begins operations"
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto py-16 relative z-10">
        <h2 className="text-4xl font-bold mb-8 text-center">Future Space Events and Predictions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <EventCard
            date="2024 Q4"
            title="Artemis II Mission"
            description="NASA's first crewed mission to orbit the Moon since Apollo, part of the Artemis program."
          />
          <EventCard
            date="2025"
            title="JUICE Mission Arrival"
            description="ESA's Jupiter Icy Moons Explorer will arrive at Jupiter to study its moons."
          />
          <EventCard
            date="2026"
            title="ExoMars Rover Launch"
            description="ESA and Roscosmos plan to launch the Rosalind Franklin rover to Mars."
          />
          <EventCard
            date="2027"
            title="VERITAS Mission to Venus"
            description="NASA's mission to map Venus's surface and study its geological history."
          />
          <EventCard
            date="April 13, 2029"
            title="Apophis Close Approach"
            description="The near-Earth asteroid Apophis will pass extremely close to Earth, visible to the naked eye."
          />
          <EventCard
            date="2030"
            title="Mars Sample Return"
            description="NASA and ESA plan to return samples collected by the Perseverance rover from Mars to Earth."
          />
          <EventCard
            date="2034"
            title="Europa Clipper Arrival"
            description="NASA's mission to study Jupiter's moon Europa and its potential for hosting life arrives at its destination."
          />
          <EventCard
            date="2040s"
            title="Potential Crewed Mars Mission"
            description="Various space agencies and private companies aim to send humans to Mars in this decade."
          />
          <EventCard
            date="2050s"
            title="Lunar Base Establishment"
            description="Permanent human presence on the Moon could be established, serving as a stepping stone for deep space exploration."
          />
          <EventCard
            date="2060s"
            title="First Asteroid Mining Operations"
            description="Commercial exploitation of asteroid resources might begin, potentially revolutionizing space industry."
          />
          <EventCard
            date="2070s"
            title="Europa Subsurface Exploration"
            description="Missions to explore the subsurface ocean of Jupiter's moon Europa could search for extraterrestrial life."
          />
          <EventCard
            date="2080s"
            title="Venus Terraforming Initiatives"
            description="Early attempts at terraforming Venus might begin, aiming to make its atmosphere more Earth-like."
          />
          <EventCard
            date="2090s"
            title="Interstellar Probe Launch"
            description="Advanced propulsion technologies might enable the launch of the first true interstellar space probe."
          />
          <EventCard
            date="22nd Century"
            title="Potential Exoplanet Colonization"
            description="Humans might attempt to establish presence on potentially habitable exoplanets discovered in nearby star systems."
          />
          <EventCard
            date="23rd Century"
            title="Dyson Sphere Construction"
            description="Theoretical megastructure to capture a star's energy might begin construction, if technologically feasible."
          />
          <EventCard
            date="Far Future"
            title="Galactic Colonization"
            description="Speculative era where humanity might spread across the Milky Way galaxy, if faster-than-light travel becomes possible."
          />
        </div>
      </section>

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

const SpaceFact = ({ number, description }) => (
  <div className="bg-blue-800 p-6 rounded-lg text-center">
    <p className="text-4xl font-bold mb-2">{number}</p>
    <p className="text-sm">{description}</p>
  </div>
);

const TimelineEvent = ({ year, title, description }) => (
  <div className="flex flex-col items-center w-64">
    <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mb-2">
      {year}
    </div>
    <h3 className="text-xl font-semibold mb-1">{title}</h3>
    <p className="text-sm text-center">{description}</p>
  </div>
);

const EventCard = ({ date, title, description }) => (
  <div className="bg-blue-800 p-6 rounded-lg">
    <p className="text-sm font-semibold text-blue-300 mb-2">{date}</p>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-sm">{description}</p>
  </div>
);

export default Index;
