
import Inicio from "./componentes/Inicio";
import Planes from "./componentes/Planes";
import Caracteristicas from "./componentes/Caracteristicas";

export default function Home() {
  return (
    <main className="flex w-screen h-auto flex-col items-center ">
      <Inicio/>
      <Planes/>
      <Caracteristicas/>
    </main>
  );
}
