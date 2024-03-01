'use client'
import { motion } from "framer-motion";
import Link from "next/link";

import { FaChild, FaHome, FaNetworkWired } from "react-icons/fa";

export default function Planes() {
  return (
    <section id='planes' className="h-screen w-screen p-2 bg-slate-300 flex flex-col mt-36 lg:mt-0 justify-center items-center gap-32">
      <div className="w-screen p-2 flex items-center justify-center">
        <motion.h1
          initial={{ y: 200 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 250,
            damping: 12,
          }}
          className="text-xl lg:text-5xl text-gray-900 text-center mt-8 flex"
        >
          A un CLICK de cambiar tu gimnasio
          <FaChild />
        </motion.h1>
      </div>
      <div className="h-screen w-screen p-2 text-white  flex flex-col lg:flex-row justify-center items-center gap-32">
        <motion.div
          initial={{ y: 200 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 250,
            damping: 12,
          }}
          className="w-full lg:h-full lg:w-1/4 bg-gradient-to-b from-gray-900 to-gray-500 rounded-xl"
        >
          <motion.div className="h-full w-full backdrop-blur bg-slate-100/10 rounded-xl flex flex-col text-center justify-between p-8 gap-8">
            <div>
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-4xl  ">Plan Local</h1>
                <h1 className="text-4xl  ">
                  <FaHome />
                </h1>
              </div>
              <p>AR$ 50.000</p>
            </div>
            <div className="text-left gap-2">
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1 }}
                viewport={{ once: true }}
                className="text-lg "
              >
                ○ Un solo pago.
              </motion.h2>
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                viewport={{ once: true }}
                className="text-lg "
              >
                ○ Gran velocidad.
              </motion.h2>
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
                viewport={{ once: true }}
                className="text-lg "
              >
                ○ Operaciones ilimitadas.
              </motion.h2>
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.6 }}
                viewport={{ once: true }}
                className="text-lg "
              >
                ○ Interfaz intuitiva.
              </motion.h2>
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
                viewport={{ once: true }}
                className="text-lg "
              >
                ○ Sin uso de internet.
              </motion.h2>
            </div>
            <Link
              className="bg-gray-900 w-full h-12 rounded-xl flex justify-center items-center text-white border-2 border-sky-700 hover:bg-gray-900 hover:text-sky-700 hover:border-white text-xs"
              href="https://wa.me/542634782743"
            >
              Consultar por plan local
            </Link>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ y: 200 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 250,
            damping: 12,
          }}
          className="w-full lg:h-full lg:w-1/4 bg-gradient-to-b from-gray-900 to-gray-500 rounded-xl"
        >
          <motion.div className="h-full w-full backdrop-blur bg-slate-100/10 rounded-xl flex flex-col text-center justify-between p-8 gap-8">
            <div>
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-4xl ">Plan Web</h1>
                <h1 className="text-4xl ">
                  <FaNetworkWired />
                </h1>
              </div>
              <p>AR$ 20.000/mes</p>
            </div>
            <div className="text-left gap-2">
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                viewport={{ once: true }}
                className="text-lg "
              >
                ○ Conectate desde cualquier punto.
              </motion.h2>
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
                viewport={{ once: true }}
                className="text-lg "
              >
                ○ No requiere gran tecnología.
              </motion.h2>
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.6 }}
                viewport={{ once: true }}
                className="text-lg "
              >
                ○ Gran velocidad.
              </motion.h2>
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
                viewport={{ once: true }}
                className="text-lg "
              >
                ○ Fácil de actualizar y escalar.
              </motion.h2>
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 2 }}
                viewport={{ once: true }}
                className="text-lg "
              >
                ○ Interfaz intuitiva.
              </motion.h2>
            </div>
            <Link
              className="bg-gray-900 w-full h-12 rounded-xl flex justify-center items-center text-white border-2 border-sky-700 hover:bg-gray-900 hover:text-sky-700 hover:border-white text-xs"
              href="https://wa.me/542634782743"
            >
              Consultar por plan web
            </Link>
          </motion.div>
        </motion.div>
      </div>
      <div></div>
    </section>
  );
}
