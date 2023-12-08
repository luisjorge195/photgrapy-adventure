import { Amplify } from "aws-amplify";
// import awsExports from "../aws-exports";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import '../App.css'
// import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { AuthUser } from "aws-amplify/auth";
import { ReactNode } from "react";
import { useCookies } from "react-cookie";
// eslint-disable-next-line
/* eslint-disable */
const Login = () => {
  const [, setCookie] = useCookies(['session', 'nameUser']);
  const navigate = useNavigate()
  Amplify.configure({
    Auth: {
      Cognito: {
        userPoolClientId:import.meta.env.VITE_USER_POOL_APP_CLIENT_ID,
        userPoolId:import.meta.env.VITE_USER_POOL_ID,
      },
    },
  });
   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  return (
    <section className="grid place-items-center h-screen bg-image log">
        <Authenticator>
        {({ user }:{ user?: AuthUser | undefined }) => {
          setCookie('session',user?.username,{ maxAge: 7200 })
          setCookie('nameUser',user?.signInDetails?.loginId,{ maxAge: 7200 })
          
          return(
                <div>
                   {user && navigate('/inicio/contenido') as ReactNode }
                </div>
            )}}
        </Authenticator>
    </section>
  );
};

export default Login;
