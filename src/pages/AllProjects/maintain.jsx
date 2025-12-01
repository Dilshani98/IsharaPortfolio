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
              Maintenance Engineer | FMCG & Industrial Manufacturing | Mechanical Engineering Specialist
            </h2>

            {/* Description & Gallery */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Skills & Expertise Summary</h3>

              {/* Bullet Points */}
              <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
                <li>Mechanical Engineer with strong hands-on maintenance experience across FMCG and process-plant environments.</li>
                <li>Specialised in preventive and corrective maintenance, fault-finding, and reliability improvement of high-speed production machinery.</li>
                <li>Experienced with pumps, reactors, utilities, packaging lines, and automated machinery.</li>
              </ul>

              <h3 className="text-xl font-semibold">FMCG Machinery Expertise</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Lobe pumps, vacuum pumps, and gear pumps.</li>
                <li>High-speed fillers, POSIMAT unscramblers, and NORDEN tube filling machines.</li>
                <li>Cobotizur robotic pick-and-place handling systems.</li>
                <li>Conveyors, dosing systems, and general packaging-line equipment.</li>
              </ul>

              <h3 className="text-xl font-semibold">Mechanical Maintenance Skills</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Diagnosing mechanical failures and performing repairs.</li>
                <li>Replacing worn components, aligning rotating equipment, and restoring optimal machine performance.</li>
                <li>Interpreting engineering drawings, P&IDs, and equipment manuals.</li>
              </ul>

              <h3 className="text-xl font-semibold">Preventive & Reliability Maintenance</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Developing and executing PM schedules.</li>
                <li>Conducting regular inspections and monitoring equipment health.</li>
                <li>Applying reliability-focused strategies to minimise breakdowns.</li>
              </ul>

              <h3 className="text-xl font-semibold">Hydraulics, Pneumatics & Rotating Equipment</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Maintenance of hydraulic and pneumatic systems.</li>
                <li>Servicing bearings, seals, valves, couplings, mixers, and gearboxes.</li>
                <li>Performing mechanical rebuilds and overhauls.</li>
              </ul>

              <h3 className="text-xl font-semibold">Maintenance Documentation & CMMS</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Creating and closing work orders.</li>
                <li>Tracking maintenance history and service logs.</li>
                <li>Using CMMS for planning and scheduling maintenance activities.</li>
              </ul>

              <h3 className="text-xl font-semibold">Plant Utilities Knowledge</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Boilers and steam systems.</li>
                <li>Air compressors and vacuum systems.</li>
                <li>Chilled water systems and process support equipment.</li>
              </ul>

              <h3 className="text-xl font-semibold">Safety & Compliance</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Strict adherence to Lockout–Tagout (LOTO) procedures.</li>
                <li>Hazard identification and risk assessment.</li>
                <li>Confined space and height-work awareness.</li>
                <li>Safe mechanical isolation and compliance with industrial safety standards.</li>
              </ul>

              <h3 className="text-xl font-semibold">Technical Communication & Diagnostics</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Clear communication with production, engineering, and contractors.</li>
                <li>Breakdown reporting and documentation.</li>
                <li>Vibration/sound-based troubleshooting and RCA (Root Cause Analysis).</li>
                <li>Fast and effective breakdown response.</li>
              </ul>
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
