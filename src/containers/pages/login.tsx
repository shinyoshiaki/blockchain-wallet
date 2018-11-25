import * as React from "react";
import LoginTemplate from "src/components/templates/login";

interface Props {
  name: string;
}

export default class Login extends React.Component<{}, {}> {
  constructor(props: Props) {
    super(props);
  }

  public render() {
    return (
      <div>
        <LoginTemplate
          login={v => {
            console.log(v);
          }}
          register={() => {
            console.log("register");
          }}
        />
      </div>
    );
  }
}
