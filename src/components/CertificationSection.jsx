import { ArrowRight, ExternalLink, Github, Home, Link } from "lucide-react";
import { IoLogOutOutline } from "react-icons/io5";
import React, { useState } from "react";
import Modal from "react-modal";
import { IoClose } from "react-icons/io5";

const certificates = [
    {
        id: 1,
        title: "Certificate 1",
        description: "1-ton polymer binder reactor plant, incl",
        image: "/certificates/Plant.png",
    },
    {
        id: 2,
        title: "Certificate 2",
        description:
            "A semi-automatic powder packaging machine with a screw conveyor, PLC control system, and conveyor belt—enhancing packaging efficiency and reducing manual labor by 50%.",
        image: "/certificates/project2.png",
    },
    {
        id: 3,
        title: "Certificate 3",
        description:
            "A high-efficiency binder strainer system to filter out impurities and improve material flow—reducing clogging, minimizing manual intervention, and enhancing overall process reliability and energy efficiency.",
        image: "/certificates/project3.png",
    },
    {
        id: 4,
        title: "Certificate 4",
        description: "A complete powder coating plant, including spray booth, curing oven, and air handling systems. The setup was optimized for airflow, energy efficiency, and material utilization—resulting in improved coating quality and production throughput.",
        image: "/certificates/project3.png",
    },
];

export const CertificationSection = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [modalData, setModalData] = useState({
        title: "",
        imageUrl: "",
        description: "",
    });

    const setModal = (certificate) => {
        setIsOpen(true);
        setModalData({
            title: certificate.title,
            imageUrl: certificate.image,
            description: certificate.description,
        })
    }


    return (
        <section id="certificates" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    {" "}
                    Certifications
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certificates.map((certificate, key) => (
                        <div
                            onClick={() => setModal(certificate)}
                            key={key}
                            className="cursor-pointer text-foreground/80 hover:text-primary flex items-center justify-center min-h-30 w-75 group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                        >
                            <div className="p-6">

                                <h3 className="text-xl font-semibold mb-1"> {certificate.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Modal */}
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div grid className="bg-black p-6 rounded shadow max-w-4xl w-full space-y-4">
                        <div>
                            <h2 className="text-xl font-bold mb-4">{modalData.title}</h2>
                            <p>{modalData.description}</p>
                        </div>
                        <div
                            className="inline-flex items-center justify-center group bg-card rounded-lg shadow-xs card-hover max-w-[1900px] max-h-[900px] min-w-[200px] min-h-[200px]"
                        >
                            <img
                                src={modalData.imageUrl}
                                alt={"1 Ton Reactor Plant"}
                                className="object-cover block"
                            />
                        </div>
                        <div>
                            <button
                                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
                                onClick={() => setIsOpen(false)}
                            >
                                <IoClose />
                            </button>
                        </div>

                    </div>
                </div>
            )}
        </section>
    );
};
