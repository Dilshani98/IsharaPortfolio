import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Navbar } from "../../components/Navbar";
import { ThemeToggle } from "../../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { Footer } from "../../components/Footer";

export const Project1 = () => {
  // Gallery image paths — replace with your actual images
  const galleryImages = [
    "/projects/waste/1.png",
    "/projects/2.png",
    "/projects/3.png",
    "/projects/4.png",
    "/projects/5.png",
    "/projects/6.png",
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
              Project <span className="text-primary">1</span>
            </h2>

            {/* Description & Gallery */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Designed and Commissioned Factory Wastewater Treatment Plant</h3>

              <p className="text-muted-foreground">
                A complete wastewater treatment plant was designed and commissioned for the factory to treat process effluents and meet environmental discharge standards. The system includes equalization, pH adjustment, primary sedimentation, biological treatment (aeration and secondary clarification), and tertiary filtration. Equipment such as pumps, blowers, dosing systems, and control panels were selected based on flow rate and load characteristics.
              </p>

              <p className="text-muted-foreground">
                The plant was integrated with automatic level and pH controls for reliable and low-maintenance operation, ensuring consistent treatment efficiency and regulatory compliance.
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
