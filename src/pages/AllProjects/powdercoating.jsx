import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Navbar } from "../../components/Navbar";
import { ThemeToggle } from "../../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { Footer } from "../../components/Footer";

export const Project6 = () => {
  // Gallery image paths — replace with your actual images
  const galleryImages = [
    "/projects/powdercoating/1.png",
    "/projects/powdercoating/2.png",
    "/projects/powdercoating/3.png",
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
              Powder Coating Plant  <span className="text-primary">Design & Commissioning</span>
            </h2>

            {/* Description & Gallery */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Booth, Gas-Powered Oven, and Cyclone System Integration</h3>

              <p className="text-muted-foreground">
                Designed and commissioned a complete powder coating plant with booth, gas-powered ceramic oven, and cyclone system. Improved production quality, enhanced operational reliability, and reduced labor and outsourcing costs.
              </p>

              <p className="text-muted-foreground">
                Led the design and commissioning of a full-scale powder coating plant, including a coating booth, cyclone collection system, and a gas-powered ceramic oven with five burners. The plant ensures consistent coating quality, improved process reliability, and optimized energy usage. By automating key processes, the system reduced labor requirements and eliminated outsourcing dependency. Responsibilities included mechanical layout, equipment selection, process integration, and operational testing. This project demonstrates expertise in industrial plant design, process optimization, and cost-efficient production system implementation.
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
