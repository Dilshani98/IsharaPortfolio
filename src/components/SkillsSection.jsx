import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // CAD Modeling
  { name: "SolidWorks", level: 90, category: "CAD Modeling" },
  { name: "AutoCAD", level: 75, category: "CAD Modeling" },
  { name: "SolidEdge", level: 70, category: "CAD Modeling" },

  // PLC
  { name: "Siemens", level: 80, category: "PLC Programming" },
  { name: "Delta", level: 75, category: "PLC Programming" },
  { name: "Allen-Bradley", level: 70, category: "PLC Programming" },
  { name: "Mitsubishi", level: 65, category: "PLC Programming" },
  { name: "HMI", level: 65, category: "PLC Programming" },

  // Project management
  { name: "MS Project", level: 90, category: "Project Management" },
  { name: "Primavera P6", level: 70, category: "Project Management" },
  { name: "BOM", level: 85, category: "Project Management" },
  { name: "SIX Sigma", level: 85, category: "Project Management" },
  { name: "LEAN", level: 95, category: "Project Management" },

  // Simulation
  { name: "Ansys", level: 90, category: "Simulation" },
  { name: "ASPEN Pro", level: 70, category: "Simulation" },
  { name: "Factory I/O", level: 85, category: "Simulation" },
  { name: "Simulink", level: 85, category: "Simulation" },
  { name: "AutoPipe", level: 95, category: "Simulation" },

  //hands on manufacturing
  { name: "ARC/TIG Welding", level: 90, category: "Hands-on Manufacturing" },
  { name: "Lathe Machining", level: 70, category: "Hands-on Manufacturing" },
  { name: "Sheet Metal Fabrication", level: 85, category: "Hands-on Manufacturing" },
]

const categories = ["CAD Modeling", "PLC Programming", "Project Management", "Simulation", "Hands-on Manufacturing", "all"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-white text-black hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-center">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
