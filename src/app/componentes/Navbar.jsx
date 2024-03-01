'use client'
import { motion } from "framer-motion";
import Link from "next/link";
import { FaBalanceScale } from "react-icons/fa";
import { TbHome, TbPhone } from "react-icons/tb";
export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 10 }}
      transition={{ duration: 1 }}
      className="flex items-center justify-center w-screen rounded-xl z-20 fixed top-0 "
    >
      <ul className="flex justify-evenly items-center text-xl bg-gray-900 text-white lg:w-1/3 xl:w-1/3 w-3/4 rounded-xl border-2 border-sky-700 p-2 ">
        <Link
          href="#inicio"
          className="hover:scale-125 hover:bg-sky-700 rounded-full hover:text-white p-4 transition"
        >
          <TbHome />
        </Link>
        <span>|</span>
        <Link
          href="#planes"
          className="hover:scale-125  hover:bg-sky-700 rounded-full hover:text-white p-4 transition"
        >
          <FaBalanceScale />
        </Link>

        <span>|</span>
        <Link
          href="#caracteristicas"
          className="hover:scale-125 hover:bg-sky-700 rounded-full hover:text-white p-4 transition"
        >
          <TbPhone />
        </Link>
      </ul>
    </motion.nav>
  );
}
