const tokenKeys = {
  derivedETH: "Derived ETH",
  tradeVolume: "Trade Volume",
  tradeVolumeETH: "Trade Volume ETH",
  totalLiquidity: "Total Loquidity",
  txCount: "Transaction Count",
  volume24HrsETH: "Volume (24H) ETH",
  volume24HrsUSD: "Volume (24H) USD",
  txCount24Hrs: "Transaction Count (24H)",
  tradeVolumeUSD: "Trade Volume USD",
  totalLiquidityUSD: "Total Liquidity USD",
  derivedUSD: "Derived USD",
};

const monetaryValues = [
  "derivedUSD",
  "totalLiquidityUSD",
  "tradeVolumeUSD",
  "volume24HrsUSD",
];
const numberValues = [
  "totalLiquidity",
  "tradeVolume",
  "tradeVolumeETH",
  "volume24HrsETH",
];

export const buildTokenMetadata = ({ token }) => {
  if (Boolean(token)) {
    return Object.keys(token)
      .map((key) => {
        const label = tokenKeys[key];
        if (!label) return null;
        let value = token[key];
        if (monetaryValues.includes(key)) {
          value = `$${Number(value).toLocaleString()}`;
        } else if (numberValues.includes(key)) {
          value = Number(value).toLocaleString();
        } else if (typeof value === "number") {
          value = value.toLocaleString();
        } else if (typeof value === "string" && !isNaN(Number(value))) {
          value = Number(value).toLocaleString();
        }

        return { label, value };
      })
      .filter(Boolean);
  } else return [];
};
