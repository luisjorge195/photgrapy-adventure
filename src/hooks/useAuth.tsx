

import { useCookies } from "react-cookie";
const useAuth = () => {
  const [cookie,] = useCookies(['session', 'nameUser']);
  
  return {cookie};
};

export default useAuth;
