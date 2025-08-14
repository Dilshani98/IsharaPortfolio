import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Navbar } from "../../components/Navbar";
import { ThemeToggle } from "../../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { Footer } from "../../components/Footer";

export const Project3 = () => {
  // Gallery image paths — replace with your actual images
  const galleryImages = [
    "/projects/blank.png",
    "/projects/blank.png",
    "/projects/blank.png",
    "/projects/blank.png",
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
              Machine Output Monitoring System <span className="text-primary"> IoT-Based</span>
            </h2>

            {/* Description & Gallery */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Real-Time Production Tracking for Roofing Sheet Manufacturing</h3>

              <p className="text-muted-foreground">
               Developed an IoT system for roofing sheet machines using rotary encoder data, transmitting real-time output to a web app. Enabled fault detection, capacity monitoring, and production optimization to increase overall plant efficiency.
              </p>

              <p className="text-muted-foreground">
                Designed and implemented an IoT-based monitoring solution for a roofing sheet manufacturing line. The system collects production data from a rotary encoder and transmits it to a cloud-based web application for real-time tracking. Operators can monitor total output capacity, detect machine faults promptly, and analyze performance trends. This solution improved production planning, reduced downtime, and increased overall manufacturing efficiency. By enabling data-driven decision-making, the system provided better control over production rates and enhanced transparency in the manufacturing process.
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
