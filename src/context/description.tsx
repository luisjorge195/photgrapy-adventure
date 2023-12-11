import { ReactNode, createContext, useState } from 'react';

interface DescriptionContextProps {
  description: string;
  setDescription: (value: string) => void;
}

const initialContext: DescriptionContextProps = {
  description: '',
  setDescription: () => {},
};

export const DescriptionContext = createContext<DescriptionContextProps>(initialContext);

interface DescriptionProviderProps {
  children: ReactNode;
}

export const DescriptionProvider:React.FC<DescriptionProviderProps> = ({children}) =>{
    const [description, setDescription] = useState('');
    return (
        <DescriptionContext.Provider
          value={{
            description,
            setDescription
          }}
        >
          {children}
        </DescriptionContext.Provider>
      );
}