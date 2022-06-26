import { useEffect, useState } from "react";
import { BarraDeFerramentasListagem } from "../../shared/components";
import { LayoutBasePage } from "../../shared/layouts";
import { TipoVeiculoService } from "../../shared/services/api/tipoVeiculo/TipoVeiculoService";

interface IListTipoVeiculos {
  id: number;
  descricao: string;
}

export const TipoVeiculos: React.FC = () => {
  // const [listTipoVeiculos, setListTipoVeiculos] = useState<IListTipoVeiculos[]>([]);
  useEffect(() => {
    TipoVeiculoService.getAll().then((result) => {
      if (result instanceof Error) {
        alert(result.message);
      } else{
        console.log(result)
      }
    });
  }, []);
  
  return (
    <LayoutBasePage
      barraDeFerramentas={
        <BarraDeFerramentasListagem mostrarInputBusca mostrarBotaoNovo />
      }
    >
      Tela De Tipo de Veiculos
    </LayoutBasePage>
  );
};
