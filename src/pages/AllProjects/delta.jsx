import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Navbar } from "../../components/Navbar";
import { ThemeToggle } from "../../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { Footer } from "../../components/Footer";

export const Project2 = () => {
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
              Delta Robot <span className="text-primary"> for Automated Candy Sorting</span>
            </h2>

            {/* Description & Gallery */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Conveyor Integration, IR Sensors, and OpenCV-Based Image Processing</h3>

              <p className="text-muted-foreground">
                Designed and built a delta robot system for sorting chocolates and candies. Integrated with a conveyor, IR sensors, and OpenCV-based image processing for precise pick-and-place operations, improving sorting speed and accuracy in confectionery production.
              </p>

              <p className="text-muted-foreground">
                Developed a high-speed delta robot system for confectionery production lines, capable of sorting chocolates, candies, and similar products. The setup includes a conveyor belt system, IR sensors, and an OpenCV-powered image processing unit for object detection and classification. Products are picked from the conveyor and placed into designated areas with high precision. This automated solution enhances sorting speed, ensures consistent quality, and reduces manual labor in candy manufacturing plants. The design offers flexibility for different product shapes and sizes, making it adaptable to various confectionery applications.
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
