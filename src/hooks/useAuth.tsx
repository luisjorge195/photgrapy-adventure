

import { fetchAuthSession } from "aws-amplify/auth";
import { useEffect, useState } from "react";

const useAuth = () => {
  const [session, setSession] = useState({})
  async function currentSession() {
    try {
      const { accessToken, idToken } = (await fetchAuthSession()).tokens ?? {};
      setSession({accessToken, idToken})
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(()=>{
    currentSession()
  },[])
  
  return {session};
};

export default useAuth;
