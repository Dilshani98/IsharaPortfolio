import { ArrowRight, ExternalLink, Github, Home, Link } from "lucide-react";
import { IoLogOutOutline } from "react-icons/io5";
import React, { useState } from "react";
import Modal from "react-modal";
import { IoClose } from "react-icons/io5";

const certificates = [
  {
    id: 1,
    title: "HVAC Certificate",
    description:
      "The Become an HVAC PRO: The Ultimate HVAC Guide course delivers a professional-level introduction to HVAC system design from foundational theory to advanced application. It begins with HVAC basics—laws of thermodynamics, refrigerants, psychrometry, and the vapor-compression cycle—then moves into manual and software-based cooling load calculations including HAP and custom spreadsheets. Learners also cover duct design (both manual and McQuay software), AHU components, air filters, and air terminals. Practical skills such as analyzing building layouts, sizing equipment, and completing sample HVAC projects are reinforced through animations and downloadable resources. The course emphasizes real-world application, preparing participants to design HVAC systems for residential and commercial buildings",
    image: "/certificates/hvac.jpg",
  },
  {
    id: 2,
    title: "LEAN SIX SIGMA YELLOW BELT CERTIFICATION",
    description:
      "The course provides a comprehensive introduction to Lean Six Sigma methodology at the Yellow Belt level. It covers key DMAIC phases, focusing on process improvement techniques for service-based industries. Topics include problem definition, root cause analysis, data collection, and statistical tools using Minitab. The course also guides learners through a complete Six Sigma project with real-world data. It emphasizes practical application, certification readiness, and the use of Lean tools for quality and efficiency improvement.",
    image: "/certificates/sixsigma.png",
  },
  {
    id: 3,
    title: "Advanced Diploma in Electrical Design Engineering",
    description:
      "The course covers advanced concepts in electrical design engineering for industrial and infrastructure projects. It includes load estimation, cable sizing, and the preparation of single-line diagrams. Key topics include lighting design, earthing systems, and lightning protection. The course also teaches system analysis such as fault calculations and relay coordination using ETAP software. It emphasizes practical design skills, equipment selection, and industry-standard documentation.",
    image: "/certificates/electrical.png",
  },
  {
    id: 4,
    title: "The Complete Course in Water and Wastewater Treatment",
    description:
      "The course covers the complete process of water and wastewater treatment, from basic principles to advanced technologies. It includes topics such as water quality, coagulation, sedimentation, filtration, and disinfection methods. Advanced treatment methods like reverse osmosis, desalination, and various sewage treatment technologies (SBR, MBR, MBBR, etc.) are also discussed. Learners gain insight into both municipal and industrial treatment systems, including effluent and sludge management. The course emphasizes practical understanding, environmental safety, and compliance with treatment standards.",
    image: "/certificates/water.png",
  },
  {
    id: 5,
    title: "Geometric Dimensioning and Tolerancing (GD&T) Basics",
    description:
      "The course provides a structured introduction to Geometric Dimensioning and Tolerancing (GD&T), progressing from basic engineering drawing principles to advanced GD&T applications. It explains the need for GD&T over traditional tolerance methods and teaches the use of datums, virtual conditions, and bonus tolerances. Participants learn the full suite of GD&T symbols for form (e.g., straightness, flatness), orientation (e.g., parallelism, perpendicularity), location (e.g., position), runout, and profile controls. The curriculum includes practical interpretation of feature control frames, datum feature modifiers, and hands-on exercises with quizzes to reinforce learning. By the end, learners are equipped to apply ASME Y14.5 standards to communicate precise design intent for manufacturability and inspection. ",
    image: "/certificates/gd&t.png",
  },
  {
    id: 6,
    title: "Aspen Plus V11 Masterclass: Process Simulation",
    description:
      "The course guides learners from beginner to advanced proficiency in Aspen Plus V11 for steady-state chemical process simulation. It starts with software fundamentals—GUI navigation, fluid package setup, unit definitions, and thermodynamic property methods. Participants model a variety of unit operations, including flash and detailed distillation columns, reactors (PFR, CSTR, fluidized bed), piping networks, heat exchangers, and solids handling systems. Advanced topics include sensitivity analysis, equipment rating, process optimization, and troubleshooting techniques. By the end, learners gain practical skills to design, analyze, optimize, and debug complex chemical processes using Aspen Plus. ",
    image: "/certificates/aspen.png",
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
    });
  };

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
                <h3 className="text-xl font-semibold mb-1">
                  {" "}
                  {certificate.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div
            grid
            className="bg-black p-6 rounded shadow max-w-4xl w-full space-y-4"
          >
            <div>
              <h2 className="text-xl font-bold mb-4">{modalData.title}</h2>
              {modalData.description.split("\n").map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
            <div className="inline-flex items-center justify-center group bg-card rounded-lg shadow-xs card-hover max-w-[1500px] max-h-[600px] min-w-[200px] min-h-[200px] max-w-full max-h-full object-contain">
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
