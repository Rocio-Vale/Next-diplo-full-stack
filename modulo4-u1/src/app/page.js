import { BarraProgreso } from "@/components/barraProgreso";
import { CambiaColor } from "@/components/cambiaColor";

const valor1 = 85;
const valor2 = 15;

export default function Home() {
  return (
    <div>
      <div>
        <BarraProgreso valor={valor1} />
        <BarraProgreso valor={valor2} />
      </div>

    <hr />

    <CambiaColor />

    </div>
  );
}
