import * as React from "react";
import LoginTemplate from "src/components/templates/login";
import { signin, register } from "src/modules/blockchain";
import { connect } from "react-redux";
import { ReduxState } from "src/createStore";
import { Dispatch } from "redux";

interface Props {
  dispatch: Dispatch;
  history: any;
}

class Login extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  public render() {
    const { dispatch } = this.props;
    return (
      <div>
        <LoginTemplate
          login={v => {
            const result = signin(v, dispatch);
            console.log({ result });
          }}
          register={() => {
            register(dispatch);
          }}
        />
      </div>
    );
  }
}

export default connect((state: ReduxState) => state.blockchain)(Login);
