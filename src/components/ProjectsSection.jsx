import { ArrowRight, ExternalLink, Github, Home, Link } from "lucide-react";
import { IoLogOutOutline } from "react-icons/io5";

const projects = [
  {
    id: 1,
    title: "1 Ton Reactor Plant.",
    description: "1-ton polymer binder reactor plant, including reactor with limpet coil, monomer and catalyst vessels, heat exchanger, steam lines, and electrical layout—achieving improved energy efficiency, faster processing, and enhanced operational control.",
    image: "/projects/Plant.png",
    tags: ["React", "TailwindCSS", "Supabase"],
    demoUrl: "project1",
    githubUrl: "#",
  },
  {
    id: 2,
    title: " Powder Packaging Machine (Screw Conveyor)",
    description:
      "A semi-automatic powder packaging machine with a screw conveyor, PLC control system, and conveyor belt—enhancing packaging efficiency and reducing manual labor by 50%.",
    image: "/projects/blank.png",
    tags: ["TypeScript", "D3.js", "Next.js"],
    demoUrl: "project2",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Binder Strainer System",
    description:
      "A high-efficiency binder strainer system to filter out impurities and improve material flow—reducing clogging, minimizing manual intervention, and enhancing overall process reliability and energy efficiency.",
    image: "/projects/blank.png",
    tags: ["React", "Node.js", "Stripe"],
    demoUrl: "project3",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Wastewater Treatment Plant",
    description: "Designed and commissioned a wastewater treatment plant for the factory, including primary, biological, and tertiary treatment stages. The system ensures efficient effluent treatment and full compliance with environmental regulations.",
    image: "/projects/blank.png",
    tags: ["React", "Node.js", "Stripe"],
    demoUrl: "project4",
    githubUrl: "#",
  },
  {
    id: 5,
    title: " Powder Coating Plant",
    description:
      "Designed and commissioned a powder coating plant to provide durable, high-quality surface finishing for manufactured components. The plant includes preparation, spraying booths, curing ovens, and material handling systems, ensuring efficient workflow and consistent coating quality.",
    image: "/projects/blank.png",
    tags: ["TypeScript", "D3.js", "Next.js"],
    demoUrl: "project1 copy",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "IOT Based Machine Monitoring System",
    description:
      "Implemented an IoT-based system to monitor real-time performance of sheet metal cutting machines. The system tracks parameters such as run time, downtime, production count, and energy consumption, enabling data-driven maintenance, efficiency optimization, and remote monitoring through a web dashboard.",
    image: "/projects/blank.png",
    tags: ["React", "Node.js", "Stripe"],
    demoUrl: "project3",
    githubUrl: "#",
  },
  {
    id: 7,
    title: "Sheet Metal Cutting Table",
    description: "Designed and implemented a precision sheet metal cutting table that optimized raw material utilization, significantly reducing off-cuts and process waste. The solution improved production efficiency and led to annual cost savings exceeding ₹5 million through reduced material loss and better inventory control.",
    image: "/projects/blank.png",
    tags: ["React", "Node.js", "Stripe"],
    demoUrl: "project4",
    githubUrl: "#",
  },
  {
    id: 8,
    title: "Automated Guided Vehicle (AGV) System",
    description: "An Autonomous Guided Vehicle (AGV) has been developed to support SriLankan Airlines in transporting tools across airport facilities. Equipped with a LiDAR-based navigation and mapping system, the AGV can autonomously travel up to 1 km while carrying loads of up to 100 kg. It features real-time video output for monitoring and processes environmental data to ensure precise navigation and obstacle avoidance.",
    image: "/projects/blank.png",
    tags: ["React", "Node.js", "Stripe"],
    demoUrl: "projectAGV",
    githubUrl: "#",
  },
  {
    id: 9,
    title: "Delta robot",
    description: "Designed and implemented a precision sheet metal cutting table that optimized raw material utilization, significantly reducing off-cuts and process waste. The solution improved production efficiency and led to annual cost savings exceeding ₹5 million through reduced material loss and better inventory control.",
    image: "/projects/blank.png",
    tags: ["React", "Node.js", "Stripe"],
    demoUrl: "project4",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent engineering projects. Each one was crafted with precision, innovation, and a strong focus on reliability and performance
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                {/* <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div> */}

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <IoLogOutOutline size={30}/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/machadop1407"
          >
            Check My Projects <ArrowRight size={16} />
          </a>
        </div> */}
      </div>
    </section>
  );
};
