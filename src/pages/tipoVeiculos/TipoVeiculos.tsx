import { useState } from "react";
import { BarraDeFerramentasListagem } from "../../shared/components";
import { LayoutBasePage } from "../../shared/layouts";

interface IListTipoVeiculos {
  id: number;
  descricao: string;
}

export const TipoVeiculos = () => {
  // const [listTipoVeiculos, setListTipoVeiculos] = useState<IListTipoVeiculos[]>([]);

  return (
    <LayoutBasePage
      barraDeFerramentas={<BarraDeFerramentasListagem mostrarInputBusca mostrarBotaoNovo />}
    >
      Tela De Tipo de Veiculos
    </LayoutBasePage>
  );
};
