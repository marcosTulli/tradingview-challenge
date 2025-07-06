import { Drawer, Box, IconButton, Typography, Divider } from "@mui/material";
import { Close } from "@mui/icons-material";
import useDisplayTokenData from "./hooks/useDisplayTokenData";
import { svg2img } from "utils/randomAvatar";

const TokenDataDrawer = () => {
  const {
    isOpen,
    closeDisplay,
    selectedToken: token,
    tokenMetadata,
  } = useDisplayTokenData();

  if (!token) return null;

  const logo = token.logo
    ? `https://assets.thetatoken.org/tokens/${token.logo}`
    : svg2img(token);

  return (
    <Drawer anchor="right" open={isOpen} onClose={closeDisplay}>
      <Box width={350} p={2}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">
            {token.name} ({token.symbol})
          </Typography>
          <IconButton onClick={closeDisplay}>
            <Close />
          </IconButton>
        </Box>
        <Divider sx={{ my: 2 }} />

        <Box display="flex" alignItems="center" mb={2}>
          <img
            src={logo}
            alt={"token-logo"}
            style={{
              width: 40,
              height: 40,
              marginRight: 16,
              borderRadius: "50%",
            }}
          />
          <Typography variant="subtitle1">{token.name}</Typography>
        </Box>

        {tokenMetadata.map(({ label, value }) => (
          <Typography key={label}>
            <strong>{label}:</strong> {value}
          </Typography>
        ))}
      </Box>
    </Drawer>
  );
};

export default TokenDataDrawer;
