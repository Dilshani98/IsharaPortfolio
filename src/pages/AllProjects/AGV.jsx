import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Navbar } from "../../components/Navbar";
import { ThemeToggle } from "../../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { Footer } from "../../components/Footer";

export const Project10 = () => {
  // Gallery image paths — replace with your actual images
  const galleryImages = [
    "/projects/AGV/1.png",
    "/projects/AGV/2.png",
    "/projects/AGV/3.png",
    "/projects/AGV/4.png",
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
              Autonomous Guided Vehicle (AGV) for Tool Handling <span className="text-primary"> – SriLankan Airlines</span>
            </h2>

            {/* Description & Gallery */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">100 kg Capacity, 1 km Range, LIDAR Navigation & Vision System</h3>

              <p className="text-muted-foreground">
                Developed an AGV for SriLankan Airlines capable of carrying 100 kg over 1 km using LIDAR navigation and camera vision. Improved tool transport efficiency, reducing handling delays for aircraft maintenance mechanics.
              </p>

              <p className="text-muted-foreground">
                Designed and implemented an Autonomous Guided Vehicle (AGV) for SriLankan Airlines to streamline tool handling in aircraft maintenance operations. The AGV features a 100 kg payload capacity, 1 km operational range, LIDAR-based navigation for precise movement, and a camera video input for monitoring environmental conditions. The system operates autonomously, minimizing manual transport efforts and reducing tool delivery delays for mechanics. This innovation significantly improved operational efficiency, reduced downtime, and enhanced workplace safety in maintenance hangars.
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
