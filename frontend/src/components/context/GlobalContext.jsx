import {createContext, useContext, useReducer, useEffect} from "react";
import {reducer} from "./reducer";

const initialState = {
    watchlist: localStorage.getItem("watchlist")
     ? JSON.parse(localStorage.getItem("watchlist"))
    :[],
    watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    :[],
    darkMode: localStorage.getItem("darkMode") === "true" || false, // Add dark mode state
};

export const GlobalContext = createContext(initialState);

const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    
    useEffect(() => {
        localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    }, [state.watchlist]);
    
    useEffect(() => {
        localStorage.setItem("watched", JSON.stringify(state.watched));
    }, [state.watched]);
    
    // Add new useEffect for dark mode
    useEffect(() => {
        localStorage.setItem("darkMode", state.darkMode);
        if (state.darkMode) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    }, [state.darkMode]);
    
    // Add toggle function
    const toggleDarkMode = () => {
        dispatch({ type: "TOGGLE_DARK_MODE" });
    };
    
    return (
        <GlobalContext.Provider
            value={{
                watchlist: state.watchlist,
                watched: state.watched,
                darkMode: state.darkMode,
                MoviesDispatch: dispatch,
                toggleDarkMode, // Add toggle function to context
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