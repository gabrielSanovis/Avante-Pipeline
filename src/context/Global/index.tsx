import { createContext, useContext, useReducer } from "react";

export interface IGlobalContext {
  isOpen: boolean;
  setIsOpen: React.DispatchWithoutAction;
}

export const Context = createContext<IGlobalContext | null>(null);

export const GlobalProvider: React.FC<any> = ({ children }) => {
  const [isOpen, setIsOpen] = useReducer(state => !state, false)
  return (
    <Context.Provider
      value={{
        isOpen,
        setIsOpen
      }}
    >
      {children}
    </Context.Provider>
  );
}

export const useGlobal = () => {
  const content = useContext(Context);
  if (!content === null) {
    console.error("Você está tentando usar um contex.t fora do provider");
    return null;
  }
  return content;
};