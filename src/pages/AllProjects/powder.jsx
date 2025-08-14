import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Navbar } from "../../components/Navbar";
import { ThemeToggle } from "../../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { Footer } from "../../components/Footer";

export const Project5 = () => {
  // Gallery image paths — replace with your actual images
  const galleryImages = [
    "/projects/1.png",
    "/projects/2.png",
    "/projects/3.png",
    "/projects/4.png",
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
              Automated Cement Powder Packing System <span className="text-primary"></span>
            </h2>

            {/* Description & Gallery */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">PLC, HMI, and VFD-Based Screw Conveyor Control</h3>

              <p className="text-muted-foreground">
                Developed an automated cement powder packing system with screw conveyor controlled via Mitsubishi FX PLC, Samkoon HMI, and VFDs. Reduced human intervention by 60%, minimized downtime, and increased production efficiency by 50%.
              </p>

              <p className="text-muted-foreground">
                Designed and implemented a fully automated cement powder packing system integrating a screw conveyor, Mitsubishi FX PLC, Samkoon HMI, and VFD-based motor control. The system reduces human involvement by 60% and enhances production efficiency by 50% while minimizing downtime. Responsibilities included PLC programming, HMI interface design, VFD setup, and overall mechatronic system integration. This project demonstrates expertise in industrial automation, control systems, and process optimization, delivering a reliable, high-speed packing solution that improves operational efficiency and ensures consistent product handling.
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
