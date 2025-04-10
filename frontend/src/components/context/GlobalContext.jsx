import {createContext, useContext, useReducer } from "react";
import {reducer} from "./reducer";

const initialState = {
    watchlist:  [],
    watched:[],
};
    export const GlobalContext = createContext(initialState);


    const ContextProvider = ({ children }) => {
        const [state , dispatch] = useReducer(reducer, initialState);
        return (
          <GlobalContext.Provider
            value={{
              watchlist: state.watchlist,
              watched: state.watched,
              MoviesDispatch: dispatch,
            }}
          >
            {children}
          </GlobalContext.Provider>
        );
      };
      

    export default ContextProvider;

    export const useMovieContext = () => {
return useContext(GlobalContext);
    };