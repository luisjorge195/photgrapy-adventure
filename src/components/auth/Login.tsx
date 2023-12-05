import { Amplify } from "aws-amplify";
import awsExports from "../../aws-exports";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import "../../App.css";
const Login = () => {
  Amplify.configure({
    Auth: {
      Cognito: {
        userPoolClientId: awsExports.USER_POOL_APP_CLIENT_ID,
        userPoolId: awsExports.USER_POOL_ID,
      },
    },
  });
  return (
    <section className="grid place-items-center h-screen">
        <Authenticator/>
      
    </section>
  );
};

export default Login;
