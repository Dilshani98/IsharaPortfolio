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

            <p className="text-muted-foreground">


              I hold a B.Sc. Degree in Mechanical Engineering from the University of Moratuwa, specializing in the Mechatronics Engineering stream. 
              This academic foundation has equipped me with a balanced skill set across mechanical systems, electronics, control, and automation technologies.
              </p>
            <p className="text-muted-foreground">    

My core strength lies in machine design, supported by strong command of CAD tools such as SolidWorks and AutoCAD, and FEA simulation using ANSYS. I 
am also experienced in Aspen Plus/PRO for process modeling and AutoPIPE for piping stress analysis—enabling me to design, simulate, and optimize mechanical
systems from concept to execution.
</p>

            <p className="text-muted-foreground">

  

In the field of industrial automation, I have developed and programmed PLCs using platforms including Allen-Bradley, Siemens, Delta, and Mitsubishi, 
with practical integration using Factory I/O simulation. I am skilled in control panel design, electrical wiring simulation, and electrical panel layout—bridging mechanical and electrical domains. My work also involves IoT systems, combining sensors and controllers for smart monitoring and control.

</p>
My specialization in mechatronics has expanded into robotics and embedded systems, where I’ve built and programmed Arduino-based systems and 
 logic in Python and C++ (OOP). These skills support my ability to create intelligent, real-world automation solutions that blend mechanical and 
 software domains.
            <p className="text-muted-foreground">

On the workshop and production side, I bring practical experience in sheet metal fabrication, welding, lathe operations, and CNC programming—skills 
that allow me to transition smoothly from digital models to physical prototypes and production. I also have direct experience maintaining industrial systems 
such as steam boilers, air compressors, reactor vessels, agitators, and pump systems.

Additionally, I bring strong project management skills with proficiency in Primavera P6, and a working knowledge of Lean Manufacturing and Six Sigma
 (Yellow Belt certified) principles. I am well-versed in preparing P&ID diagrams and technical documentation using the Microsoft Office Suite.
 </p>
            <p className="text-muted-foreground">

Above all, I am a fast learner, with the ability to quickly absorb new technologies and apply them effectively to engineering challenges—making me 
adaptable in dynamic, technology-driven environments.
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
                  <h4 className="font-semibold text-lg"> Mechanical Design & Simulation</h4>
                  <p className="text-muted-foreground">
                   

                              CAD Drawing (SolidWorks, AutoCAD)<br />

                                FEA Simulation (ANSYS)<br />

                              Piping Design (AutoPIPE)<br />

                              Process Simulation (Aspen Plus/PRO)<br />
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
                  <h4 className="font-semibold text-lg">Automation & Control Systems</h4>
                  <p className="text-muted-foreground">
                    PLC Programming (Allen-Bradley, Siemens, Delta, Mitsubishi)<br />

                    Factory I/O Simulation<br />

                            Electrical Panel Design<br />

                        Electrical Wiring Simulation<br />

                        Control Panel Design<br />

                          P&ID Diagrams
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
                  <h4 className="font-semibold text-lg">Mechatronics & Robotics</h4>
                  <p className="text-muted-foreground">
                    Arduino Robotics Programming<br />

                            IoT Systems<br />

                              Python (OOP), C++ (OOP)<br />

                            Embedded Systems Integration<br />
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
                  <h4 className="font-semibold text-lg">Workshop Skills</h4>
                  <p className="text-muted-foreground">
                    Welding - Arch & TIG<br />

                    Lathe Machine<br />

                            Sheet Metal Fabrication<br />

                        Electrical Wiring Simulation<br />

                        CNC Programming<br />

                          
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
                  <h4 className="font-semibold text-lg">Maintenance Skills</h4>
                  <p className="text-muted-foreground">
                    Steam Boiler Maintenance & Service - Furnace Oil<br />

Air Compressor Service - Screw Type<br />

Pressure Vessel Maintenance<br />

Agitator System Maintenance - 3 Phase Motor & Gear box<br />

Pump System Maintenance<br />
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
                  <h4 className="font-semibold text-lg">Project Management & Process Improvement</h4>
                  <p className="text-muted-foreground">
                    Primavera P6 (Project Planning & Scheduling)<br />

                    Lean Manufacturing<br />

                    Six Sigma Yellow Belt<br />

                    Microsoft Office Suite<br />


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
                  <h4 className="font-semibold text-lg">Adaptability & Continuous Learning</h4>
                  <p className="text-muted-foreground">
                    Fast Learner with Quick Technology Adaptation<br />

                    Strong Application of New Tools in Real-world Engineering<br />
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
