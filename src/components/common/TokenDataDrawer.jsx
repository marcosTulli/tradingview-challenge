import { Drawer, Box, IconButton, Typography, Divider } from "@mui/material";
import { Close } from "@mui/icons-material";
import useDisplayTokenData from "./hooks/useDisplayTokenData";

const TokenDataDrawer = () => {
  const { isOpen, closeDisplay, selectedToken } = useDisplayTokenData();

  if (!selectedToken) return null;

  return (
    <Drawer anchor="right" open={isOpen} onClose={closeDisplay}>
      <Box width={350} p={2}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">
            {selectedToken.name} ({selectedToken.symbol})
          </Typography>
          <IconButton onClick={closeDisplay}>
            <Close />
          </IconButton>
        </Box>
        <Divider sx={{ my: 2 }} />

        <Box display="flex" alignItems="center" mb={2}>
          <img
            src={`https://assets.thetatoken.org/tokens/${selectedToken.logo}`}
            alt={selectedToken.symbol}
            style={{
              width: 40,
              height: 40,
              marginRight: 16,
              borderRadius: "50%",
            }}
          />
          <Typography variant="subtitle1">{selectedToken.name}</Typography>
        </Box>

        <Typography>
          <strong>Derived ETH:</strong> {selectedToken.derivedETH}
        </Typography>
        <Typography>
          <strong>Derived USD:</strong> ${selectedToken.derivedUSD}
        </Typography>
        <Typography>
          <strong>Total Liquidity:</strong>{" "}
          {Number(selectedToken.totalLiquidity).toLocaleString()}
        </Typography>
        <Typography>
          <strong>Total Liquidity USD:</strong> $
          {Number(selectedToken.totalLiquidityUSD).toLocaleString()}
        </Typography>
        <Typography>
          <strong>Trade Volume:</strong>{" "}
          {Number(selectedToken.tradeVolume).toLocaleString()}
        </Typography>
        <Typography>
          <strong>Trade Volume ETH:</strong>{" "}
          {Number(selectedToken.tradeVolumeETH).toLocaleString()}
        </Typography>
        <Typography>
          <strong>Trade Volume USD:</strong> $
          {Number(selectedToken.tradeVolumeUSD).toLocaleString()}
        </Typography>
        <Typography>
          <strong>Transaction Count:</strong> {selectedToken.txCount}
        </Typography>
        <Typography>
          <strong>Transaction Count (24H):</strong> {selectedToken.txCount24Hrs}
        </Typography>
        <Typography>
          <strong>Volume (24H) ETH:</strong>{" "}
          {Number(selectedToken.volume24HrsETH).toLocaleString()}
        </Typography>
        <Typography>
          <strong>Volume (24H) USD:</strong> $
          {Number(selectedToken.volume24HrsUSD).toLocaleString()}
        </Typography>
      </Box>
    </Drawer>
  );
};

export default TokenDataDrawer;
