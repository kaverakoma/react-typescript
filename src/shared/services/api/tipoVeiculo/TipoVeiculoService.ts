import { ApiRota } from "../axios-config";

interface IDetalheTipoVeiculo {
  id: number;
  descricao: string;
}

interface IListTipoVeiculo {
  id: number;
  descricao: string;
}

type TListTipoVeiculoComTotal = {
  data: IListTipoVeiculo[];
};

const getAll = async (): Promise<TListTipoVeiculoComTotal | Error> => {
  try {
    const { data } = await ApiRota.get("/TipoVeiculo");
    if (data) {
      return {
        data,
      };
    }
    return Error("Erro ao listar tipo de veiculos");
  } catch (error) {
    console.error(error);
    return Error(
      (error as { massage: string }).massage ||
        "Erro ao listar tipo de veiculos"
    );
  }
};

const getById = async (id: number): Promise<IDetalheTipoVeiculo | Error> => {
  try {
    const { data } = await ApiRota.get(`/TipoVeiculo/${id}`);
    if (data) {
      return data;
    }
    return Error("Erro ao consultar o registro");
  } catch (error) {
    console.error(error);
    return Error(
      (error as { massage: string }).massage || "Erro ao consultar o registro"
    );
  }
};

const create = async (dados: Omit<IDetalheTipoVeiculo, "id">): Promise<number | Error> => {
  try {
    const { data } = await ApiRota.post<IDetalheTipoVeiculo>("/TipoVeiculo", dados);
    if (data) {
      return data.id;
    }
    return Error("Erro ao criar o registro");
  } catch (error) {
    console.error(error);
    return Error(
      (error as { massage: string }).massage || "Erro ao criar o registro"
    );
  }
};

const updateById = async (id: number, dados: IDetalheTipoVeiculo): Promise<void | Error> => {
    try {
        await ApiRota.put<IDetalheTipoVeiculo>(`/TipoVeiculo/${id}`, dados);
      } catch (error) {
        console.error(error);
        return Error(
          (error as { massage: string }).massage || "Erro ao atualizar o registro"
        );
      }
};

const deleteById = async (id: number): Promise<void | Error> => {
    try {
        await ApiRota.delete<IDetalheTipoVeiculo>(`/TipoVeiculo/${id}`);
      } catch (error) {
        console.error(error);
        return Error(
          (error as { massage: string }).massage || "Erro ao deletar o registro"
        );
      }
};

export const TipoVeiculoService = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
