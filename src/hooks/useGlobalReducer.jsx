import { useContext, useReducer, createContext } from "react";
import storeReducer, { initialStore } from "../store"; // asegúrate que esto apunte bien

// Crear el contexto
const StoreContext = createContext();

// Proveedor del contexto
export function StoreProvider({ children }) {
  const [store, dispatch] = useReducer(storeReducer, initialStore());
  return (
    <StoreContext.Provider value={{ store, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
}

// Hook para acceder fácilmente
export const useGlobalContext = () => useContext(StoreContext);
