import { createContext, useReducer} from "react";
import storeReducer, { initialStore } from "./storeReducer";

const StoreContext = createContext();
// incluye PROVIDER y CONSUMER

const StoreProvider = ({ children }) => {

    const [ store, dispatch ] = useReducer(storeReducer, initialStore)

    return (
        <StoreContext.Provider value={[ store, dispatch ]}>
            {children}
        </StoreContext.Provider>
    )
}

export { StoreContext}
export default StoreProvider;