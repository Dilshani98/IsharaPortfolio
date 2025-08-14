import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Navbar } from "../../components/Navbar";
import { ThemeToggle } from "../../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { Footer } from "../../components/Footer";

export const Project9 = () => {
  // Gallery image paths — replace with your actual images
  const galleryImages = [
    "/projects/waste/1.png",
    "/projects/waste/2.png",
    "/projects/waste/3.png",
    "/projects/waste/4.png",
    "/projects/waste/5.png",
    "/projects/waste/6.png",
    "/projects/waste/7.png",
    "/projects/waste/8.png",
    "/projects/waste/9.png",
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
              Wastewater Treatment Plant  <span className="text-primary">Design & Commissioning</span>
            </h2>

            {/* Description & Gallery */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Acrylic Binder Factory Water Recycling System</h3>

              <p className="text-muted-foreground">
               Designed and commissioned a wastewater treatment plant for an acrylic binder factory, recycling ~20,000 liters/month for cooling tank use. Included full P&ID design, multi-stage treatment, and motorized agitator system with star-delta starter.
              </p>

              <p className="text-muted-foreground">
                Engineered and commissioned a complete wastewater treatment plant for an acrylic binder production facility, enabling the recycling of approximately 20,000 liters of water per month for use in factory cooling systems. The system comprised a collection tank, clarifier/flocculation tank, sand filter, pH adjustment tank, sludge tank, and aeration system. Designed the full P&ID diagram and integrated a 3-phase motor-driven agitator with a star-delta starter for efficient mixing. This project reduced water consumption costs, promoted sustainable operations, and ensured compliance with environmental standards while maintaining production efficiency.
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
