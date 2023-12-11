import React, { createContext, ReactNode, useState } from 'react';

interface ToastState {
  message: string;
  type: string;
}

interface ToastContextProps {
  setToastState: React.Dispatch<React.SetStateAction<ToastState>>;
}

export const ToastContext = createContext<ToastContextProps | null>(null);

interface ToastProviderProps {
  children: ReactNode;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [, setToastState] = useState<ToastState>({
    message: '',
    type: '',
  });

  const contextValue: ToastContextProps = {
    setToastState,
  };

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
    </ToastContext.Provider>
  );
};