import { createContext, useContext, useEffect, useState } from "react";
import type { Pool } from "utils/fetch/fetchPools";

type IAppProvider = {
  watchlist: Pool[];
};

interface AppState {
  state: IAppProvider;
  setState: (state: any) => void;
}

// This is our global state for the site.
const AppContext = createContext([{}, () => {}]);

const AppProvider = props => {
  const { children } = props;

  // TODO: Extract localstorage functionality.
  const initialState = {
    watchlist: typeof window !== "undefined" ? JSON.parse(localStorage.getItem("watchlist")) || [] : [],
  };
  const [state, setState] = useState<IAppProvider>(initialState);

  return <AppContext.Provider value={[state, setState]}>{children}</AppContext.Provider>;
};

const useAppContext = (): AppState => {
  const [state, setState] = useContext<any>(AppContext);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage?.setItem("watchlist", JSON.stringify(state.watchlist));
    }
  }, [state.watchlist]);

  return { state, setState };
};

export { AppContext, AppProvider, useAppContext };
