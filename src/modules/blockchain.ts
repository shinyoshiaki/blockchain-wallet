import { Dispatch, Action } from "redux";
import BlockChainApp from "blockchain-ts";
import { isValidPassphrase } from "blockchain-ts/lib/blockchain/crypto/keys";

export interface BlockchainState {
  blockchain: BlockChainApp | undefined;
}

const initialState: BlockchainState = {
  blockchain: undefined
};

enum ActionNames {
  SET_VALUE = "test/set_value"
}

interface SetValueAction extends Action {
  type: ActionNames.SET_VALUE;
  key: string;
  value: any;
}

export function setValue(
  key: string,
  value: any,
  dispatch: Dispatch<SetValueAction>
) {
  dispatch({ type: ActionNames.SET_VALUE, key, value });
}

export function signin(phrase: string, dispatch: Dispatch<SetValueAction>) {
  if (isValidPassphrase(phrase)) {
    const blockchain = new BlockChainApp(phrase);
    setValue("blockchain", blockchain, dispatch);
    return true;
  } else {
    return false;
  }
}

export function register(dispatch: Dispatch<SetValueAction>) {
  const blockchain = new BlockChainApp();
  setValue("blockchain", blockchain, dispatch);
}

type TestActions = SetValueAction;

export default function reducer(state = initialState, action: TestActions) {
  switch (action.type) {
    case ActionNames.SET_VALUE:
      return { ...state, [action.key]: action.value };

    default:
      return state;
  }
}
