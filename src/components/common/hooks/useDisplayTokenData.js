// useDisplayTokenData.js
import { useState } from "react";

const useDisplayTokenData = () => {
  const [selectedToken, setSelectedToken] = useState(null);

  const toggleDisplay = (token) => {
    setSelectedToken(token);
  };

  const closeDisplay = () => {
    setSelectedToken(null);
  };

  return {
    selectedToken,
    isOpen: Boolean(selectedToken),
    toggleDisplay,
    closeDisplay,
  };
};

export default useDisplayTokenData;
