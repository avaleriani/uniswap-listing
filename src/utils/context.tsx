import { createContext, useContext, useEffect, useState } from "react";

type IAppProvider = {
  watchlist: string[];
};

interface AppState {
  state: IAppProvider;
  setState: (state: any) => void;
}

const AppContext = createContext([{}, () => {}]);

const AppProvider = props => {
  const { children } = props;

  // TODO: Get watchlist from localstorage if exists
  const [state, setState] = useState<IAppProvider>({
    watchlist: [],
  });

  return <AppContext.Provider value={[state, setState]}>{children}</AppContext.Provider>;
};

const useAppContext = (): AppState => {
  const [state, setState] = useContext<any>(AppContext);
  
  useEffect(() => {
    // TODO: save state to local storage
  }, [state.waatchlist]);

  return { state, setState };
};

export { AppContext, AppProvider, useAppContext };
