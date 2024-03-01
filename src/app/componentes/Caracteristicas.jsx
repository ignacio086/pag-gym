'use client'
import { motion } from "framer-motion";
import { Lato } from "next/font/google";
const lato = Lato({ subsets: ["latin"], weight: ["900"] });
export default function Caracteristicas() {
  return (
    <section
      id="caracteristicas"
      className="flex w-screen mt-32 lg:mt-0 h-auto flex-col items-center justify-center bg-slate-300 gap-24 p-2 lg:p-24 "
    >
      <motion.h1
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="letra text-4xl lg:text-8xl"
        style={lato.style}
      >
        CARACTERISTICAS
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="flex p-2 lg:p-24 justify-evenly border-2 border-gray-900 bg-orange-500 gap-2  rounded-xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-col w-1/2"
        >
          <h1 className="letra text-4xl lg:text-8xl" style={lato.style}>Organizá</h1>
          <h1 className="letra text-4xl lg:text-8xl" style={lato.style}>A tus</h1>
          <h1 className="letra text-4xl lg:text-8xl" style={lato.style}>Clientes</h1>
          <p className="text-white">
            Olvidate de papeles y fichas para tus clientes. Visualizá toda la
            información sobre pagos, rutinas y actividades de tus clientes de
            forma rápida y fácil con solo su nombre.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="h-96 rounded-xl shadow-[5px_5px_5px_-1px_rgba(0,0,0,0.5)]"
        >
          <img className="h-full rounded-xl" src="/cel1.png" />
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="flex p-2 lg:p-24 justify-evenly border-2 border-gray-900 bg-sky-700 gap-2 rounded-xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="h-96 rounded-xl shadow-[-5px_5px_5px_-1px_rgba(0,0,0,0.5)]"
        >
          <img className="h-full rounded-xl" src="/cel2.png" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-col w-1/2"
        >
          <h1 className="letra text-4xl lg:text-8xl" style={lato.style}>Controlá</h1>
          <h1 className="letra text-4xl lg:text-8xl" style={lato.style}>Tu</h1>
          <h1 className="letra text-4xl lg:text-8xl" style={lato.style}>Gimnasio</h1>
          <p className="text-white">
            ¿No sabés cuanta ganancia tiene tu gimnasio o actividad? IG-GYM te
            ofrece gráficos faciles de interpretar y con toda la información que
            necesitas.
          </p>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="flex p-2 lg:p-24 justify-evenly  border-2 border-gray-900 bg-purple-500 gap-2 rounded-xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-col w-1/2"
        >
          <h1 className="letra text-4xl lg:text-8xl" style={lato.style}>Editá</h1>
          <h1 className="letra text-4xl lg:text-8xl" style={lato.style}>Tus</h1>
          <h1 className="letra text-4xl lg:text-8xl" style={lato.style}>Actividades</h1>
          <p className="text-white">
            Despreocupate de andar cambiando precios todo el tiempo. Editá tus
            actividades con cantidad de días y modificalas las veces que
            quieras.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="h-96 rounded-xl shadow-[5px_5px_5px_-1px_rgba(0,0,0,0.5)]"
        >
          <img className="h-full rounded-xl" src="/cel3.png" />
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="flex flex-col p-2 lg:p-24 justify-evenly gap-12  border-2 border-gray-900 bg-lime-300  rounded-xl"
      >
        <div className="flex gap-2">
          <h1 className="letra text-4xl lg:text-8xl" style={lato.style}>Ultimo paso </h1>
          <motion.h1
            className="letra text-4xl lg:text-8xl"
            initial={{ y: 0 }}
            whileInView={{ y: [0, -20, 0] }}
            transition={{ duration: 1, delay: 0 }}
            style={lato.style}
          >
            .
          </motion.h1>
          <motion.h1
            className="letra text-4xl lg:text-8xl"
            initial={{ y: 0 }}
            whileInView={{ y: [0, -20, 0] }}
            transition={{ duration: 1, delay: 0.1 }}
            style={lato.style}
          >
            .
          </motion.h1>
          <motion.h1
            className="letra text-4xl lg:text-8xl "
            initial={{ y: 0 }}
            whileInView={{ y: [0, -20, 0] }}
            transition={{ duration: 1, delay: 0.2 }}
            style={lato.style}
          >
            .
          </motion.h1>
        </div>
        <div className="text'white">
          
          Obtenelo yá haciendo
          <a
            className="bg-white hover:bg-green-300 p-2 border-2 border-gray-900 rounded-xl m-2 "
            href="https://wa.me/542634782743"
          >

            Click acá
          </a>
          y llevá tu gimnasio a <strong>otro nivel.</strong>
        </div>
      </motion.div>
    </section>
  );
}
