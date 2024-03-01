'use client'
import { TbArrowBigDownLinesFilled } from "react-icons/tb";
import { motion } from "framer-motion";
import { Lato } from "next/font/google";
const lato = Lato({ subsets: ["latin"], weight: ["900"] });
export default function Inicio() {
  return (
    <section
      id="inicio"
      className=" overflow-y-hidden  w-screen h-screen bg-gray-800 flex flex-col lg:flex-row"
    >
      <div className=" lg:w-1/2 xl:w-1/2 lg:p-24 p-12 text-white flex flex-col gap-6  justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="shadow-[5px_5px_5px_-1px_rgba(0,0,0,0.5)] rounded-xl mt-12 lg:mt-0 w-fit p-2"
        >
          <h1 className="text-8xl lg:text-9xl " style={lato.style}>IG - GYM</h1>
        </motion.div>
        <div className="w-full text-center gap-6 flex flex-col text-xl ">
          <motion.p
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-s lg:text-xl"
          >
            Llevá tu gimnasio al siguiente nivel.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-s lg:text-xl"
          >
           Organizá clientes, actividades y mirá tus gráficos.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="flex flex-col gap-2 items-center justify-center"
        >
          <a
            href="#planes"
            className=" hover:bg-gray-900 hover:text-white hover:border-2 hover:border-white border-2 border-gray-500 bg-gray-900 rounded-xl text-white text-s p-2 w-fit "
          >
            Saber más
          </a>
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1, repeat: "infinity" }}
          >
            <TbArrowBigDownLinesFilled />
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        className=" w-full lg:w-1/2 p-10  lg:p-24 flex items-center justify-center"
      >
        <div className="h-full rounded-xl shadow-[5px_5px_5px_-1px_rgba(0,0,0,0.5)]">
          <img className="h-full rounded-xl" src="/cel1.png" />
        </div>
      </motion.div>
    </section>
  );
}
