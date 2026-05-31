"use client";

import ShaderHero from "@/components/ui/animated-shader-hero";

// Demo Component showing how to use the ShaderHero
const HeroDemo: React.FC = () => {
  const handlePrimaryClick = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSecondaryClick = () => {
    window.open("/resume.pdf", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="w-full">
      <ShaderHero
        trustBadge={{
          text: "Frontend Web Developer",
          icons: ["⚡"],
        }}
        headline={{
          line1: "Khun Ye Aung",
          line2: "Crafting Digital Experiences",
        }}
        subtitle="Passionate about building intuitive, responsive interfaces with React, Next.js, and modern web technologies."
        buttons={{
          primary: {
            text: "View Projects",
            onClick: handlePrimaryClick,
          },
          secondary: {
            text: "View Resume",
            onClick: handleSecondaryClick,
          },
        }}
      />

      {/* Additional content below hero */}
      <div className="bg-gray-100 p-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            How to Use the ShaderHero Component
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <pre className="text-sm text-gray-600 overflow-x-auto">
{`<ShaderHero
  trustBadge={{
    text: "Your badge text",
    icons: ["🚀", "⭐", "✨"]
  }}
  headline={{
    line1: "Your First Line",
    line2: "Your Second Line"
  }}
  subtitle="Your compelling subtitle text goes here..."
  buttons={{
    primary: {
      text: "Primary CTA",
      onClick: handlePrimaryClick
    },
    secondary: {
      text: "Secondary CTA",
      onClick: handleSecondaryClick
    }
  }}
  className="custom-classes" // optional
/>`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroDemo;
