import { Briefcase, Code, User } from "lucide-react";
import { IoArrowBackCircleOutline } from "react-icons/io5";

export const Project4 = () => {

  return (
<div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <main>
                <section id="about" className="py-24 px-4 relative">
                    {" "}
                    <div className="container mx-auto max-w-5xl">
                        <div className="flex space-x-3">
                            <a
                                href={"/#projects"}
                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                            >
                                <IoArrowBackCircleOutline size={30} />
                            </a>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                            Project <span className="text-primary"> 4</span>
                        </h2>

                        <div className="grid  items-center">
                            <div className="space-y-6">
                                <h3 className="text-2xl font-semibold">
                                    Automated Guided Vehicle (AGV)
                                </h3>

                                <p className="text-muted-foreground">
                                   This AGV is designed specifically for airport ground operations, aimed at improving efficiency and reducing manual labor in tool transportation for SriLankan Airlines. Using an advanced LiDAR sensor system, it generates high-resolution maps of its surroundings and determines optimal paths without human intervention.
                                </p>

                                <p className="text-muted-foreground">
                                   The vehicle is capable of carrying up to 100 kg of tools and equipment over a range of 1 km, making it ideal for short-distance logistics inside airport facilities. Integrated video output allows operators to monitor its movement and surroundings in real time, while onboard data processing enables quick decision-making for obstacle detection, route adjustments, and safe operation. This system enhances operational efficiency, safety, and reliability in busy airport environments.


                                </p>

                                <div
                                    className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                                >
                                    <div className="h-48 overflow-hidden">
                                        <img
                                            src={"/projects/Plant.png"}
                                            alt={"1 Ton Reactor Plant"}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
  );
};
