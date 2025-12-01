import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Navbar } from "../../components/Navbar";
import { ThemeToggle } from "../../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { Footer } from "../../components/Footer";

export const Project4 = () => {
  // Gallery image paths — replace with your actual images
  const galleryImages = [
    "/projects/maintain/1.png",
    "/projects/maintain/2.png",
    "/projects/maintain/3.png",
    "/projects/maintain/4.png",
    "/projects/maintain/5.png",
    "/projects/maintain/6.png",
    "/projects/maintain/7.png",
    "/projects/maintain/8.png",
    "/projects/maintain/9.png",
    "/projects/maintain/10.png",
    "/projects/maintain/11.png",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <main>
        <section id="about" className="py-24 px-4 relative">
          <div className="container mx-auto max-w-5xl">
            {/* Back Button */}
            <div className="flex space-x-3 mb-4">
              <a
                href={"/#projects"}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                <IoArrowBackCircleOutline size={30} />
              </a>
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Maintenance Engineer | FMCG & Industrial Manufacturing | Mechanical Engineering Specialist <span className="text-primary"></span>
            </h2>

            {/* Description & Gallery */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Comprehensive Mechanical, Electrical, and Control Systems Skills</h3>

              <p className="text-muted-foreground">
                I am a Mechanical Engineer with strong hands-on maintenance experience across FMCG and process-plant environments. I specialise in preventive and corrective maintenance, fault-finding, and reliability improvement of high-speed production equipment. My background includes working with pumps, reactors, utility systems, and automated packaging machinery to maintain safe, efficient, and continuous plant operation.</p>

              <p className="text-muted-foreground">
               I have practical expertise with FMCG production equipment including lobe pumps, vacuum pumps, gear pumps, high-speed fillers, POSIMAT unscramblers, NORDEN tube filling machines, and Cobotizur robotic pick-and-place arms. I routinely diagnose mechanical failures, replace worn components, align rotating equipment, and optimise machine performance to reduce downtime. </p>
              <p className="text-muted-foreground">
               Preventive Maintenance (PM) & Reliability: Developing and executing PM schedules, performing routine inspections, and using a reliability-focused approach to minimise breakdowns.

</p>
              <p className="text-muted-foreground">Mechanical Systems Expertise: Maintenance of hydraulic and pneumatic systems, bearings, seals, valves, couplings, gearboxes, mixers, and rotating machinery.

</p>
              <p className="text-muted-foreground">High-Speed FMCG Equipment: Troubleshooting/repair of conveyors, packaging lines, dosing/filling systems, and automated assembly equipment.

</p>
              <p className="text-muted-foreground">Maintenance Documentation & CMMS: Maintaining accurate service records, logging work orders, and using CMMS systems for planning, scheduling, and tracking maintenance tasks.

</p>
              <p className="text-muted-foreground">Plant Utilities Knowledge: Experience with boilers, compressors, chilled water systems, vacuum systems, and process-equipment support services.

</p>
              <p className="text-muted-foreground">Safety & Compliance: Strong knowledge of industrial safety procedures, lockout–tagout, hazard identification, risk assessment, confined-space and height-work awareness, and safe mechanical isolation.

</p>
              <p className="text-muted-foreground">Technical Communication: Ability to interpret engineering drawings, P&IDs, equipment manuals, and communicate effectively with production teams, contractors, and management.

</p>
              <p className="text-muted-foreground">Hands-On Diagnostic Skills: Mechanical troubleshooting, vibration/sound-based diagnosis, root cause analysis (RCA), and rapid breakdown response.</p>

              {/* Image Gallery */}
              <div className="grid grid-cols-2 gap-6">
                {galleryImages.map((src, index) => (
                  <div
                    key={index}
                    className="group bg-card rounded-lg overflow-hidden shadow-sm"
                  >
                    <div className="w-120 h-120 overflow-hidden">
                      <img
                        src={src}
                        alt={`Gallery ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
