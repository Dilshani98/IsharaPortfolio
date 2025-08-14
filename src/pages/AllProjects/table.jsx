import { Briefcase, Code, User } from "lucide-react";
import { IoArrowBackCircleOutline } from "react-icons/io5";

export const Project3 = () => {

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
                            Project <span className="text-primary"> 3</span>
                        </h2>

                        <div className="grid  items-center">
                            <div className="space-y-6">
                                <h3 className="text-2xl font-semibold">
                                    Community Project
                                </h3>

                                <p className="text-muted-foreground">
                                   ............................................................................

                                </p>

                                <p className="text-muted-foreground">
                                    ............................................................................
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
