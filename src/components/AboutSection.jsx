import { Briefcase, Code, User } from "lucide-react";
import { saveAs } from "file-saver";

export const AboutSection = () => {

 const handleDownload = () => {

    const FileURL = "https://www.canva.com/design/DAGqTVsPD5I/0YzSsS9BBgr59V5-TdTIGA/edit?utm_content=DAGqTVsPD5I&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
    const fileName = FileURL.split("/").pop();
    saveAs(FileURL, fileName);

  }

  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Mechanical Engineer - Industrial Automation Enthusiast
            </h3>

            <p className="text-muted-foreground">
              Highly motivated Mechanical Engineer with expertise in industrial automation, preventive maintenance, mechanical troubleshooting,
              and equipment reliability for critical plant systems, seeking to leverage skills to revolutionize the industry and improve working
              environments.

            </p>

            <p className="text-muted-foreground">
              I'm passionate about designing smart, reliable mechanical systems
              and developing innovative automation solutions that keep factories
              running efficiently. I’m always learning new technologies in machine
              development, robotics, and maintenance strategies to stay ahead in
              the rapidly evolving world of industrial engineering.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                onClick={() => handleDownload()}
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Machine Design</h4>
                  <p className="text-muted-foreground">
                    Skilled in machine design using advanced CAD tools, with experience in creating
                    precise 2D and 3D models for custom industrial equipment. Proficient in conducting
                    FEA simulations to validate mechanical strength, optimize component performance, and
                    ensure design reliability under real-world conditions.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Automation</h4>
                  <p className="text-muted-foreground">
                    Experienced in industrial automation, with hands-on expertise in PLC programming,
                    control system simulation, and the development of IoT-based monitoring solutions.
                    Skilled in integrating automation with real-time data visualization to improve process
                    control, efficiency, and system reliability.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    Experienced in managing engineering projects from concept to commissioning, including equipment
                    installation, team coordination, and timeline tracking. Skilled in resource planning, cross-functional
                    collaboration, and ensuring deliverables align with safety, quality,
                    and performance standards—driving projects to successful completion within budget and schedule.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
