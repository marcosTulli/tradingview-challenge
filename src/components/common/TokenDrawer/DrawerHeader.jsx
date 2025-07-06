import { Box, IconButton, Typography } from "@mui/material";
import { Close } from "@mui/icons-material";
import useDisplayTokenData from "../hooks/useDisplayTokenData";

export const DrawerHeader = () => {
  const { closeDisplay, selectedToken: token } = useDisplayTokenData();
  if (!token) return null;

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      className="font-header"
    >
      <Typography variant="h6" color="white">
        {token.name} ({token.symbol})
      </Typography>
      <IconButton onClick={closeDisplay} sx={{ color: "white" }}>
        <Close />
      </IconButton>
    </Box>
  );
};
