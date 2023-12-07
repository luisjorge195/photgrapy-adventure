import { Amplify } from "aws-amplify";
import awsExports from "../aws-exports";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import '../App.css'
// import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate()
  Amplify.configure({
    Auth: {
      Cognito: {
        userPoolClientId:import.meta.env.VITE_USER_POOL_APP_CLIENT_ID,
        userPoolId:import.meta.env.VITE_USER_POOL_ID,
      },
    },
  });
  return (
    <section className="grid place-items-center h-screen bg-image log">
        <Authenticator>
        {({ user }) => 
          user ? navigate('/inicio/contenido'): ''
        }
        </Authenticator>
    </section>
  );
};

export default Login;
