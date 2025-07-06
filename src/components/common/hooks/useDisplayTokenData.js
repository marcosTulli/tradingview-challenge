import { useDispatch, useSelector } from "react-redux";
import {
  setSelectedToken,
  clearSelectedToken,
} from "../../../redux/reducers/displayTokenData";
import { buildTokenMetadata } from "utils/buildTokenMetadata";

const useDisplayTokenData = () => {
  const dispatch = useDispatch();
  const selectedToken = useSelector(
    (state) => state.displayTokenData.selectedToken
  );
  const isOpen = Boolean(selectedToken);
  const tokenMetadata = buildTokenMetadata({ token: selectedToken });

  return {
    selectedToken,
    isOpen,
    tokenMetadata,
    toggleDisplay: (token) => dispatch(setSelectedToken(token)),
    closeDisplay: () => dispatch(clearSelectedToken()),
  };
};

export default useDisplayTokenData;
