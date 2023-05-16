import { Cafe } from "./cafe";

export class CafeDetail extends Cafe {

  constructor(
    public override id: number,
    public override nombre: string,
    public override tipo: string,
    public override region: string,
    public override sabor: string,
    public override altura: number,
    public override imagen: string,
  ) {
    super(id, nombre, tipo, region, sabor, altura, imagen)
  }
}
