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
              Industrial Machinery Maintenance & Troubleshooting Expertise <span className="text-primary"></span>
            </h2>

            {/* Description & Gallery */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Comprehensive Mechanical, Electrical, and Control Systems Skills</h3>

              <p className="text-muted-foreground">
                Extensive hands-on experience in maintaining and troubleshooting industrial machinery, including electrical control panels, cyclones, boilers, pumps, conveyors, agitators, gearboxes, VFDs, generators, and air compressors, ensuring high plant reliability and minimal downtime.
              </p>

              <p className="text-muted-foreground">
                Proven expertise in the maintenance, troubleshooting, and optimization of diverse industrial systems. Skilled in electrical control panel design and upkeep, furnace oil boiler operation, industrial pump servicing, conveyor system repair, and agitator/gearbox maintenance. Experienced in VFD troubleshooting and programming for process control. Adept in generator servicing, air compressor maintenance, and implementing preventive maintenance programs to minimize unplanned downtime. Combines strong technical knowledge with practical problem-solving to ensure continuous plant operation, improved efficiency, and extended equipment lifespan.
              </p>

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
