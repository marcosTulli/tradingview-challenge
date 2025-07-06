import { useDispatch, useSelector } from "react-redux";
import {
  setSelectedToken,
  clearSelectedToken,
} from "../../../redux/reducers/displayTokenData";

const useDisplayTokenData = () => {
  const dispatch = useDispatch();
  const selectedToken = useSelector(
    (state) => state.displayTokenData.selectedToken
  );
  const isOpen = Boolean(selectedToken);

  return {
    selectedToken,
    isOpen,
    toggleDisplay: (token) => dispatch(setSelectedToken(token)),
    closeDisplay: () => dispatch(clearSelectedToken()),
  };
};

export default useDisplayTokenData;
