import { Drawer, Box, IconButton, Typography, Divider } from "@mui/material";
import { Close } from "@mui/icons-material";
import useDisplayTokenData from "./hooks/useDisplayTokenData";
import { svg2img } from "utils/randomAvatar";

const TokenDataDrawer = () => {
  const { isOpen, closeDisplay, selectedToken: token } = useDisplayTokenData();

  if (!token) return null;

  const tokenMetadata = [
    {
      label: "Derived ETH",
      value: token.derivedETH,
    },
    {
      label: "Derived USD",
      value: `$${token.derivedUSD}`,
    },
    {
      label: "Total Liquidity",
      value: Number(token.totalLiquidity).toLocaleString(),
    },
    {
      label: "Total Liquidity USD",
      value: `$${Number(token.totalLiquidityUSD).toLocaleString()}`,
    },
    {
      label: "Trade Volume",
      value: Number(token.tradeVolume).toLocaleString(),
    },
    {
      label: "Trade Volume ETH",
      value: Number(token.tradeVolumeETH).toLocaleString(),
    },
    {
      label: "Trade Volume USD",
      value: `$${Number(token.tradeVolumeUSD).toLocaleString()}`,
    },
    {
      label: "Transaction Count",
      value: token.txCount,
    },
    {
      label: "Transaction Count (24H)",
      value: token.txCount24Hrs,
    },
    {
      label: "Volume (24H) ETH",
      value: Number(token.volume24HrsETH).toLocaleString(),
    },
    {
      label: "Volume (24H) USD",
      value: `$${Number(token.volume24HrsUSD).toLocaleString()}`,
    },
  ];

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
