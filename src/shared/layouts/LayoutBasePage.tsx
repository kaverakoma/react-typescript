import {
  Icon,
  IconButton,
  useTheme,
  useMediaQuery,
  Divider,
} from "@mui/material";
import { Box } from "@mui/system";
import { useDrawerContext } from "../contexts";

interface ILayoutBasePage {
  children: React.ReactNode;
  barraDeFerramentas?: React.ReactNode;
}

export const LayoutBasePage: React.FC<ILayoutBasePage> = ({
  children,
  barraDeFerramentas,
}) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const { toggleDrawerOpen } = useDrawerContext();

  return (
    <Box height="100%" display="flex" flexDirection="column" gap={1}>
      <Box
        padding={2}
        display="flex"
        alignItems="center"
        justifyItems="center"
        height={theme.spacing(3)}
        gap={2}
      >
        {smDown && (
          <IconButton onClick={toggleDrawerOpen}>
            <Icon>menu</Icon>
          </IconButton>
        )}
        {smDown && (
          <img
            src="logo.svg"
            alt="Logo"
            loading="lazy"
            width={theme.spacing(11)}
            height={theme.spacing(11)}
          />
        )}
      </Box>
      <Divider />

      {barraDeFerramentas && <Box paddingX={1}>{barraDeFerramentas}</Box>}

      <Box flex={1} overflow="auto" padding={1}>
        {children}
      </Box>
    </Box>
  );
};
