import { useState } from "react";
import { BarraDeFerramentas } from "../../shared/components";
import { LayoutBasePage } from "../../shared/layouts";

interface IListTipoVeiculos {
  id: number;
  descricao: string;
}

export const TipoVeiculos = () => {
  // const [listTipoVeiculos, setListTipoVeiculos] = useState<IListTipoVeiculos[]>([]);

  return (
    <LayoutBasePage
      barraDeFerramentas={<BarraDeFerramentas mostrarInputBusca mostrarBotaoNovo />}
    >
      Tela De Tipo de Veiculos
    </LayoutBasePage>
  );
};
