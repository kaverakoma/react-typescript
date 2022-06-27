import { SentimentDissatisfied } from "@mui/icons-material";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { BarraDeFerramentasListagem } from "../../shared/components";
import { LayoutBasePage } from "../../shared/layouts";
import { TipoVeiculoService } from "../../shared/services/api/tipoVeiculo/TipoVeiculoService";

interface IListTipoVeiculos {
  id: number;
  descricao: string;
}

export const TipoVeiculos: React.FC = () => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const [listTipoVeiculos, setListTipoVeiculos] = useState<IListTipoVeiculos[]>(
    []
  );
  useEffect(() => {
    TipoVeiculoService.getAll().then((result) => {
      if (result instanceof Error) {
        alert(result.message);
      } else {
        setListTipoVeiculos(result.data);
      }
    });
  }, []);

  return (
    <LayoutBasePage
      barraDeFerramentas={
        <BarraDeFerramentasListagem mostrarInputBusca mostrarBotaoNovo />
      }
    >
      <Box component={Paper} padding={0}>
        <Table>
          {listTipoVeiculos.length >= 1 && (
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="h6">Descrição</Typography>
                </TableCell>
                <TableCell width="130" align="center">
                  <Typography variant="h6">Ações</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
          )}
          <TableBody>
            {listTipoVeiculos.length >= 1 &&
              listTipoVeiculos.map((tipoVeiculo) => (
                <TableRow key={tipoVeiculo.id}>
                  <TableCell>{tipoVeiculo.descricao}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        {listTipoVeiculos.length < 1 && (
          <Box>
            <SentimentDissatisfied />{" "}
            <Typography variant="h6">
              Não existem tipos de veículos cadastrados.
            </Typography>
          </Box>
        )}
      </Box>
    </LayoutBasePage>
  );
};
