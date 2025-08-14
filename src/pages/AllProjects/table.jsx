import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Navbar } from "../../components/Navbar";
import { ThemeToggle } from "../../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { Footer } from "../../components/Footer";

export const Project8 = () => {
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
              Raw Material Cutting Table  <span className="text-primary">Design & Commissioning</span>
            </h2>

            {/* Description & Gallery */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Precision Cutting for Roofing Sheet Production</h3>

              <p className="text-muted-foreground">
                Designed and commissioned a raw material cutting table for roofing sheet production. Reduced material wastage by 2 inches per sheet, saving over 5 million annually, while improving cutting accuracy and operational efficiency.
              </p>

              <p className="text-muted-foreground">
                Led the design and commissioning of a precision cutting table for raw materials in roofing sheet manufacturing. The system reduces material waste by 2 inches per sheet, resulting in annual savings exceeding 5 million. The project involved mechanical design, process integration, and operational testing to ensure accurate, consistent cuts and efficient production flow. This solution enhances resource utilization, reduces production costs, and improves overall plant productivity while maintaining high-quality standards for the final product.
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
