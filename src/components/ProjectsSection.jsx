import { ArrowRight, ExternalLink, Github, Home, Link } from "lucide-react";
import { IoLogOutOutline } from "react-icons/io5";

const projects = [
  {
    id: 1,
    title: "1 Ton Reactor Plant",
    description: "1-ton polymer binder reactor plant, including reactor with limpet coil, monomer and catalyst vessels, heat exchanger, steam lines, and electrical layout—achieving improved energy efficiency, faster processing, and enhanced operational control.A beautiful landing page app using React and Tailwind.",
    image: "/projects/Plant.png",
    tags: ["React", "TailwindCSS", "Supabase"],
    demoUrl: "project1",
    githubUrl: "#",
  },
  {
    id: 2,
    title: " Powder Packaging Machine",
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
    title: "Powder Coating Plant",
    description: "A complete powder coating plant, including spray booth, curing oven, and air handling systems. The setup was optimized for airflow, energy efficiency, and material utilization—resulting in improved coating quality and production throughput.",
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
