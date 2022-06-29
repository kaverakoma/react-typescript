import { type } from "os";
import { ApiRota } from "./axios-config";

export type TipoVeiculo = {
  id: number;
  descricao?: string;
}

const getAll = async (): Promise<TipoVeiculo[] | Error> => {
  try {
    const { data } = await ApiRota.get("/TipoVeiculo");
    if (data) {
      return data;
    }
    return Error("Erro ao listar tipo de veiculos");
  } catch (error) {
    return Error(
      (error as { massage: string }).massage ||
        "Erro ao listar tipo de veiculos"
    );
  }
};

const getById = async (id: number): Promise<TipoVeiculo| Error> => {
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

const create = async (dados: Omit<TipoVeiculo, "id">): Promise<number | Error> => {
  try {
    const { data } = await ApiRota.post<TipoVeiculo>("/TipoVeiculo", dados);
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

const updateById = async (id: number, dados: TipoVeiculo): Promise<void | Error> => {
    try {
        await ApiRota.put<TipoVeiculo>(`/TipoVeiculo/${id}`, dados);
      } catch (error) {
        console.error(error);
        return Error(
          (error as { massage: string }).massage || "Erro ao atualizar o registro"
        );
      }
};

const deleteById = async (id: number): Promise<void | Error> => {
    try {
        await ApiRota.delete<TipoVeiculo>(`/TipoVeiculo/${id}`);
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