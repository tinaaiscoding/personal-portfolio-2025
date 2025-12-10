import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
} from 'react';

type LogoContext = {
  logoHovered: boolean;
  setLogoHovered: Dispatch<SetStateAction<boolean>>;
};

const LogoContext = createContext<LogoContext | undefined>(undefined);

export const LogoProvider: React.FC<{
  children: React.ReactNode;
  value: LogoContext;
}> = ({ children, value }) => {
  return <LogoContext.Provider value={value}>{children}</LogoContext.Provider>;
};

export function useLogoContext() {
  const context = useContext(LogoContext);

  if (!context)
    throw new Error('useLogoContext must be used with LogoContext Provider');

  return context;
}
