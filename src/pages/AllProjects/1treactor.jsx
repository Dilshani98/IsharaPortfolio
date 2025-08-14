import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Navbar } from "../../components/Navbar";
import { ThemeToggle } from "../../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { Footer } from "../../components/Footer";

export const Project1 = () => {
  // Gallery image paths — replace with your actual images
  const galleryImages = [
    "/projects/1treactor/1.png",
    "/projects/1treactor/2.png",
    "/projects/1treactor/3.png",
    "/projects/1treactor/4.png",
    "/projects/1treactor/5.png",
    "/projects/1treactor/6.png",
    "/projects/1treactor/7.png",
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
             1-Ton Capacity Reactor Plant<span className="text-primary">Design & Commissioning</span>
            </h2>

            {/* Description & Gallery */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Complete Mechanical Design, Simulation, and Performance Optimization</h3>

              <p className="text-muted-foreground">
               Designed and commissioned a 1-ton reactor system with Limpert coil, monomer and catalyst vessels, and heat exchanger. Performed mechanical calculations, FEA simulations, and motor sizing, achieving 30-minute batch time reduction with improved efficiency.
              </p>

              <p className="text-muted-foreground">
               Led the full mechanical design and commissioning of a 1-ton capacity reactor plant, including Limpert coil, monomer vessel, catalyst vessel, and integrated heat exchanger. Performed shaft and agitator design with detailed calculations, FEA simulations for structural integrity, and motor power sizing for optimal mixing. The upgraded system reduced batch processing time by 30 minutes compared to the previous plant while enhancing energy efficiency, process stability, and product consistency. Delivered a cost-effective, high-performance solution meeting industrial safety and operational standards.
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
