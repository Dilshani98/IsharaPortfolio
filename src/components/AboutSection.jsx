import {  BotIcon, WrenchIcon, CircuitBoardIcon, HammerIcon, BoltIcon, ChartLineIcon, BrainIcon } from "lucide-react";
import { saveAs } from "file-saver";

export const AboutSection = () => {

 const handleDownload = () => {

    const FileURL = "https://www.canva.com/design/DAGqTVsPD5I/0YzSsS9BBgr59V5-TdTIGA/edit?utm_content=DAGqTVsPD5I&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
    const fileName = FileURL.split("/").pop();
    saveAs(FileURL, fileName);

  }
  const googleDownload = () => {

    const FileURL = "https://drive.google.com/drive/folders/1IpXZ60N29oUpvXe2UR5cpVC5dOipjZga?usp=sharing"
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
              Mechanical Engineer
            </h3>
            <h3 className="text-2xl font-semibold">
              FMCG Manufacturing | Design Innovator!
            </h3>

            <p className="text-muted-foreground">
              Highly motivated Mechanical Engineer with strong experience in FMCG manufacturing environments, specializing in preventive maintenance, equipment reliability, industrial systems troubleshooting, and mechanical system optimization. I bring hands-on exposure to maintaining and improving critical plant assets—such as steam boilers, air compressors, reactors, agitators, and pump systems—ensuring high uptime and consistent production performance.

            </p>

            <p className="text-muted-foreground">
              I’m passionate about engineering smart, reliable mechanical systems and developing innovative solutions that improve safety, efficiency, and long-term asset performance. My interest in modern manufacturing drives me to continuously learn new technologies related to machine design, robotics, product development, and advanced maintenance practices.
               </p>

            <p className="text-muted-foreground">


              I hold a B.Sc. Degree in Mechanical Engineering from the University of Moratuwa, specializing in Mechatronics Engineering, giving me a balanced skill set across mechanical design, electronics, controls, and industrial technologies.
              </p>
            <p className="text-muted-foreground">    

My core strength lies in applying advanced maintenance strategies to improve equipment reliability and maximize plant uptime in FMCG environments. I specialize in preventive, predictive, and condition-based maintenance, using structured methods to reduce failures and extend asset life. Alongside this, I bring strong capabilities in mechanical design with SolidWorks and AutoCAD, supported by FEA simulation in ANSYS, and process analysis using Aspen Plus/PRO and AutoPIPE. I incorporate World Class Manufacturing (WCM) principles, hygiene engineering requirements, and strict industrial safety standards into every maintenance and engineering activity—ensuring machinery operates safely, efficiently, and in compliance with both operational and regulatory expectations.
</p>

            <p className="text-muted-foreground">

  

In the industrial control domain, I have designed and programmed PLC systems using Allen-Bradley, Siemens, Delta, and Mitsubishi platforms, with hands-on simulation experience using Factory I/O. I’m skilled in control panel design, electrical wiring planning, and panel layout—bridging the mechanical and electrical engineering disciplines. My experience also includes deploying IoT-based solutions for smart monitoring, data collection, and performance analytics within manufacturing processes.
</p>
My mechatronics background extends into robotics and embedded systems, where I have built and programmed Arduino-based platforms and worked with Python and C++ (OOP) to create integrated electromechanical solutions.
            <p className="text-muted-foreground">

On the production side, I bring practical workshop experience in sheet metal fabrication, welding, machining, and CNC programming—allowing me to smoothly transition from digital models to real-world prototypes and industrial components. My FMCG experience also includes supporting continuous improvement initiatives, implementing preventive maintenance systems, and optimizing equipment performance to reduce downtime and enhance production reliability.
 </p>
            <p className="text-muted-foreground">
I also possess strong project management capabilities using Primavera P6, along with working knowledge of Lean Manufacturing and Six Sigma (Yellow Belt). I am proficient in preparing technical documents, P&ID diagrams, and engineering reports with Microsoft Office tools.
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
                Download CV - Canva
              </a>
              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                onClick={() => googleDownload()}
              >
                Download CV - Google-Drive
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <WrenchIcon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Mechanical Design & Simulation</h4>
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
                  <BotIcon className="h-6 w-6 text-primary" />
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
                  <CircuitBoardIcon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Mechatronics & Robotics</h4>
                  <p className="text-muted-foreground">
                    Arduino Robotics Programming<br />

                            IoT Systems<br />

                              Python (OOP), C++ (OOP)<br />

                            Embedded Systems Integration <br />
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <HammerIcon className="h-6 w-6 text-primary" />
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
                  <BoltIcon className="h-6 w-6 text-primary" />
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
                  <ChartLineIcon className="h-6 w-6 text-primary" />
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
                  <BrainIcon className="h-6 w-6 text-primary" />
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
