import { Box, Button, Icon, Paper, TextField, useTheme } from "@mui/material";

interface IBarraDeFerramentasProps {
  textoBusca?: string;
  mostrarInputBusca?: boolean;
  aoMudarTextoBusca?: (novoTexto: string) => void;
  textoBotaoNovo?: string;
  mostrarBotaoNovo?: boolean;
  aoClicarNoBotaoNovo?: () => void;
}

export const BarraDeFerramentas: React.FC<IBarraDeFerramentasProps> = ({
  textoBusca = "",
  mostrarInputBusca = false,
  aoMudarTextoBusca,
  textoBotaoNovo = "",
  mostrarBotaoNovo = false,
  aoClicarNoBotaoNovo,
}) => {
  const theme = useTheme();
  return (
    <Box
      height={theme.spacing(4)}
      padding={2}
      display="flex"
      gap={1}
      alignItems="center"
      component={Paper}
    >
      {mostrarInputBusca && (
        <TextField
          value={textoBusca}
          size="small"
          placeholder="Pesquisar"
          onChange={(e) => aoMudarTextoBusca?.(e.target.value)}
        />
      )}
      {mostrarBotaoNovo && (
        <Box flex={1} display="flex" justifyContent="end">
          <Button disableElevation endIcon={<Icon>add</Icon>}>
            Novo
          </Button>
        </Box>
      )}
    </Box>
  );
};
